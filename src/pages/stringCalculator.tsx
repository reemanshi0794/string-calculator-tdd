import React, { useState } from "react";

const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    setInput(e.target.value);
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
      <button>Add</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default StringCalculator;
