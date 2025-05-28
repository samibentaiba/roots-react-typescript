// Named exports
export function add(a: number, b: number) {
  return a + b;
}

export const multiply = (a: number, b: number) => a * b;

// Default export (optional)
const subtract = (a: number, b: number) => a - b;
export default subtract;
