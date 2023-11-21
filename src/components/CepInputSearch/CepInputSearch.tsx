import { useState } from "react";

export default function CepInputSearch() {
  const [cepValue, setCepValue] = useState("");

  const handleZipCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    input.value = zipCodeMask(input.value);

    setCepValue(input.value);
  };

  const zipCodeMask = (value: string) => {
    if (!value) return "";

    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");

    return value;
  };

  return (
    <div>
      <label htmlFor="cepInput">CEP:</label>
      <input
        type="text"
        id="cepInput"
        name="cepInput"
        autoFocus
        maxLength={9}
        value={cepValue}
        onChange={(e) => handleZipCode(e)}
      />
    </div>
  );
}
