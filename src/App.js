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
      {!user ? (
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      ) : (
        <div className="d-flex">
          <Sidebar user={user} handleLogout={handleLogout} />
          <div className="main-content" style={{ flex: 1 }}>
            <Routes>
              {/* Home route for seller */}
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
              <Route
                path="*"
                element={<Navigate to={`/${user.role}`} replace />}
              />
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
