import React, { memo } from "react";
import { Card, Button } from "react-bootstrap";

export default memo(({ illustration, title, text }) => (
  <Card text="white" className="border-0">
    <Card.Img variant="top" src={illustration}></Card.Img>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
      <Button variant="outline-warning" className="px-4 rounded-pill text-dark">
        <strong>Build Now!</strong>
      </Button>
    </Card.Body>
  </Card>
));
