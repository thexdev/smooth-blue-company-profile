import React, { memo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import TeamCard from "./TeamCard";
import teamsData from "./teamsData";
import "./style.css";

export default memo(() => {
  const [teams] = useState(teamsData);

  return (
    <section id="teams">
      <Container>
        <Row>
          <Col md={12} className="mb-5">
            <h2 className="text-center">Teams</h2>
          </Col>
          {teams.map(({ name, role, image }, index) => (
            <Col md={3} key={index}>
              <TeamCard name={name} role={role} image={image} />
            </Col>
          ))}
          <Col md={12} className="mt-5 text-center">
            <Link
              to="/teams"
              className="btn btn-outline-primary rounded-pill mx-auto"
            >
              See Our Full Teams
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
});
