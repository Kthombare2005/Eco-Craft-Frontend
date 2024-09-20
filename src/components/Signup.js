import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Auth.css"; // Custom CSS for theming

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("seller"); // Default to 'seller'
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await axios.post("http://localhost:5000/signup", {
        name,
        email,
        password,
        role,
      });

      if (response.status === 201) {
        setLoading(false); // Stop loading
        navigate("/"); // Redirect to login page after signup
      }
    } catch (error) {
      setLoading(false); // Stop loading in case of error
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h2 className="text-center">Create your EcoCraft Account</h2>
        <p className="text-center">Join us in making a difference</p>

        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Select Role</label>
            <select
              className="form-control"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="seller">Seller</option>
              <option value="scraper">Scraper</option>
              <option value="artisan">Artisan</option>
            </select>
          </div>

          {/* Disable the button if loading */}
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          <p className="text-right">
            Already have an account?{" "}
            <Link to="/" className="auth-link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
