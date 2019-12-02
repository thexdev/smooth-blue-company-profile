import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";

import aeg from "assets/images/clients/aeg.png";
import diners from "assets/images/clients/diners.png";
import foxTactical from "assets/images/clients/fox-tactical.jpg";
import intel from "assets/images/clients/intel.jpg";
import microsoft from "assets/images/clients/microsoft.png";
import semanticBits from "assets/images/clients/semantic-bits.png";

import "./style.css";

export default memo(() => (
  <section id="clients">
    <Container>
      <Row className="justify-content-center">
        <Col md={12} className="mb-5">
          <h2 className="text-center">Clients</h2>
        </Col>
        <Col md={3}>
          <img src={aeg} alt="" className="mx-auto d-block img-fluid" />
        </Col>
        <Col md={3}>
          <img src={diners} alt="" className="mx-auto d-block img-fluid" />
        </Col>
        <Col md={3}>
          <img src={foxTactical} alt="" className="mx-auto d-block img-fluid" />
        </Col>
        <Col md={3}>
          <img src={intel} alt="" className="mx-auto d-block img-fluid" />
        </Col>
        <Col md={3}>
          <img src={microsoft} alt="" className="mx-auto d-block img-fluid" />
        </Col>
        <Col md={3}>
          <img
            src={semanticBits}
            alt=""
            className="mx-auto d-block img-fluid"
          />
        </Col>
      </Row>
    </Container>
  </section>
));
