// ProfileCreation.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileCreation.css';

const ProfileCreation = () => {
  const [location, setLocation] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProfileImage(URL.createObjectURL(file));
  };

  const handleNext = () => {
    // Check if both location and profile image are provided
    if (location !== '' && profileImage !== null) {
      // Handle the logic for navigating to the next step or submitting the form
      localStorage.setItem('location', location);
      localStorage.setItem('profileImage', profileImage);
     
      // After successful submission, navigate to the onboarding options page
      navigate('/onboarding-options');
    } else {
      // If either location or profile image is missing, set error message
      setErrorMessage('Please provide both location and profile image.');
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-creation">
        <h2>Welcome! Let's create your profile</h2>
        <p>Let others get to know you better! You can do these later</p>

        <div className="avatar-section">
          <h3>Add an avatar</h3>
          <div className="avatar-container">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="avatar-image" />
            ) : (
              <div className="avatar-placeholder">
                <span className="avatar-icon">+</span>
              </div>
            )}
          </div>
          <label htmlFor="image-upload" className="image-upload-label">
            <span className="blue-underline">Choose image</span>
          </label>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageUpload}
            className="image-upload-input"
          />
          {/*<p>Or choose one of our defaults</p>*/}
        </div>
        <div className="location-section">
          <h3>Add your location</h3>
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Enter a location"
            className="location-input"
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handleNext} className="next-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default ProfileCreation;
