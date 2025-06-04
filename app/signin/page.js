'use client';

import { useState } from 'react';
import styles from './signin.module.css';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement authentication logic
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
      <div className={styles.signinBox}>
        <div className={styles.header}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/41/MGM_Institute_of_Health_Sciences_Logo.png"
            alt="MGM Logo"
            className={styles.logo}
          />
          <h1 className={styles.title}>Student Sign In</h1>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
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
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className={styles.button}>
            Sign In
          </button>
        </form>
        <div className={styles.links}>
          <a href="/" className={styles.backLink}>← Back to Home</a>
          <a href="/signup" className={styles.signupLink}>Don't have an account? Sign up</a>
        </div>
      </div>
    </div>
  );
} 