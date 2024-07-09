import { add } from "../pages/stringCalculator.tsx";

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself when a single number is provided", () => {
  expect(add("1")).toBe(1);
});

test("returns the sum of two numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("returns the sum of multiple numbers", () => {
  expect(add("1,2,3")).toBe(6);
});

test("handles new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("supports different delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("supports different delimiters with longer lengths", () => {
  expect(add("//***\n1***2***3")).toBe(6);
});

test("throws an exception for negative numbers", () => {
  // Test case 1: Single negative number
  expect(() => add("1,-2")).toThrow("negative numbers not allowed: -2");

  // Test case 2: Multiple negative numbers
  expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");

  // Test case 3: No negative numbers (should not throw)
  expect(() => add("1,2,3")).not.toThrow();
});

it('handles large amount of numbers', () => {
    expect(add('1,2,3,4,5,6,7,8,9,10')).toBe(55);
  });

  it('handles numbers with leading/trailing spaces', () => {
    expect(add(' 1, 2,3 ,4, 5 ')).toBe(15);
  });

