import "./App.css";
import CarDetails from "./components/CarDetails";

function App() {
  const carros = [
    {
      id: 1,
      marca: "Fiat",
      modelo: "Palio",
      ano: 2010,
      km: 20000,
      cor: "preto",
    },
    {
      id: 2,
      marca: "Chevrolet",
      modelo: "Onix",
      ano: 2025,
      km: 0,
      cor: "branco",
    },
    {
      id: 3,
      marca: "Volkswagen",
      modelo: "Gol",
      ano: 2015,
      km: 50000,
      cor: "azul",
    },
  ];
  return (
    <>
      <h1>Lista de Veículos</h1>
      {carros.map((carro) => (
        <div key={carro.id}>
          <CarDetails
            marca={carro.marca}
            modelo={carro.modelo}
            ano={carro.ano}
            km={carro.km}
            cor={carro.cor}
          />
        </div>
      ))}
    </>
  );
}

export default App;
