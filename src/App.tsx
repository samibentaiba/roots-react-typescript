import "./App.css";
import Card from "@/components/Card"; // Using alias
import subtract, { add, multiply } from "@/utils/math";

// Normal function
function getGreeting(name: string): string {
  return `Hello, ${name}`;
}

// Arrow function
const getFarewell = (name: string): string => `Goodbye, ${name}`;

// Async function
async function fetchUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await res.json();
  console.log("User fetched:", user);
  return user;
}

// Top-level code execution (since we are not using hooks)
fetchUser();

export default function App() {
  const resultAdd = add(4, 5);
  const resultMultiply = multiply(4, 5);
  const resultSubtract = subtract(10, 3);
  const greeting = getGreeting("Sami");
  const farewell = getFarewell("Sami");

  return (
    <div>
      <h1>Chapter 7 Exercises</h1>

      <p>{greeting}</p>
      <p>{farewell}</p>

      <Card
        title="Math Results"
        content={`Add: ${resultAdd}, Multiply: ${resultMultiply}, Subtract: ${resultSubtract}`}
      />
    </div>
  );
}
