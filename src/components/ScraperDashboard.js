import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ScraperDashboard = ({ user }) => {
  return (
    <Container className="mt-4">
      <h1>Welcome, {user.name} (Scraper)</h1>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Available Jobs</Card.Title>
              <Card.Text>Check available jobs for scrap collection.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Scrap Delivery</Card.Title>
              <Card.Text>Schedule scrap material delivery.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Earnings</Card.Title>
              <Card.Text>Track your earnings and payments.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ScraperDashboard;
