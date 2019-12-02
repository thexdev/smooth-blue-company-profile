import React, { memo, Fragment } from "react";
import { Button } from "react-bootstrap";
import HeroSocialMedia from "./HeroSocialMedia";

export default memo(() => (
  <Fragment>
    <h1>We start from your problem then beat it into solution, that's it.</h1>
    <HeroSocialMedia />
    <p className="lead text-right mb-5">
      We'll beat your problem with our excellent team and help you achieve your
      dreams faster.
    </p>
    <Button
      variant="outline-light"
      size="lg"
      className="float-right shadow-sm rounded-pill text-uppercase px-5"
    >
      contact us now
    </Button>
  </Fragment>
));
