import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Settings from "./components/Settings/Settings";
import Managements from "./components/Sidebar/Managements/Managements";
import UserDetails from "./components/UserDetails/UserDetails";
import VendorDetails from "./components/VendorDetails/VendorDetails";
import StaffManagements from "./components/StaffManagements/StaffManagements";
import StaffDetails from "./components/StaffDetails/StaffDetails";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-container">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/managements" element={<Managements />} />
              <Route path="/user-details/:userId" element={<UserDetails />} />
              <Route path="/vendor-details/:id" element={<VendorDetails />} />
              <Route path="/staff-managements" element={<StaffManagements />} />
              <Route path="/staff-details/:id" element={<StaffDetails />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
