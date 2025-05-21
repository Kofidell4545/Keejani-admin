import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import profileImg from "../../assets/profile image.png";
import { MdDashboard, MdSettings } from "react-icons/md";
import { FaUsersCog, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    {
      title: "Dashboard",
      icon: <MdDashboard className="menu-icon" />,
      path: "/dashboard",
    },
    {
      title: "Managements",
      icon: <FaUsersCog className="menu-icon" />,
      path: "/managements",
    },
    {
      title: "Staff Managements",
      icon: <FaUsers className="menu-icon" />,
      path: "/staff-managements",
    },
    {
      title: "Settings",
      icon: <MdSettings className="menu-icon" />,
      path: "/settings",
    },
  ];

  return (
    <div className="sidebar">
      <nav className="nav-menu">
        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              `menu-item ${isActive ? "active" : ""}`
            }
          >
            {item.icon}
            <span className="menu-title">{item.title}</span>
          </NavLink>
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
