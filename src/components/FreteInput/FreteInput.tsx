import React, { useState } from "react";
import CepService from "../CepService";

interface FreteInputProps {
  onCepChange: (value: string) => void;
}

interface AddressData {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

const FreteInput: React.FC<FreteInputProps> = ({}) => {
  const [cepData, setCepData] = useState<AddressData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCepDataChange = (data: AddressData | null) => {
    setCepData(data);
  };

  const handleError = (errorMessage: string | null) => {
    setError(errorMessage);
  };

  return (
    <div>
      <CepService onCepDataChange={handleCepDataChange} onError={handleError} />
      {cepData && (
        <div >
          <h3>Dados do Frete</h3>
          <p>CEP: {cepData.cep}</p>
          <p>Logradouro: {cepData.logradouro}</p>
          <p>Bairro: {cepData.bairro}</p>
          <p>Cidade: {cepData.localidade}</p>
          <p>UF: {cepData.uf}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default FreteInput;
