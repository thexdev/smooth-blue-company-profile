import React, { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import "./style.css";

export default memo(() => {
  const [menus] = useState([
    { route: "/", alias: "home", tooltip: "Home" },
    { route: "/about-us", alias: "about", tooltip: "About Us" },
    { route: "/teams", alias: "team", tooltip: "Our Team" },
    { route: "/clients", alias: "clients", tooltip: "Our Clients" }
  ]);

  return (
    <Navbar bg="white" expand="lg" className="sticky-top shadow">
      <Container>
        <Link to="/" className="navbar-brand">
          jnr.id
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {menus.map(({ route, alias, tooltip }, index) => (
              <OverlayTrigger
                key={index}
                placement="bottom"
                overlay={<Tooltip>{tooltip}</Tooltip>}
              >
                <NavLink
                  exact
                  to={route}
                  activeClassName="active"
                  className="mx-1 nav-link"
                >
                  {alias}
                </NavLink>
              </OverlayTrigger>
            ))}
          </Nav>
          <Link
            className="btn btn-outline-primary rounded-pill px-3 py-1 mx-1"
            to="/contact"
          >
            contact us
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});
