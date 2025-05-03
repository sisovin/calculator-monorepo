export const calculateSum = (a: number, b: number): number => {
  return a + b;
};

export const calculateDifference = (a: number, b: number): number => {
  return a - b;
};

export const calculateProduct = (a: number, b: number): number => {
  return a * b;
};

export const calculateQuotient = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
};
