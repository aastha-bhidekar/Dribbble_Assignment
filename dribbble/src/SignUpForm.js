// SignUpForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import Button from './Button';
import './SignUpForm.css';
import Illustration from './Illustration';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    agreeTerms: false, // New state for the checkbox
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    username: false,
    email: false,
    password: false,
    agreeTerms: false, // New state for the checkbox
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
    // Clear error message when user starts typing
    setFormErrors({ ...formErrors, [e.target.name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled and checkbox is checked
    const isFormValid = Object.values(formData).every(value => {
      return value !== '' && value !== false;
    });
    if (!isFormValid) {
      // Set error for empty fields
      const newErrors = {};
      for (const key in formData) {
        if (formData[key] === '' || formData[key] === false) {
          newErrors[key] = true;
        }
      }
      setFormErrors(newErrors);
      return;
    }
    // Save user data in localStorage
    localStorage.setItem('user', JSON.stringify(formData));
    // After successful form submission, navigate to the profile creation page
    navigate('/profile-creation');
  };
  

  return (
    <div className="signup-container">
      <div className="top-right">
        <span className="already-member">Already a member? </span>
        <Link to="/signin" className="sign-in">Sign in</Link>
      </div>
      <div className="app-container">
        <Illustration />
      </div>
      <div className="app-container">
        
        <form onSubmit={handleSubmit}>
        <h2>Sign Up to Dribbble</h2>
          <InputField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            error={formErrors.name && 'Name is required'}
          />
          <InputField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            error={formErrors.username && 'Username is required'}
          />
          <InputField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            error={formErrors.email && 'Email is required'}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            error={formErrors.password && 'Password is required'}
          />
          <div className="terms-checkbox">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="agreeTerms">
              Creating an account means you're okay with our <Link to="/terms">terms of service</Link>, <Link to="/privacy">privacy policy</Link>, and our <Link to="/notifications">default notification settings</Link>.
            </label>
          </div>
          <Button type="submit" disabled={!Object.values(formErrors).every(error => !error)}>Create Account</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
