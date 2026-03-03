import React from "react";

type ZarazekProps = {
  name: string;
};

const Zarazek: React.FC<ZarazekProps> = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Zarazek;
