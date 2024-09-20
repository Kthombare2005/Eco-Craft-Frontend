import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ArtisanDashboard = ({ user }) => {
  return (
    <Container className="mt-4">
      <h1>Welcome, {user.name} (Artisan)</h1>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Artisan Projects</Card.Title>
              <Card.Text>View and manage current artisan projects.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Material Inventory</Card.Title>
              <Card.Text>Manage materials for upcoming projects.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Earnings</Card.Title>
              <Card.Text>Track your project earnings.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ArtisanDashboard;
