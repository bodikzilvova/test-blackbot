import React from "react";

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
    <div>
      ResultInput
      <p> You will recieve</p>
      <input type="number" readOnly value={totalPriceString} />
    </div>
  );
};

export default ResultInput;
