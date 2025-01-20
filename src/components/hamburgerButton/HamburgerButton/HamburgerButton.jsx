import React from "react";
import "./HamburgerButton.css";

const HamburgerButton = ({ isOpen, onToggle }) => {
  return (
    <div className="hamburger-wrapper">
      <input
        id="hamburger"
        type="checkbox"
        checked={isOpen}
        onChange={onToggle}
        style={{ display: "none" }}
      />
      <label className="hamburger" htmlFor="hamburger">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </label>
    </div>
  );
};

export default HamburgerButton;
