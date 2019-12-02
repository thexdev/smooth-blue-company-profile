import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";

import FooterLinks from "./FooterLinks";
import {
  jnrLinks,
  servicesLinks,
  productsLinks,
  socialMediaLinks
} from "./LinksData";
import Illustration from "assets/images/illustrations/artboard-15.svg";
import "./style.css";

export default memo(() => {
  return (
    <footer className="pt-5">
      <Container>
        <Row>
          <Col>
            <img src={Illustration} alt="" />
          </Col>
          <Col>
            <FooterLinks title="JNR indonesia" links={jnrLinks} />
          </Col>
          <Col>
            <FooterLinks title="services" links={servicesLinks} />
          </Col>
          <Col>
            <FooterLinks title="products" links={productsLinks} />
          </Col>
          <Col>
            <FooterLinks title="social media" links={socialMediaLinks} />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center pt-3">
              <small>
                <strong>&copy; 2019 - JNR Indonesia.</strong>
              </small>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
});
