import React from "react";
import "./Header.css";
import logo from "../../assets/ logoname.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Keejani Logo" className="logo" />
      </div>
      <div className="header-right">
        <button className="logout-btn">Logout</button>
      </div>
    </header>
  );
};

export default Header;
