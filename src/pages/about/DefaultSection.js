import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";

/**
 *
 * Inverse Section
 *
 * A component that the content (text description)
 * at the left and the illustration (image) at the right
 *
 * @param {string} title props
 * @param {string} image props
 * @param {string|component} text props
 */

export default memo(({ title, image, text }) => (
  <section className="about-section">
    <Container>
      <Row>
        <Col md={6} className="about-section-image">
          <img src={image} alt="" className="d-block mx-auto" />
        </Col>
        <Col md={6} className="about-section-text">
          <h2 className="text-uppercase pl-4">{title}</h2>
          {text.map((content, index) => (
            <p key={index} className="pl-4">
              {content}
            </p>
          ))}
        </Col>
      </Row>
    </Container>
  </section>
));
