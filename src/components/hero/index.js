import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";

import HeroIllustration from "./HeroIllustration";
import HeroText from "./HeroText";
import "./style.css";

export default memo(() => (
  <header id="hero">
    <Container fluid>
      <Row>
        <Col md={6} className="hero-illustration">
          <HeroIllustration />
        </Col>
        <Col md={6} className="hero-text">
          <HeroText />
        </Col>
      </Row>
    </Container>
  </header>
));
