import React from "react";
import { Input } from "../EthInput/EthInput.styled";

interface ResultInputProps {
  ethAmount: string;
  action: string;
  buyPrice: number;
  sellPrice: number;
}

const ResultInput: React.FC<ResultInputProps> = ({
  ethAmount,
  action,
  buyPrice,
  sellPrice,
}) => {
  const totalPrice =
    action === "buy"
      ? parseFloat(ethAmount) * buyPrice
      : parseFloat(ethAmount) * sellPrice;
  const totalPriceString = totalPrice.toString();
  return (
    <>
      <p>You will {action === "buy" ? "pay" : "receive"}</p>
      <Input type="number" readOnly value={totalPriceString} />
    </>
  );
};

export default ResultInput;
