import { useState } from "react";

import FreteForm from "./components/FreteForm";
import Results from "./components/Results";

import "./App.css";

export interface CepData {
  error: string | null;
  data: {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
  } | null;
}

export default function App() {
  const [cepData, setCepData] = useState<CepData>();

  return (
    <main className="home">
      <h2>Consulta de Frete</h2>
      <FreteForm setCepData={setCepData} />

      {cepData && <Results cepData={cepData} />}
    </main>
  );
}
