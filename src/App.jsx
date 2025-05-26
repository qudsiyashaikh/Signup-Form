import React, { useState } from 'react';

const PopXSignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create your <br />PopX account</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Full Name*</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Marry Doe"
          style={styles.input}
          required
        />

        <label style={styles.label}>Phone number*</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Marry Doe"
          style={styles.input}
          required
        />

        <label style={styles.label}>Email address*</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Marry Doe"
          style={styles.input}
          required
        />

        <label style={styles.label}>Password*</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Marry Doe"
          style={styles.input}
          required
        />

        <label style={styles.label}>Company name</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Marry Doe"
          style={styles.input}
        />

        <p style={{ marginTop: '20px', marginBottom: '10px' }}>Are you an Agency?*</p>
        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={formData.isAgency === 'yes'}
              onChange={handleChange}
              style={styles.radio}
            />
            Yes
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={formData.isAgency === 'no'}
              onChange={handleChange}
              style={styles.radio}
            />
            No
          </label>
        </div>

        <button type="submit" style={styles.button}>Create Account</button>
      </form>
    </div>
  );
};


const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #eee',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginTop: '10px',
    marginBottom: '5px',
    fontWeight: '500',
  },
  input: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    fontSize: '14px',
  },
  radioGroup: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  radio: {
    accentColor: '#8A2BE2',
  },
  button: {
    backgroundColor: '#8A2BE2',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default PopXSignupForm;
