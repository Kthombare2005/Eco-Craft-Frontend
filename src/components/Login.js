import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css"; // Ensure this CSS contains proper layout rules

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [passwordVisible, setPasswordVisible] = useState(false); // Password visibility toggle
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (response.data.user) {
        setUser(response.data.user);
        sessionStorage.setItem("user", JSON.stringify(response.data.user));

        const role = response.data.user.role;
        if (role === "seller") {
          navigate("/seller");
        } else if (role === "scraper") {
          navigate("/scraper");
        } else if (role === "artisan") {
          navigate("/artisan");
        }
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h2 className="text-center">Welcome to EcoCraft</h2>
        <p className="text-center">Turning scrap into treasure</p>

        {error && <p className="text-danger text-center">{error}</p>}

        <form onSubmit={handleLogin}>
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
            <div className="input-group">
              <input
                type={passwordVisible ? "text" : "password"}
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? "Hide" : "Show"}
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-right">
            Don't have an account?{" "}
            <Link to="/signup" className="auth-link">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Auth.css"; // Ensure this CSS contains proper layout rules

// const Login = ({ setUser }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false); // Loading state
//   const [passwordVisible, setPasswordVisible] = useState(false); // Password visibility toggle
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const response = await axios.post("http://localhost:5000/login", {
//         email,
//         password,
//       });

//       if (response.data.user) {
//         setUser(response.data.user);
//         sessionStorage.setItem("user", JSON.stringify(response.data.user));

//         const role = response.data.user.role;
//         if (role === "seller") {
//           navigate("/seller");
//         } else if (role === "scraper") {
//           navigate("/scraper");
//         } else if (role === "artisan") {
//           navigate("/artisan");
//         }
//       } else {
//         setError("Login failed. Please check your credentials.");
//       }
//     } catch (err) {
//       setError("Invalid email or password. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <h2 className="text-center">Welcome to EcoCraft</h2>
//         <p className="text-center">Turning scrap into treasure</p>

//         {error && <p className="text-danger text-center">{error}</p>}

//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <div className="input-group">
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 className="form-control"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <div className="input-group-append">
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary"
//                   onClick={togglePasswordVisibility}
//                 >
//                   {passwordVisible ? "Hide" : "Show"}
//                 </button>
//               </div>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="btn btn-primary btn-block"
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>

//           <p className="text-right">
//             Don't have an account?{" "}
//             <Link to="/signup" className="auth-link">
//               Sign up
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
