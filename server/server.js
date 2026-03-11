const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'healingtogether_dev_secret';
const USERS_FILE = path.join(__dirname, 'users.json');

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

function getUsers() {
    if (!fs.existsSync(USERS_FILE)) return [];
    return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
}

function saveUsers(users) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Sign Up
app.post('/api/signup', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const users = getUsers();

    if (users.find((u) => u.email === email)) {
        return res.status(409).json({ error: 'An account with this email already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ name, email, password: hashedPassword });
    saveUsers(users);

    const token = jwt.sign({ email, name }, JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ token, name });
});

// Log In
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }

    const users = getUsers();
    const user = users.find((u) => u.email === email);

    if (!user) {
        return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const token = jwt.sign({ email, name: user.name }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, name: user.name });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
