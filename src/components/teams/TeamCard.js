import React, { memo } from "react";
import { Card } from "react-bootstrap";

export default memo(({ name, role, image }) => (
  <Card className="border-0 shadow-sm">
    <Card.Img src={image} className="mx-auto d-block"></Card.Img>
    <Card.Body>
      <Card.Title className="text-center">{name}</Card.Title>
      <Card.Text className="text-center">{role}</Card.Text>
    </Card.Body>
  </Card>
));
