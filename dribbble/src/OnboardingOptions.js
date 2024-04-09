import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OnboardingOptions.css';

import designerShareIcon from './assets/designer-share.png';
import hireDesignerIcon from './assets/hire-designer.png';
import designInspirationIcon from './assets/design-inspiration.png';

const OnboardingOptions = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleFinishClick = () => {
    if (selectedOption) {
      navigate('/email-verification', { state: { selectedOption } });
    } else {
      alert('Please select an option.');
    }
  };

  return (
    <div className="options-container">
      <h1>What brings you to Dribbble?</h1>
      <p>Select the options that best describe you. Don't worry, you can explore other options later.</p>
      <div className="options">
        <div
          className={`option ${selectedOption === "I'm a designer looking to share my work" ? 'active' : ''}`}
          onClick={() => handleOptionClick("I'm a designer looking to share my work")}
        >
          <img src={designerShareIcon} alt="Designer Share Icon" />
          <div className="option-text">
            <span className={`circle ${selectedOption === "I'm a designer looking to share my work" ? 'selected' : ''}`}></span>
            <p>I'm a designer looking to share my work</p>
          </div>
        </div>
        <div
          className={`option ${selectedOption === "I'm looking to hire a designer" ? 'active' : ''}`}
          onClick={() => handleOptionClick("I'm looking to hire a designer")}
        >
          <img src={hireDesignerIcon} alt="Hire Designer Icon" />
          <div className="option-text">
            <span className={`circle ${selectedOption === "I'm looking to hire a designer" ? 'selected' : ''}`}></span>
            <p>I'm looking to hire a designer</p>
          </div>
        </div>
        <div
          className={`option ${selectedOption === "I'm looking for design inspiration" ? 'active' : ''}`}
          onClick={() => handleOptionClick("I'm looking for design inspiration")}
        >
          <img src={designInspirationIcon} alt="Design Inspiration Icon" />
          <div className="option-text">
            <span className={`circle ${selectedOption === "I'm looking for design inspiration" ? 'selected' : ''}`}></span>
            <p>I'm looking for design inspiration</p>
          </div>
        </div>
      </div>
      <button className="finish-btn" onClick={handleFinishClick}>
        Finish
      </button>
    </div>
  );
};

export default OnboardingOptions;
