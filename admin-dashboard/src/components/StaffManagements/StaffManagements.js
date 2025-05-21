import React, { useState } from "react";
import "./StaffManagements.css";
import { useNavigate } from "react-router-dom";
import AddStaffModal from "../AddStaffModal/AddStaffModal";

const StaffManagements = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [staffMembers, setStaffMembers] = useState([
    {
      id: 1,
      firstName: "James",
      lastName: "Smith",
      role: "Admin",
      phoneNumber: "+233 590908705",
      email: "james.smith@email.com",
      verified: true,
      profileImage: null,
    },
  ]);

  const handleAdd = (newStaff) => {
    setStaffMembers([
      ...staffMembers,
      {
        ...newStaff,
        id: staffMembers.length + 1,
      },
    ]);
    setIsModalOpen(false);
  };

  return (
    <div className="staff-managements-container">
      <div className="staff-managements-header">
        <h1>Staff Management</h1>
        <button className="add-button" onClick={() => setIsModalOpen(true)}>
          + Add Staff
        </button>
      </div>

      <div className="staff-count">Staff Members: {staffMembers.length}</div>

      <div className="table-container">
        <table className="staff-table">
          <thead>
            <tr>
              <th>Profile</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Verified</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffMembers.map((staff) => (
              <tr key={staff.id}>
                <td>
                  <div className="profile-image">
                    {staff.profileImage ? (
                      <img
                        src={staff.profileImage}
                        alt={`${staff.firstName}'s profile`}
                      />
                    ) : (
                      <div className="profile-placeholder"></div>
                    )}
                  </div>
                </td>
                <td>{staff.firstName}</td>
                <td>{staff.lastName}</td>
                <td>{staff.role}</td>
                <td>{staff.phoneNumber}</td>
                <td>{staff.email}</td>
                <td>
                  <span
                    className={`verification-badge ${
                      staff.verified ? "verified" : "not-verified"
                    }`}
                  >
                    {staff.verified ? "Verified" : "Not Verified"}
                  </span>
                </td>
                <td className="action-buttons">
                  <button className="block-button">Block</button>
                  <button
                    className="view-button"
                    onClick={() => navigate(`/staff-details/${staff.id}`)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <AddStaffModal
          onSave={handleAdd}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default StaffManagements;
