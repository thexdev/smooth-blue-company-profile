import React, { memo, useState, lazy } from "react";
import sectionData from "./section-data";
import "./style.css";

const AboutSection = lazy(() => import("./AboutSection"));

export default memo(() => {
  const [data] = useState(sectionData);

  return data.map(({ title, image, text, type }, index) => (
    <AboutSection
      type={type}
      title={title}
      image={image}
      text={text}
      key={index}
    />
  ));
});
