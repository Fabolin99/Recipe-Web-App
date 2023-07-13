import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("");

  const navItems = [
    { name: "Discover", path: "/" },
    { name: "Create", path: "/create" },
    { name: "Plan", path: "/plan" },
    { name: "My Account", path: "/myaccount" },
  ];

  const handleItemClick = (itemPath) => {
    setActiveItem(itemPath);
    navigate(itemPath);
  };

  return (
    <div className="navigation-bar">
      <div className="logo">My Recipe</div>
      {navItems.map((item) => (
        <div
          key={item.name}
          className={`navigation-item ${
            activeItem === item.path ? "active" : ""
          }`}
          onClick={() => handleItemClick(item.path)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default NavigationBar;
