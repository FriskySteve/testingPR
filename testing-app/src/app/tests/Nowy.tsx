import React from "react";

type nowyProps = {
  test: string;
};

const Nowy: React.FC<nowyProps> = ({ test }) => {
  return (
    <div>
      <p>{test}</p>
    </div>
  );
};

export default Nowy;
