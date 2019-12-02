import React, { memo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
  faWhatsappSquare,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";

export default memo(() => {
  const [socialMedia] = useState([
    { link: "", icon: faInstagram },
    { link: "", icon: faTwitterSquare },
    { link: "", icon: faFacebookSquare },
    { link: "", icon: faWhatsappSquare }
  ]);

  return (
    <div className="clearfix">
      <ul className="list-inline float-right d-block my-4">
        {socialMedia.map(({ link, icon }, index) => (
          <li className="list-inline-item mx-2" key={index}>
            <a
              href={link}
              className="text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon size="2x" icon={icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});
