// import React from "react";
// import Sidebar from "./Sidebar";
// import { Container, Row, Col } from "react-bootstrap";

// const SellerDashboard = ({ user }) => {
//   return (
//     <div className="d-flex">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-grow-1 p-4">
//         <h1>Good Afternoon ☀️, {user.name}!</h1>
//         <p>
//           Track your sales, manage orders, and see your scrap selling stats.
//         </p>

//         <Container className="mt-4">
//           <Row>
//             <Col md={3}>
//               <div className="stat-card">
//                 <h4>Total Scrap Sold</h4>
//                 <p>1000 Kg</p>
//               </div>
//             </Col>
//             <Col md={3}>
//               <div className="stat-card">
//                 <h4>Total Earnings</h4>
//                 <p>₹45,000</p>
//               </div>
//             </Col>
//             <Col md={3}>
//               <div className="stat-card">
//                 <h4>Pending Orders</h4>
//                 <p>5 Orders</p>
//               </div>
//             </Col>
//             <Col md={3}>
//               <div className="stat-card">
//                 <h4>Total Customers</h4>
//                 <p>200</p>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default SellerDashboard;

// SellerDashboard.js
// SellerDashboard.js
// SellerDashboard.js
import React from "react";
import Sidebar from "./Sidebar";
import "./SellerDashboard.css"; // Ensure this contains your custom styles
import { Card, Row, Col } from "react-bootstrap"; // Import Bootstrap components
import { FaMoneyBillWave, FaTools } from "react-icons/fa"; // Import icons from react-icons

const features = [
  {
    title: "Sell Scrap",
    description:
      "Easily list and sell your scrap materials to reach a wide audience.",
    icon: <FaMoneyBillWave size={40} color="#4e73df" />,
  },
  {
    title: "Transform Scrap into Treasure",
    description: "Utilize our tools to convert scrap into valuable resources.",
    icon: <FaTools size={40} color="#4e73df" />,
  },
  // Add more features as needed
];

const SellerDashboard = ({ user }) => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <div className="greeting-container">
          <h1>Good Afternoon ☀️, {user.name}!</h1>
          <p>
            Track your sales, manage orders, and see your scrap selling stats.
          </p>
        </div>

        {/* Features Section */}
        <h2 className="mt-5">Features</h2>

        <Row className="mt-4">
          {features.map((feature, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4">
              <Card className="feature-card h-100">
                <Card.Body className="text-center">
                  <div className="feature-icon mb-3">{feature.icon}</div>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default SellerDashboard;

// import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar";
// import "./SellerDashboard.css";

// const SellerDashboard = ({ user }) => {
//   const [greetingMessage, setGreetingMessage] = useState("");

//   // Function to set greeting based on the time of day
//   const setGreeting = () => {
//     const currentHour = new Date().getHours();
//     if (currentHour < 12) {
//       setGreetingMessage("Good Morning ☀️");
//     } else if (currentHour < 18) {
//       setGreetingMessage("Good Afternoon 🌤️");
//     } else if (currentHour < 21) {
//       setGreetingMessage("Good Evening 🌇");
//     } else {
//       setGreetingMessage("Good Night 🌙");
//     }
//   };

//   // Call the setGreeting function on component mount
//   useEffect(() => {
//     setGreeting();
//   }, []);

//   return (
//     <div className="seller-dashboard">
//       {/* Sidebar */}
//       <Sidebar user={user} />

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Greeting Section */}
//         <div className="greeting-container">
//           <h1 className="greeting-text">
//             {greetingMessage}, {user.name}!
//           </h1>
//           <p className="greeting-subtext">
//             Track your sales, manage orders, and see your scrap selling stats.
//           </p>
//         </div>

//         {/* Features Section */}
//         <div className="features-section">
//           <h2>Features</h2>
//           <div className="card-container">
//       <div className="card card1">
//         <img src="http://www.pngmart.com/files/5/Pyramids-PNG-HD.png" alt="Pyramids" />
//         <h3>Pyramids</h3>
//         <p>The Egyptian pyramids are ancient pyramid-shaped masonry structures located in Egypt.</p>
//       </div>
//       <div className="card card2">
//         <img src="https://wallazee.global.ssl.fastly.net/images/dynamic/items/383-1024.png" alt="Statue of Liberty" />
//         <h3>Statue of Liberty</h3>
//         <p>The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York City.</p>
//       </div>
//       <div className="card card3">
//         <img src="http://pluspng.com/img-png/download-taj-mahal-png-images-transparent-gallery-advertisement-1185.png" alt="Taj Mahal" />
//         <h3>Taj Mahal</h3>
//         <p>The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in Agra, India.</p>
//       </div>
//     </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellerDashboard;
