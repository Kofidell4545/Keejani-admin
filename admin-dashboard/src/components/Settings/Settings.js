import React, { useState, useRef } from "react";
import "./Settings.css";

const Settings = () => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneContact: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Settings</h1>
        <button className="save-btn" onClick={handleSubmit}>
          Save
        </button>
      </div>

      <form className="settings-form">
        <section className="form-section">
          <h2>Identity</h2>
          <div className="input-grid">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </section>

        <section className="form-section">
          <h2>Contact</h2>
          <div className="input-grid">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phoneContact"
              placeholder="Phone Contact"
              value={formData.phoneContact}
              onChange={handleChange}
            />
          </div>
        </section>

        <section className="form-section">
          <h2>Authentication</h2>
          <div className="input-grid auth-grid">
            <input
              type="password"
              name="currentPassword"
              placeholder="Current Password"
              value={formData.currentPassword}
              onChange={handleChange}
            />
            <input
              type="password"
              name="newPassword"
              placeholder="Password"
              value={formData.newPassword}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </section>

        <section className="form-section">
          <h2>Profile Image</h2>
          <div className="image-upload-container">
            <div className="image-preview">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="preview-image"
                />
              ) : (
                <div className="placeholder-image">
                  <span>No image selected</span>
                </div>
              )}
            </div>
            <div className="upload-actions">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                style={{ display: "none" }}
              />
              <button
                type="button"
                className="upload-btn"
                onClick={handleUploadClick}
              >
                Upload New Image
              </button>
              {selectedImage && (
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => setSelectedImage(null)}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="form-section">
          <h2>Delete Account</h2>
          <button className="delete-btn">Delete Account</button>
        </section>
      </form>
    </div>
  );
};

export default Settings;
