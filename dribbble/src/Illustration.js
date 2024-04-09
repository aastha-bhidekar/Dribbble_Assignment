/* illustration.js*/

import React from 'react';
import illustrationImage from './assets/illustration.png';
import './Illustration.css';

const Illustration = () => {
  return (
    <div className="illustration">
      <img src={illustrationImage} alt="Illustration" />
    </div>
  );
};

export default Illustration;
