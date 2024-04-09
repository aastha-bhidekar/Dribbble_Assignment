import React from 'react';
import './EmailVerificationPage.css';


const EmailVerificationPage = ({location}) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const locationData = localStorage.getItem('location');
  const profileImageData = localStorage.getItem('profileImage');
  const selectedOption = location?.state?.selectedOption;

  const handleResendEmail = () => {
    // Implement the logic to resend the confirmation email
    console.log('Resending confirmation email...');
  };

  const handleChangeEmail = () => {
    // Implement the logic to change the email address
    console.log('Changing email address...');
  };
  return (
    <div className="email-verification">
            <header className="header">
        <nav className="navbar">
          <div className="navbar-brand">
            <a href="#">Dribbble</a>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#">Inspiration</a>
            </li>
            <li className="nav-item">
              <a href="#">Find Work</a>
            </li>
            <li className="nav-item">
              <a href="#">Learn Design</a>
            </li>
            <li className="nav-item">
              <a href="#">Go Pro</a>
            </li>
            <li className="nav-item">
              <a href="#">Hire Designers</a>
            </li>
            </ul>
            <ul className="navbar-nav2">
            <li className="nav-item search-bar">
              <input type="text" placeholder="Search" />
            </li>
            <li className="nav-item">
              <a href="#">&#128269;</a>
            </li>
            <li className="nav-item-profile">
              <a href="#">{profileImageData && <img src={profileImageData} alt="Profile" />}</a>
            </li>
            <button>Upload</button>
          </ul>
        </nav>
      </header>
      <div className="verification-content">
        <h2>Please verify your email...</h2>
        <div className="envelope-icon">✉️</div>
        <p>Please verify your email address. We've sent a confirmation email to:</p>
        <p className="email-address">a{user.email}</p>
        <p>Click the confirmation link in that email to begin using Dribbble.</p>
        <p>
          Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If
          you still don't see it, you can{' '}
          <a href="#" onClick={handleResendEmail}>
            resend the confirmation email
          </a>
          .
        </p>
        <p>
          Wrong email address?{' '}
          <a href="#" onClick={handleChangeEmail}>
            Change it
          </a>
          .
        </p>
      </div>
      <footer className="footer">
        <div className="dribbble-info">
          <h3>Dribbble</h3>
          <p>
            Dribbble is the world's leading community for creatives to share, grow, and get hired.
          </p>
          <div className="social-links">
            <a href="#">&#128681;</a>
            <a href="#">&#128279;</a>
            <a href="#">&#127877;</a>
            <a href="#">&#128472;</a>
          </div>
        </div>
        <div className="footer-links">
          <div className="column">
            <h4>For designers</h4>
            <ul>
              <li>Go Pro!</li>
              <li>Explore design work</li>
              <li>Design blog</li>
              <li>Overtime podcast</li>
              <li>Playoffs</li>
              <li>Weekly Warm-Up</li>
              <li>Refer a Friend</li>
              <li>Code of conduct</li>
            </ul>
          </div>
          <div className="column">
            <h4>Hire designers</h4>
            <ul>
              <li>Post a job opening</li>
              <li>Post a freelance project</li>
              <li>Search for designers</li>
            </ul>
          </div>
          {/* Add the remaining columns and links */}
        </div>
        <p className="copyright">&copy; 2023 Dribbble. All rights reserved.</p>
        <p className="shots-count">20,501,853 shots dribbbied</p>
      </footer>
    </div>
  );
};

export default EmailVerificationPage;