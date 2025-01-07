import React from 'react';
import './ReusableButton.css';

const ReusableButton = ({ text, onClick, link }) => {
  const handleClick = () => {
    if (link) {
      window.location.href = link;
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div className='buttonContainer'>

    <button className="reusableButton" onClick={handleClick}>
      {text}
    </button>
    </div>
  );
};

export default ReusableButton;

