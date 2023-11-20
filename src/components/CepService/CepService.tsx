// CepService.tsx
import React from "react";

interface AddressData {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

interface CepServiceProps {
  onCepDataChange: (data: AddressData | null) => void;
  onError: (error: string | null) => void;
}

const CepService: React.FC<CepServiceProps> = ({
  onCepDataChange,
  onError,
}) => {
  const searchCep = (cep: string) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        if (data.erro) {
          onError("CEP não encontrado");
          onCepDataChange(null);
        } else {
          onCepDataChange(data);
          onError(null);
        }
      })
      .catch(() => {
        onError("Erro na consulta");
        onCepDataChange(null);
      });
  };

  return (
    <div>
      <h2>Consulta de Frete</h2>
      <div>
        <label htmlFor="cepInput">CEP:</label>
        <input
          type="text"
          id="cepInput"
          onChange={(e) => searchCep(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CepService;
