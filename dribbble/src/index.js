//index.js
/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

*/

// index.js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import ProfileCreation from './ProfileCreation';
import OnboardingOptions from './OnboardingOptions';
import EmailVerificationPage from './EmailVerificationPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/profile-creation" element={<ProfileCreation />} />
        <Route path="/onboarding-options" element={<OnboardingOptions />} />
        <Route path="/email-verification" element={<EmailVerificationPage />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));


