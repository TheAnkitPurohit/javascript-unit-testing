import { describe, expect, it } from "vitest";
import { calculateAverage, factorial, fizzBuzz, max } from "../src/intro";

describe("max function", () => {
  it("should return the larger of two numbers", () => {
    expect(max(5, 10)).toBe(10);
    expect(max(-1, -5)).toBe(-1);
    expect(max(100, 50)).toBe(100);
  });

  it("should return the same number when both numbers are equal", () => {
    expect(max(7, 7)).toBe(7);
    expect(max(-3, -3)).toBe(-3);
  });

  it("should handle edge cases with zero", () => {
    expect(max(0, 5)).toBe(5);
    expect(max(0, -5)).toBe(0);
    expect(max(0, 0)).toBe(0);
  });
});

describe("fizzBuzz function", () => {
  it('should return "FizzBuzz" for multiples of 15', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });

  it('should return "Fizz" for multiples of 3 but not 5', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  it('should return "Buzz" for multiples of 5 but not 3', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("should return the number as a string if not a multiple of 3 or 5", () => {
    expect(fizzBuzz(1)).toBe("1");
    expect(fizzBuzz(7)).toBe("7");
  });
});

describe("calculateAverage function", () => {
  it("should return the average of an array of numbers", () => {
    expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3);
    expect(calculateAverage([10, 20, 30])).toBe(20);
  });

  it("should return 0 for an empty array", () => {
    expect(calculateAverage([])).toBe(0);
  });

  it("should handle an array with a single element", () => {
    expect(calculateAverage([7])).toBe(7);
  });
});

describe("factorial function", () => {
  it("should return 1 for 0 and 1", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });

  it("should return correct factorial for positive numbers", () => {
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
  });
});
