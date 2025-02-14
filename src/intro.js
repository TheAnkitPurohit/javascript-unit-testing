// Lesson: Writing your first tests
export function max(a, b) {
  return a > b ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  return n % 15 === 0
    ? "FizzBuzz"
    : n % 3 === 0
    ? "Fizz"
    : n % 5 === 0
    ? "Buzz"
    : n.toString();
}

export function calculateAverage(numbers) {
  return numbers.length
    ? numbers.reduce((sum, num) => sum + num, 0) / numbers.length
    : 0;
}

export function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
