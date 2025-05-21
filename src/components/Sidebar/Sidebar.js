import React from "react";
import "./Sidebar.css";
import profileImg from "../../assets/profile.png";
import { MdDashboard, MdSettings } from "react-icons/md";
import { FaUsersCog, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    {
      title: "Dashboard",
      icon: <MdDashboard className="menu-icon" />,
      active: true,
    },
    {
      title: "Managements",
      icon: <FaUsersCog className="menu-icon" />,
    },
    {
      title: "Staff Managements",
      icon: <FaUsers className="menu-icon" />,
    },
    {
      title: "Settings",
      icon: <MdSettings className="menu-icon" />,
    },
  ];

  return (
    <div className="sidebar">
      <nav className="nav-menu">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menu-item ${item.active ? "active" : ""}`}
          >
            {item.icon}
            <span className="menu-title">{item.title}</span>
          </div>
        ))}
      </nav>

      <div className="profile-section">
        <img src={profileImg} alt="Profile" className="profile-img" />
        <div className="profile-info">
          <h4>John Dan</h4>
          <p>johndan@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
