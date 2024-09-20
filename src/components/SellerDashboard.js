import React from "react";
import Sidebar from "./Sidebar";
import { Container, Row, Col } from "react-bootstrap";

const SellerDashboard = ({ user }) => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <h1>Good Afternoon ☀️, {user.name}!</h1>
        <p>
          Track your sales, manage orders, and see your scrap selling stats.
        </p>

        <Container className="mt-4">
          <Row>
            <Col md={3}>
              <div className="stat-card">
                <h4>Total Scrap Sold</h4>
                <p>1000 Kg</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-card">
                <h4>Total Earnings</h4>
                <p>₹45,000</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-card">
                <h4>Pending Orders</h4>
                <p>5 Orders</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-card">
                <h4>Total Customers</h4>
                <p>200</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SellerDashboard;
