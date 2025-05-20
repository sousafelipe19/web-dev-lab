import React from "react";

const CarDetails = (carro) => {
  return (
    <>
      <h2>
        {carro.marca} {carro.modelo}
      </h2>
      <ul>
        <li>Ano: {carro.ano}</li>
        <li>Estado: {carro.km > 0 ? "usado" : "novo"}</li>
        <li>Quilometragem: {carro.km} km</li>
        <li>Cor: {carro.cor}</li>
      </ul>
    </>
  );
};

export default CarDetails;
