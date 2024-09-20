// import React from "react";
// import { Nav } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap"; // For better linking with React Router
// import "./Sidebar.css"; // Custom CSS for spacing, fonts, and layout

// const Sidebar = ({ user, handleLogout }) => {
//   // Check if the user is logged in, otherwise don't render the sidebar
//   if (!user) {
//     return null; // If no user is logged in, return null to not display the sidebar
//   }

//   return (
//     <div
//       className="sidebar d-flex flex-column p-3 text-white bg-dark"
//       style={{ height: "100vh", width: "250px" }}
//     >
//       <h4 className="mb-4">EcoCraft Seller</h4>

//       <Nav className="flex-column">
//         <LinkContainer to="/home">
//           <Nav.Link className="text-white mb-2">Home</Nav.Link>
//         </LinkContainer>
//         <LinkContainer to="/sell-scrap">
//           <Nav.Link className="text-white mb-2">Sell Scrap</Nav.Link>
//         </LinkContainer>
//         <LinkContainer to="/orders">
//           <Nav.Link className="text-white mb-2">Manage Orders</Nav.Link>
//         </LinkContainer>
//         <LinkContainer to="/analytics">
//           <Nav.Link className="text-white mb-2">Analytics</Nav.Link>
//         </LinkContainer>
//       </Nav>

//       {/* User Information with Avatar */}
//       <div className="mt-auto">
//         <div className="dropdown">
//           <button
//             className="btn btn-secondary dropdown-toggle d-flex align-items-center"
//             type="button"
//             id="dropdownMenuButton"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//             style={{ backgroundColor: "#343a40", border: "none" }}
//           >
//             <img
//               src={`https://ui-avatars.com/api/?name=${user.name}`}
//               alt="profile"
//               className="rounded-circle me-2"
//               style={{ width: "40px" }}
//             />
//             {user.name}
//           </button>
//           <ul
//             className="dropdown-menu dropdown-menu-dark"
//             aria-labelledby="dropdownMenuButton"
//           >
//             <li>
//               <a className="dropdown-item" href="#profile-settings">
//                 Profile Settings
//               </a>
//             </li>
//             <li>
//               <button className="dropdown-item" onClick={handleLogout}>
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"; // For better linking with React Router
import "./Sidebar.css"; // Custom CSS for spacing, fonts, and layout

const Sidebar = ({ user, handleLogout }) => {
  // Check if the user is logged in, otherwise don't render the sidebar
  if (!user) {
    return null; // If no user is logged in, return null to not display the sidebar
  }

  return (
    <div
      className="sidebar d-flex flex-column p-3 text-white bg-dark"
      style={{ height: "100vh", width: "250px" }}
    >
      <h4 className="mb-4">EcoCraft Seller</h4>

      <Nav className="flex-column">
        <LinkContainer to="/home">
          <Nav.Link className="text-white mb-2">Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/sell-scrap">
          <Nav.Link className="text-white mb-2">Sell Scrap</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/orders">
          <Nav.Link className="text-white mb-2">Manage Orders</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/analytics">
          <Nav.Link className="text-white mb-2">Analytics</Nav.Link>
        </LinkContainer>
      </Nav>

      {/* User Information with Avatar - Moved to the bottom */}
      <div className="mt-auto">
        {/* Use the dropup class to open the dropdown upwards */}
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
          <ul
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuButton"
          >
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
  );
};

export default Sidebar;
