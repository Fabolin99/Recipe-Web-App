import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";

const NavigationBar = () => {
  const [activeItem, setActiveItem] = useState("");

  const navigate = useNavigate();

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    navigate(itemName);
    // Perform any additional logic or actions for item selection
  };

  return (
    <div className="navigation-bar">
      <div className="logo">Logo</div>
      <div
        className={`navigation-item ${activeItem === "Home" ? "active" : ""}`}
        onClick={() => handleItemClick("/")}
      >
        Discover
      </div>
      <div
        className={`navigation-item ${activeItem === "About" ? "active" : ""}`}
        onClick={() => handleItemClick("create")}
      >
        Create
      </div>
      <div
        className={`navigation-item ${
          activeItem === "Services" ? "active" : ""
        }`}
        onClick={() => handleItemClick("cookbooks")}
      >
        Cookbooks
      </div>
      <div
        className={`navigation-item ${
          activeItem === "Contact" ? "active" : ""
        }`}
        onClick={() => handleItemClick("plan")}
      >
        Plan
      </div>
      <div
        className={`navigation-item ${
          activeItem === "Contact" ? "active" : ""
        }`}
        onClick={() => handleItemClick("myaccount")}
      >
        My Account
      </div>
    </div>
  );
};

export default NavigationBar;
