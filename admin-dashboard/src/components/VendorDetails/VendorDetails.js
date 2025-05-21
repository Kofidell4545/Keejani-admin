import React from "react";
import "./VendorDetails.css";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const VendorDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="vendor-details-container">
      <div className="header-section">
        <button className="back-button" onClick={() => navigate(-1)}>
          <IoArrowBack /> Back
        </button>
        <h1 className="vendor-title">Vendor Information</h1>
        <button className="approve-button">Approve</button>
      </div>

      <section className="identity-section">
        <h2>Identity</h2>
        <div className="info-grid">
          <div className="info-item">
            <label>First Name:</label>
            <div className="info-value">John</div>
          </div>
          <div className="info-item">
            <label>Last Name:</label>
            <div className="info-value">Dan</div>
          </div>
        </div>
      </section>

      <section className="vendor-info-section">
        <h2>Vendor Information</h2>
        <div className="info-grid">
          <div className="info-item">
            <label>Type:</label>
            <div className="info-value">Company</div>
          </div>
        </div>
      </section>

      <section className="proof-section">
        <h2>Proof of Commencement</h2>
        <div className="info-grid">
          <div className="info-item">
            <label>Certificate 1</label>
            <button className="certificate-view-button">View</button>
          </div>
          <div className="info-item">
            <label>Certificate 2</label>
            <button className="certificate-view-button">View</button>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact</h2>
        <div className="info-grid">
          <div className="info-item">
            <label>Phone Number:</label>
            <div className="info-value">+233 503090933</div>
          </div>
          <div className="info-item">
            <label>Email:</label>
            <div className="info-value">johndan@email.com</div>
          </div>
        </div>
      </section>

      <section className="authentication-section">
        <h2>Authentication</h2>
        <div className="info-grid">
          <div className="info-item">
            <label>Status:</label>
            <div className="info-value">Verified</div>
          </div>
          <div className="info-item">
            <button className="reset-password-button">Reset Password</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorDetails;
