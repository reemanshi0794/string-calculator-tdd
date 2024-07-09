import React, { useState } from "react";

export function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = ",";
  let nums = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterEndIndex); 
    nums = numbers.substring(delimiterEndIndex + 1); 
  }

  // Handle different delimiters and new lines properly
  const numArray = nums.split(new RegExp(`[${delimiter}\\n]`)).map((num) => {
    const parsedNum = parseInt(num.trim(), 10);
    return isNaN(parsedNum) ? 0 : parsedNum;
  });

  const negatives = numArray.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return numArray.reduce((acc, num) => acc + num, 0);
}

const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAddClick = () => {
    try {
      const calculatedResult = add(input);
      setResult(calculatedResult);
    } catch (error) {
      console.error("Error calculating result:", error.message);
      setResult(0); 
    }
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
