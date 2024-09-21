import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom"; // Hook to get current URL
import "./Sidebar.css";

const Sidebar = ({ user, handleLogout }) => {
  const location = useLocation(); // Get current URL location
  const [sidebarVisible, setSidebarVisible] = useState(false); // State to toggle sidebar visibility

  if (!user) {
    return null; // Hide sidebar if user is not logged in
  }

  // Toggle sidebar visibility for small screens
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      {/* Hamburger Button (visible on small screens) */}
      <div className="hamburger" onClick={toggleSidebar}>
        <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
      </div>

      {/* Sidebar Section */}
      <div
        className={`sidebar d-flex flex-column p-3 text-white bg-dark ${
          sidebarVisible ? "show" : ""
        }`}
      >
        <h4 className="mb-4">EcoCraft Seller</h4>

        <Nav className="flex-column">
          <LinkContainer to="/seller">
            <Nav.Link
              className={`text-white mb-2 ${
                location.pathname === "/home" ? "active" : ""
              }`}
            >
              <i className="bi bi-house-door-fill me-2"></i> Home
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/sell-scrap">
            <Nav.Link
              className={`text-white mb-2 ${
                location.pathname === "/sell-scrap" ? "active" : ""
              }`}
            >
              <i className="bi bi-cart-fill me-2"></i> Sell Scrap
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/orders">
            <Nav.Link
              className={`text-white mb-2 ${
                location.pathname === "/orders" ? "active" : ""
              }`}
            >
              <i className="bi bi-clipboard-data-fill me-2"></i> Manage Orders
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/analytics">
            <Nav.Link
              className={`text-white mb-2 ${
                location.pathname === "/analytics" ? "active" : ""
              }`}
            >
              <i className="bi bi-bar-chart-fill me-2"></i> Analytics
            </Nav.Link>
          </LinkContainer>
        </Nav>

        {/* User Information */}
        <div className="mt-auto">
          <div className="dropup">
            <button
              className="btn btn-secondary dropdown-toggle d-flex align-items-center"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ backgroundColor: "#343a40", border: "none" }}
            >
              <img
                src={`https://ui-avatars.com/api/?name=${user.name}`}
                alt="profile"
                className="rounded-circle me-2"
                style={{ width: "40px" }}
              />
              {user.name}
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="#profile-settings">
                  Profile Settings
                </a>
              </li>
              <li>
                <button className="dropdown-item" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

