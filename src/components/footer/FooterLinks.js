import React, { memo, Fragment } from "react";

export default memo(({ title, links }) => (
  <Fragment>
    <strong className="mb-3 d-block text-capitalize">{title}</strong>
    <ul className="list-unstyled">
      {links.map(({ link, alias }, index) => (
        <li key={index}>
          <a
            href={link}
            targe="_blank"
            rel="noopener noreferrer"
            className="text-secondary my-2 text-capitalize text-decoration-none"
          >
            {alias}
          </a>
        </li>
      ))}
    </ul>
  </Fragment>
));
