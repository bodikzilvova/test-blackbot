import React from "react";
import { Input, Title } from "./EthInput.styled";

interface EthInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EthInput: React.FC<EthInputProps> = ({ value, onChange }) => {
  return (
    <>
      <Title>Check the current Ethereum price</Title>
      <p>Enter positive numbers</p>
      <Input type="number" min="0" value={value} onChange={onChange} />
    </>
  );
};

export default EthInput;
