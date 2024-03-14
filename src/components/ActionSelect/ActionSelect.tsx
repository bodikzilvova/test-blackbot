import React from "react";
import { Select } from "./ActionSelect.styled";

interface ActionSelectProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ActionSelect: React.FC<ActionSelectProps> = ({ onChange }) => {
  return (
    <>
      <p>Buy/Sell</p>
      <Select onChange={onChange}>
        <option value="buy">Buy</option>
        <option value="sell">Sell</option>
      </Select>
    </>
  );
};

export default ActionSelect;
