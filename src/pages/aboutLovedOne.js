import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AboutLovedOne() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        condition: '',
        traumaDate: '',
        relationship: '',
        physicalChallenges: [],
        mentalHealth: '',
        caregiverChallenges: [],
        recoveryGoals: [],
        additionalInfo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleMultiSelectChange = (e) => {
        const { name, options } = e.target;
        const values = Array.from(options).filter(option => option.selected).map(option => option.value);
        setFormData({ ...formData, [name]: values });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="container">
            <h2>Tell Us About Your Loved One’s Accident or Trauma</h2>
            <form onSubmit={handleSubmit} className="info-form">
                <div className="form-group">
                    <label htmlFor="condition">What type of condition or trauma is your loved one experiencing?</label>
                    <select id="condition" name="condition" onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="physical-injury">Physical Injury</option>
                        <option value="chronic-condition">Chronic Condition</option>
                        <option value="mental-emotional-trauma">Mental/Emotional Trauma</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="traumaDate">When did the accident or trauma occur?</label>
                    <input type="date" id="traumaDate" name="traumaDate" onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="relationship">What is your relationship to the individual?</label>
                    <select id="relationship" name="relationship" onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="parent">Parent</option>
                        <option value="spouse">Spouse/Partner</option>
                        <option value="sibling">Sibling</option>
                        <option value="friend">Friend</option>
                        <option value="caregiver">Caregiver</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="physicalChallenges">What physical challenges are they facing? (Select all that apply)</label>
                    <select
                        id="physicalChallenges"
                        name="physicalChallenges"
                        multiple
                        onChange={handleMultiSelectChange}
                    >
                        <option value="mobility-issues">Difficulty walking or mobility issues</option>
                        <option value="chronic-pain">Chronic pain</option>
                        <option value="muscle-weakness">Muscle weakness or stiffness</option>
                        <option value="fatigue">Fatigue</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="mentalHealth">How would you describe your loved one’s mental health during recovery?</label>
                    <select id="mentalHealth" name="mentalHealth" onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="stable">Stable and positive</option>
                        <option value="occasionally-stressed">Occasionally stressed or anxious</option>
                        <option value="significant-challenges">Struggling with significant emotional challenges</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="caregiverChallenges">As a caregiver, what challenges are you facing? (Select all that apply)</label>
                    <select
                        id="caregiverChallenges"
                        name="caregiverChallenges"
                        multiple
                        onChange={handleMultiSelectChange}
                    >
                        <option value="balancing-caregiving">Balancing caregiving with other responsibilities</option>
                        <option value="providing-effective-support">Understanding how to provide effective support</option>
                        <option value="stress-burnout">Managing stress or burnout</option>
                        <option value="accessing-resources">Accessing appropriate resources for recovery</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="recoveryGoals">What are the top recovery goals for your loved one? (Select all that apply)</label>
                    <select
                        id="recoveryGoals"
                        name="recoveryGoals"
                        multiple
                        onChange={handleMultiSelectChange}
                    >
                        <option value="regaining-mobility">Regaining physical mobility</option>
                        <option value="reducing-pain">Managing or reducing pain</option>
                        <option value="improving-mental-health">Improving emotional well-being</option>
                        <option value="achieving-independence">Achieving independence in daily tasks</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="additionalInfo">Is there any other information you’d like to share?</label>
                    <textarea id="additionalInfo" name="additionalInfo" onChange={handleChange}></textarea>
                </div>

                <button type="submit" className="button">Submit</button>
            </form>
        </div>
    );
}

export default AboutLovedOne;