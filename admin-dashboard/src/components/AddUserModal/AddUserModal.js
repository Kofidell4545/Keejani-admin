import React, { useState } from "react";
import "./AddUserModal.css";

const AddUserModal = ({ onClose, onSave, type }) => {
  const [newData, setNewData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    phoneNumber: "",
    email: "",
    verified: false,
    profileImage: null,
  });

  const handleChange = (e) => {
    setNewData({
      ...newData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(newData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add New {type.slice(0, -1)}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={newData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={newData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <input
              type="text"
              name="role"
              value={newData.role}
              onChange={handleChange}
              required
              placeholder={
                type === "Vendors" ? "e.g., Food Vendor" : "e.g., Manager"
              }
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={newData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={newData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Verification Status</label>
            <select
              name="verified"
              value={newData.verified}
              onChange={handleChange}
            >
              <option value={false}>Not Verified</option>
              <option value={true}>Verified</option>
            </select>
          </div>

          <div className="modal-footer">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
