import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./ServiceCard";

import services from "./ServiceData";
import "./style.css";

export default memo(() => (
  <section id="services">
    <Container>
      <Row>
        <Col md={12} className="mb-5">
          <h2 className="text-center">Services</h2>
        </Col>
        {services.map(({ illustration, title, text }, index) => (
          <Col md={4} key={index} className="d-flex justify-content-center">
            <ServiceCard
              illustration={illustration}
              title={title}
              text={text}
            />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
));
