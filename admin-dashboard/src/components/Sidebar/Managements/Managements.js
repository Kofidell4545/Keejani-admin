import React, { useState } from "react";
import "./Managements.css";
import { useNavigate } from "react-router-dom";
import AddUserModal from "../../AddUserModal/AddUserModal";

const Managements = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("Users");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Separate states for users and vendors
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Dan",
      role: "Manager",
      phoneNumber: "+233 590908703",
      verified: false,
      profileImage: null,
    },
  ]);

  const [vendors, setVendors] = useState([
    {
      id: 1,
      firstName: "Vendor",
      lastName: "One",
      role: "Food Vendor",
      phoneNumber: "+233 590908704",
      verified: true,
      profileImage: null,
    },
  ]);

  const handleAdd = (newData) => {
    if (selectedType === "Users") {
      setUsers([
        ...users,
        {
          ...newData,
          id: users.length + 1,
        },
      ]);
    } else {
      setVendors([
        ...vendors,
        {
          ...newData,
          id: vendors.length + 1,
        },
      ]);
    }
    setIsModalOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setIsDropdownOpen(false);
  };

  // Get current data based on selected type
  const currentData = selectedType === "Users" ? users : vendors;

  return (
    <div className="managements-container">
      <div className="managements-header">
        <div className="header-left">
          <div className="dropdown-container">
            <button className="dropdown-button" onClick={toggleDropdown}>
              {selectedType}
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <button onClick={() => handleTypeSelect("Users")}>Users</button>
                <button onClick={() => handleTypeSelect("Vendors")}>
                  Vendors
                </button>
              </div>
            )}
          </div>
        </div>
        <button className="add-button" onClick={() => setIsModalOpen(true)}>
          + Add
        </button>
      </div>

      {isModalOpen && (
        <AddUserModal
          onSave={handleAdd}
          onClose={() => setIsModalOpen(false)}
          type={selectedType}
        />
      )}

      <div className="users-count">
        {selectedType}: {currentData.length}
      </div>

      <div className="table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>Profile</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>Phone Number</th>
              <th>Verified</th>
              <th>Decision</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="profile-image">
                    {item.profileImage ? (
                      <img
                        src={item.profileImage}
                        alt={`${item.firstName}'s profile`}
                      />
                    ) : (
                      <div className="profile-placeholder"></div>
                    )}
                  </div>
                </td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.role}</td>
                <td>{item.phoneNumber}</td>
                <td>
                  <span
                    className={`verification-badge ${
                      item.verified ? "verified" : "not-verified"
                    }`}
                  >
                    {item.verified ? "Verified" : "Not Verified"}
                  </span>
                </td>
                <td className="decision-buttons">
                  <button className="block-button">Block</button>
                  <button
                    className="view-button"
                    onClick={() =>
                      navigate(
                        selectedType === "Users"
                          ? `/user-details/${item.id}`
                          : `/vendor-details/${item.id}`
                      )
                    }
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Managements;
