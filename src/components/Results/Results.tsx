import { CepData } from "../../App";

interface ResultsProps {
  cepData: CepData;
}

export default function Results({ cepData }: ResultsProps) {
  const { error, data } = cepData;

  return (
    <div>
      {data && (
        <div>
          <h3>Dados do Frete</h3>
          <p>CEP: {data.cep}</p>
          <p>Logradouro: {data.logradouro}</p>
          <p>Bairro: {data.bairro}</p>
          <p>Cidade: {data.localidade}</p>
          <p>UF: {data.uf}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}
