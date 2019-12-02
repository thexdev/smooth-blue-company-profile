import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.css";

import aeg from "assets/images/clients/aeg.webp";
import diners from "assets/images/clients/diners.webp";
import foxTactical from "assets/images/clients/fox-tactical.webp";
import intel from "assets/images/clients/intel.webp";
import microsoft from "assets/images/clients/microsoft.webp";
import semanticBits from "assets/images/clients/semantic-bits.webp";

const options = {
  items: 5,
  margin: 0
};

export default memo(() => (
  <section id="clients">
    <Container>
      <Row>
        <Col md={12} className="mb-5">
          <h2 className="text-center">Clients</h2>
        </Col>
        <Col md={12}>
          <OwlCarousel className="owl-theme" loop nav {...options} autoplay>
            <div className="item">
              <img className="img-fluid mx-auto d-block" src={aeg} alt="" />
            </div>
            <div className="item">
              <img className="img-fluid mx-auto d-block" src={diners} alt="" />
            </div>
            <div className="item">
              <img
                className="img-fluid mx-auto d-block"
                src={foxTactical}
                alt=""
              />
            </div>
            <div className="item">
              <img className="img-fluid mx-auto d-block" src={intel} alt="" />
            </div>
            <div className="item">
              <img
                className="img-fluid mx-auto d-block"
                src={microsoft}
                alt=""
              />
            </div>
            <div className="item">
              <img
                className="img-fluid mx-auto d-block"
                src={semanticBits}
                alt=""
              />
            </div>
          </OwlCarousel>
        </Col>
      </Row>
    </Container>
  </section>
));
