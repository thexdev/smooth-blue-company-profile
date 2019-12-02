import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import ProductCard from "./ProductCard";

import artaWallet from "assets/images/products/arta-wallet.webp";
import "./style.css";

export default memo(() => (
  <section id="products">
    <Container>
      <Row>
        <Col md={12} className="mb-5">
          <h2 className="text-center">Products</h2>
        </Col>
        <Col md={6} className="product-image">
          <img src={artaWallet} alt="" className="shadow-lg img-fluid" />
        </Col>
        <Col md={6}>
          <h3>Arta Wallet</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            rerum earum illum tenetur maiores quae neque voluptas saepe
            reprehenderit, maxime et nisi nam itaque sunt! Quo consectetur
            architecto quod nam.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum sint
            corporis molestias, voluptas cum dolorum ut necessitatibus
            voluptatibus nesciunt aliquam repellendus nulla, magnam, tempore
            officiis totam voluptates? Veritatis, optio dolore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            expedita ducimus itaque obcaecati illo aspernatur odit deserunt
            aliquam enim iusto, quam molestiae, dicta, nulla minima autem sit
            magnam architecto! Impedit!
          </p>
        </Col>
      </Row>
    </Container>
  </section>
));
