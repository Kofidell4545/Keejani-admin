import React, { useState } from "react";
import "./UserDetails.css";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Dan",
    phoneNumber: "+233 503090933",
    email: "johndan@gmail.com",
    verified: true,
  });

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving user data:", userData);
    navigate("/managements"); // Return to managements page after save
  };

  return (
    <div className="user-details-container">
      <div className="user-details-header">
        <h1>User Information</h1>
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>

      <div className="details-section">
        <h2>Identity</h2>
        <div className="input-row">
          <div className="input-group">
            <label>First Name:</label>
            <div className="input-value">{userData.firstName}</div>
          </div>
          <div className="input-group">
            <label>Last Name:</label>
            <div className="input-value">{userData.lastName}</div>
          </div>
        </div>
      </div>

      <div className="details-section">
        <h2>Contact</h2>
        <div className="input-row">
          <div className="input-group">
            <label>Phone Number:</label>
            <div className="input-value">{userData.phoneNumber}</div>
          </div>
          <div className="input-group">
            <label>Email:</label>
            <div className="input-value">{userData.email}</div>
          </div>
        </div>
      </div>

      <div className="details-section">
        <h2>Authentication</h2>
        <div className="input-row">
          <div className="input-group">
            <label>Status:</label>
            <div
              className={`input-value ${
                userData.verified ? "verified" : "not-verified"
              }`}
            >
              {userData.verified ? "Verified" : "Not Verified"}
            </div>
          </div>
          <div className="input-group">
            <button className="reset-password-btn">Reset Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
