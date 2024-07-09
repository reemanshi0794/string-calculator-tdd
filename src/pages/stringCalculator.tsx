import React, { useState } from "react";

export const add = (numbers: string): number => {
  if (numbers === "") {
    return 0;
  }
  return parseInt(numbers);
};

const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddClick = () => {
    const calculatedResult = add(input);
    setResult(calculatedResult);
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <input
        type="text"
        placeholder="Enter numbers (e.g., 1,2 or //;\n1;2)"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleAddClick}>Add</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default StringCalculator;
