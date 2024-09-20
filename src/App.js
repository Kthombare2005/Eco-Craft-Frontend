// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import SellerDashboard from "./components/SellerDashboard";
// import ScraperDashboard from "./components/ScraperDashboard";
// import ArtisanDashboard from "./components/ArtisanDashboard";
// import Sidebar from "./components/Sidebar";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import "bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//   const [user, setUser] = useState(null);

//   const handleLogout = () => {
//     setUser(null);
//     localStorage.removeItem("user"); // Clear stored user info on logout
//   };

//   return (
//     <Router>
//       <div className="d-flex">
//         {user && <Sidebar user={user} handleLogout={handleLogout} />}{" "}
//         {/* Conditionally render Sidebar */}
//         <div className="main-content" style={{ flex: 1 }}>
//           <Routes>
//             <Route path="/" element={<Login setUser={setUser} />} />
//             <Route path="/signup" element={<Signup />} />

//             {/* Conditional Route for Seller Dashboard */}
//             {user && user.role === "seller" && (
//               <Route path="/seller" element={<SellerDashboard user={user} />} />
//             )}

//             {/* Conditional Route for Scraper Dashboard */}
//             {user && user.role === "scraper" && (
//               <Route
//                 path="/scraper"
//                 element={<ScraperDashboard user={user} />}
//               />
//             )}

//             {/* Conditional Route for Artisan Dashboard */}
//             {user && user.role === "artisan" && (
//               <Route
//                 path="/artisan"
//                 element={<ArtisanDashboard user={user} />}
//               />
//             )}

//             {/* Redirect to the appropriate dashboard based on user role */}
//             <Route
//               path="*"
//               element={
//                 user ? (
//                   <Navigate to={`/${user.role}`} replace />
//                 ) : (
//                   <Navigate to="/" replace />
//                 )
//               }
//             />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Route, Routes, Navigate,
// } from "react-router-dom";
// import SellerDashboard from "./components/SellerDashboard";
// import ScraperDashboard from "./components/ScraperDashboard";
// import ArtisanDashboard from "./components/ArtisanDashboard";
// import Sidebar from "./components/Sidebar";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import "bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//   const [user, setUser] = useState(null);

//   // Load user from localStorage if available
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   const handleLogout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   return (
//     <Router>
//       <div className="d-flex">
//         {/* Only render Sidebar if user is logged in */}
//         {user && (
//           <Sidebar user={user} handleLogout={handleLogout} />
//         )}
//         <div className="main-content" style={{ flex: 1 }}>
//           <Routes>
//             <Route path="/" element={<Login setUser={setUser} />} />
//             <Route path="/signup" element={<Signup />} />

//             {/* Dashboard routes for different user roles */}
//             {user && user.role === "seller" && (
//               <Route path="/seller" element={<SellerDashboard user={user} />} />
//             )}
//             {user && user.role === "scraper" && (
//               <Route path="/scraper" element={<ScraperDashboard user={user} />} />
//             )}
//             {user && user.role === "artisan" && (
//               <Route path="/artisan" element={<ArtisanDashboard user={user} />} />
//             )}

//             {/* Redirect to the appropriate dashboard based on the user role */}
//             <Route
//               path="*"
//               element={user ? <Navigate to={`/${user.role}`} replace /> : <Navigate to="/" replace />}
//             />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SellerDashboard from "./components/SellerDashboard";
import ScraperDashboard from "./components/ScraperDashboard";
import ArtisanDashboard from "./components/ArtisanDashboard";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  const [user, setUser] = useState(null);

  // Load user from sessionStorage if available
  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser); // Set user if sessionStorage has user data
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem("user"); // Clear sessionStorage on logout
  };

  return (
    <Router>
      <Routes>
        {/* Show login or signup routes without sidebar */}
        {!user && (
          <>
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}

        {/* Authenticated routes with sidebar */}
        {user && (
          <div className="d-flex">
            <Sidebar user={user} handleLogout={handleLogout} />
            <div className="main-content" style={{ flex: 1 }}>
              {/* Role-based dashboard routes */}
              {user.role === "seller" && (
                <Route
                  path="/seller"
                  element={<SellerDashboard user={user} />}
                />
              )}
              {user.role === "scraper" && (
                <Route
                  path="/scraper"
                  element={<ScraperDashboard user={user} />}
                />
              )}
              {user.role === "artisan" && (
                <Route
                  path="/artisan"
                  element={<ArtisanDashboard user={user} />}
                />
              )}

              {/* Default redirect based on role */}
              <Route
                path="*"
                element={<Navigate to={`/${user.role}`} replace />}
              />
            </div>
          </div>
        )}

        {/* Catch-all redirect to login */}
        {!user && <Route path="*" element={<Navigate to="/" replace />} />}
      </Routes>
    </Router>
  );
};

export default App;
