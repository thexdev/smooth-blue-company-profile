import React, { memo } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./style.css";

export default memo(() => (
  <section id="contact-form">
    <Container>
      <Row className="justify-content-center">
        <Col md={12}>
          <h2 className="text-center text-capitalize mb-5">
            tell us what you need!
          </h2>
        </Col>
        <Col md={10}>
          <Form>
            <Form.Row>
              <Col md={6} className="px-3">
                <Form.Group className="my-4">
                  <Form.Label>* Name</Form.Label>
                  <Form.Control size="lg" />
                </Form.Group>
                <Form.Group className="my-4">
                  <Form.Label>* Service</Form.Label>
                  <Form.Control size="lg" as="select">
                    <option value=""></option>
                    <option value="">Website App dev</option>
                    <option value="">Mobile App dev</option>
                    <option value="">Advertising</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="my-4">
                  <Form.Label>* Email</Form.Label>
                  <Form.Control size="lg" />
                </Form.Group>
              </Col>
              <Col md={6} className="px-3">
                <Form.Group className="my-4">
                  <Form.Label>Message</Form.Label>
                  <textarea name="message" className="form-control"></textarea>
                </Form.Group>
              </Col>
              <Button
                variant="outline-primary"
                className="d-block mx-auto px-4 rounded-pill text-uppercase"
              >
                submit
              </Button>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  </section>
));
