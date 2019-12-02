import React, { memo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import TeamCard from "components/teams/TeamCard";
import teamsData from "components/teams/teamsData";
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
        </Row>
      </Container>
    </section>
  );
});
