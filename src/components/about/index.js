import React, { memo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import AboutText from "./AboutText";
import AboutIllustration from "./AboutIllustration";
import "./style.css";

export default memo(() => (
  <section id="about-us">
    <Container>
      <Row>
        <Col md={12} className="mb-5">
          <h2 className="text-center">About Us</h2>
        </Col>
        <Col md={6}>
          <AboutText />
          <Button
            variant="outline-warning"
            className="px-4 rounded-pill text-dark"
          >
            <strong>Read More</strong>
          </Button>
        </Col>
        <Col md={6}>
          <AboutIllustration />
        </Col>
      </Row>
    </Container>
  </section>
));
