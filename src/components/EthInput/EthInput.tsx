import React from "react";

interface EthInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EthInput: React.FC<EthInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <p> Eth amount: </p>
      <input type="number" min="0" value={value} onChange={onChange} />
    </div>
  );
};

export default EthInput;
