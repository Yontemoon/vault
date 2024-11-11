import React from "react";

type PropTypes = {
  stringContent: string;
};

const Shiki = ({ stringContent }: PropTypes) => {
  return (
    <React.Suspense>
      <div dangerouslySetInnerHTML={{ __html: stringContent }} />
    </React.Suspense>
  );
};

export default Shiki;
