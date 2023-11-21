import type { CepData } from "../../App";

import CepInputSearch from "../CepInputSearch";

interface FreteFormProps {
  setCepData: (value: CepData) => void;
}

export default function FreteForm({ setCepData }: FreteFormProps) {
  const searchCep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElements = e.currentTarget.elements;
    const cepInput = formElements.namedItem("cepInput") as HTMLInputElement;
    const cepInputValue = cepInput.value.replace(/\D/g, "");

    fetch(`https://viacep.com.br/ws/${cepInputValue}/json/`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.erro) {
          setCepData({
            error: null,
            data,
          });
        } else {
          setCepData({
            error: "CEP não encontrado",
            data: null,
          });
        }
      })
      .catch(() => {
        setCepData({
          error: "Erro na consulta",
          data: null,
        });
      });
  };

  return (
    <form onSubmit={(e) => searchCep(e)}>
      <CepInputSearch />
      <button type="submit">Consultar</button>
    </form>
  );
}
