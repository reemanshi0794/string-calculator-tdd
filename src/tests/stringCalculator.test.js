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


test('returns the sum of multiple numbers', () => {
    expect(add('1,2,3')).toBe(6);
  });
