import { add } from '../pages/stringCalculator.tsx';

test('returns 0 for an empty string', () => {
  expect(add('')).toBe(0);
});
