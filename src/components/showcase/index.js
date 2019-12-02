import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.css";

import flittoken from "assets/images/showcases/flit-token.webp";
import adventureMagelang from "assets/images/showcases/adventuremagelang.webp";

const options = {
  items: 2,
  margin: 30
};

export default memo(() => {
  return (
    <section id="showcase">
      <Container>
        <Row>
          <Col md={12} className="mb-5">
            <h2 className="text-center">Our Work</h2>
          </Col>
          <Col md={12}>
            <OwlCarousel className="owl-theme" loop nav {...options} autoplay>
              <div className="item">
                <img
                  className="img-fluid shadow mx-auto d-block"
                  src={flittoken}
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  className="img-fluid shadow mx-auto d-block"
                  src={adventureMagelang}
                  alt=""
                />
              </div>
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
});
