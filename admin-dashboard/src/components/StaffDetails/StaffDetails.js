import React, { useState } from "react";
import "./StaffDetails.css";
import { useNavigate } from "react-router-dom";

const StaffDetails = () => {
  const navigate = useNavigate();
  const [staffData] = useState({
    firstName: "James",
    lastName: "Smith",
    phoneNumber: "+233 590908705",
    email: "james.smith@email.com",
    role: "Admin",
    verified: true,
  });

  return (
    <div className="staff-details-container">
      <div className="staff-details-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
        <h1>Staff Information</h1>
        <button className="save-button">Save</button>
      </div>

      <div className="details-section">
        <h2>Identity</h2>
        <div className="input-row">
          <div className="input-group">
            <label>First Name:</label>
            <div className="input-value">{staffData.firstName}</div>
          </div>
          <div className="input-group">
            <label>Last Name:</label>
            <div className="input-value">{staffData.lastName}</div>
          </div>
        </div>
      </div>

      <div className="details-section">
        <h2>Contact</h2>
        <div className="input-row">
          <div className="input-group">
            <label>Phone Number:</label>
            <div className="input-value">{staffData.phoneNumber}</div>
          </div>
          <div className="input-group">
            <label>Email:</label>
            <div className="input-value">{staffData.email}</div>
          </div>
        </div>
      </div>

      <div className="details-section">
        <h2>Role</h2>
        <div className="input-row">
          <div className="input-group">
            <label>Position:</label>
            <div className="input-value">{staffData.role}</div>
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
                staffData.verified ? "verified" : "not-verified"
              }`}
            >
              {staffData.verified ? "Verified" : "Not Verified"}
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

export default StaffDetails;
