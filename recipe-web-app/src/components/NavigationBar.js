import React, { useState } from 'react';

const NavigationBar = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    // Perform any additional logic or actions for item selection
  };

  return (
    <div className="navigation-bar">
      <div className="logo">Logo</div>
      <div
        className={`navigation-item ${activeItem === 'Home' ? 'active' : ''}`}
        onClick={() => handleItemClick('Home')}
      >
        Home
      </div>
      <div
        className={`navigation-item ${activeItem === 'About' ? 'active' : ''}`}
        onClick={() => handleItemClick('About')}
      >
        About
      </div>
      <div
        className={`navigation-item ${activeItem === 'Services' ? 'active' : ''}`}
        onClick={() => handleItemClick('Services')}
      >
        Services
      </div>
      <div
        className={`navigation-item ${activeItem === 'Contact' ? 'active' : ''}`}
        onClick={() => handleItemClick('Contact')}
      >
        Contact
      </div>
    </div>
  );
};

export default NavigationBar;
