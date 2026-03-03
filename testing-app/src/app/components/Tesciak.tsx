import React from "react";

type TesciakProps = {
  name: string;
};

const Tesciak: React.FC<TesciakProps> = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Tesciak;
