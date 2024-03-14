import React from "react";

interface ActionSelectProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ActionSelect: React.FC<ActionSelectProps> = ({ onChange }) => {
  return (
    <div>
      <p>ActionSelect</p>

      <select onChange={onChange}>
        <option value="buy">Buy</option>
        <option value="sell">Sell</option>
      </select>
    </div>
  );
};

export default ActionSelect;
