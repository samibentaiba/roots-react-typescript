import Card from "@/components/Card"; // default import using alias
import { add, multiply } from "@/utils/math"; // named imports
import "./App.css";

async function getMessage(): Promise<string> {
  const result = await new Promise<string>((resolve) =>
    setTimeout(() => resolve("Data loaded asynchronously!"), 1000)
  );
  return result;
}

function normalGreeting(name: string): string {
  return `Hello, ${name}`;
}

const arrowGreeting = (name: string): string => `Hi, ${name}!`;

function App() {
  // NOTE: We are not using hooks per instruction, just inline execution
  getMessage().then((message) => console.log("Async message:", message));

  const sum = add(10, 5);
  const product = multiply(3, 4);

  return (
    <div className="App">
      <h1>{normalGreeting("User")}</h1>
      <h2>{arrowGreeting("Dev")}</h2>

      <p>10 + 5 = {sum}</p>
      <p>3 × 4 = {product}</p>

      <Card title="This is a Card Component" />
    </div>
  );
}

export default App;
