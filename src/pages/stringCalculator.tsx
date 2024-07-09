import React, { useState } from "react";

export const add = (numbers: string): number => {
  if (numbers === '') {
    return 0;
  }
  const numArray = numbers.split(/[\n,]/).map(Number);
  return numArray.reduce((acc, curr) => acc + curr, 0);
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
