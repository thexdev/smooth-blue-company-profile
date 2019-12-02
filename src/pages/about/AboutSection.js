import React, { memo, lazy } from "react";

const DefaultSection = lazy(() => import("./DefaultSection"));
const InverseSection = lazy(() => import("./InverseSection"));

export default memo(({ type, title, image, text }) => {
  if (type === "inverse") {
    return <InverseSection title={title} image={image} text={text} />;
  }

  return <DefaultSection title={title} image={image} text={text} />;
});
