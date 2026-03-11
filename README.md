# Healing Together

> **Support Made Simple. Recover Together.**

Healing Together is a web application designed to support caregivers and their loved ones through the recovery process. It provides a personalized care plan, milestone tracking, mental health resources, a local resources directory, and a community support hub — all in one place.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Security](#security)
- [Test Account](#test-account)
- [Project Structure](#project-structure)
- [Pages Overview](#pages-overview)
- [Contributing](#contributing)

---

## About the Project

Healing Together was built to make the caregiving journey less overwhelming. After a loved one experiences trauma or surgery, caregivers are often left without clear guidance. This app walks caregivers through an onboarding process, generates a tailored care plan, and provides ongoing support through task tracking, mental health tools, and a community.

---

## Features

- **Onboarding Flow** — Step-by-step setup to capture information about the patient's condition and recovery needs
- **Personalized Care Plan** — A detailed recovery plan with weekly timelines and task checklists (currently focused on knee surgery recovery)
- **Dashboard** — Central hub showing progress, motivational prompts, and quick links to all features
- **Progress Tracking** — Visual progress bar and task completion tracking across recovery milestones
- **Mental Health Support** — Caregiver tips, guided audio sessions, and a community space with chats, groups, and discussion boards
- **Resources Directory** — Searchable map-based directory of local medical professionals and support services
- **Milestone Tracking** — Track and celebrate recovery milestones as they are achieved
- **Authentication** — Sign up and log in pages for personalized access

---

## Tech Stack

**Frontend**

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | Frontend UI framework |
| [React Router v7](https://reactrouter.com/) | Client-side routing |
| [Bootstrap 5](https://getbootstrap.com/) | UI styling and layout |
| [React Bootstrap](https://react-bootstrap.netlify.app/) | Bootstrap components for React |

**Backend**

| Technology | Purpose |
|---|---|
| [Node.js](https://nodejs.org/) | Server runtime |
| [Express](https://expressjs.com/) | REST API framework |
| [bcryptjs](https://github.com/dcodeIO/bcrypt.js) | Password hashing |
| [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) | JWT session tokens |
| [concurrently](https://github.com/open-cli-tools/concurrently) | Run frontend & backend together |

---

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes bundled with Node.js)

To verify your installations:
```bash
node -v
npm -v
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd healingtogether
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd server
npm install
cd ..
```

### 4. Start both servers

```bash
npm run dev
```

This starts the Express backend on `http://localhost:5000` and the React app on `http://localhost:3000` at the same time. The app will open automatically in your browser.

> **Windows users:** If you see a script execution error in PowerShell, run this command once, then retry:
> ```powershell
> Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
> ```

---

## Available Scripts

Run these from the project root (`healingtogether/`):

| Script | Description |
|---|---|
| `npm run dev` | **Starts both the backend and frontend together (recommended)** |
| `npm start` | Runs the React frontend only at `http://localhost:3000` |
| `npm run server` | Runs the Express backend only at `http://localhost:5000` |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run build` | Builds the app for production into the `build/` folder |
| `npm run eject` | Ejects from Create React App (one-way, use with caution) |

---

## Security

Authentication is handled with industry-standard practices:

- **Password hashing** — All passwords are hashed using [bcryptjs](https://github.com/dcodeIO/bcrypt.js) with a salt round of 10 before being stored. Plain text passwords are never saved.
- **JWT tokens** — On successful login or sign up, the server issues a signed JSON Web Token (JWT) valid for 7 days. This token is stored in `localStorage` and identifies the logged-in user.
- **User data** — Accounts are stored in `server/users.json`, which is gitignored and never committed to the repository.

---

## Test Account

A test account has been pre-created for demo and development purposes:

| Field | Value |
|---|---|
| **Name** | John Doe |
| **Email** | test@uvic.ca |
| **Password** | HT |

> Note: This account is stored locally in `server/users.json` and is only available on the machine where it was created.

---

## Project Structure

```
healingtogether/
├── public/
│   ├── index.html          # HTML entry point
│   ├── tasks.txt           # Recovery task data loaded at runtime
│   └── manifest.json
├── src/
│   ├── App.js              # Root component and route definitions
│   ├── navbar.js           # Navigation bar
│   ├── styles.css          # Global styles
│   ├── assets/             # Images and static assets
│   ├── components/
│   │   ├── ProgressBar.js  # Recovery progress bar component
│   │   └── TaskList.js     # Task checklist component
│   ├── context/
│   │   └── taskContext.js  # React context for task state
│   └── pages/
│       ├── home.js                  # Landing page
│       ├── login.js                 # Login page
│       ├── signup.js                # Sign up page
│       ├── onboarding.js            # Onboarding introduction
│       ├── aboutLovedOne.js         # Patient info collection
│       ├── guidedTourPlaceholder.js # Guided tour (in progress)
│       ├── trackingMilestones.js    # Milestone tracking
│       ├── dashboard.js             # Main user dashboard
│       ├── fullCarePlan.js          # Full care plan with task list
│       ├── mentalHealth.js          # Mental health support hub
│       ├── resourcesDirectory.js    # Local resources map & directory
│       └── about.js                 # About page
└── package.json
```

---

## Pages Overview

| Route | Page | Description |
|---|---|---|
| `/` | Home | Landing page with Sign Up / Log In |
| `/signup` | Sign Up | Create a new account |
| `/login` | Login | Log in to your account |
| `/onboarding` | Onboarding | Introduction to the app's setup steps |
| `/about-loved-one` | About Loved One | Enter details about the patient |
| `/guided-tour` | Guided Tour | Walkthrough of the app (placeholder) |
| `/tracking-milestones` | Milestones | Complete onboarding and enter the app |
| `/dashboard` | Dashboard | Main hub with progress, tasks, and links |
| `/fullcareplan` | Full Care Plan | Detailed recovery plan and task checklist |
| `/mental-health` | Mental Health | Tips, guided audio, and community support |
| `/resources` | Resources Directory | Map-based search for local professionals |

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request
