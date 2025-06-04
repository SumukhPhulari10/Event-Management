'use client';

import { useState } from 'react';
import styles from './signup.module.css';

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    rollNumber: '',
    department: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // TODO: Implement registration logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.signupBox}>
        <div className={styles.header}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/41/MGM_Institute_of_Health_Sciences_Logo.png"
            alt="MGM Logo"
            className={styles.logo}
          />
          <h1 className={styles.title}>Student Registration</h1>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="fullName" className={styles.label}>Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={styles.input}
              required
              placeholder="Enter your full name"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>College Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
              placeholder="Enter your college email"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="rollNumber" className={styles.label}>Roll Number</label>
            <input
              type="text"
              id="rollNumber"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              className={styles.input}
              required
              placeholder="Enter your roll number"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="department" className={styles.label}>Department</label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={styles.input}
              required
            >
              <option value="">Select Department</option>
              <option value="CSE">Computer Science Engineering</option>
              <option value="IT">Information Technology</option>
              <option value="ECE">Electronics & Communication</option>
              <option value="EE">Electrical Engineering</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="CE">Civil Engineering</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              required
              placeholder="Create a password"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={styles.input}
              required
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit" className={styles.button}>
            Create Account
          </button>
        </form>
        <div className={styles.links}>
          <a href="/" className={styles.backLink}>← Back to Home</a>
          <a href="/signin" className={styles.signinLink}>Already have an account? Sign in</a>
        </div>
      </div>
    </div>
  );
} 