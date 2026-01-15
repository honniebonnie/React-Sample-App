import { useState } from "react";
import"./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="App">
      <h1>Simple React App</h1>
      <p>Welcome to EduTechRitt React Practice 🚀</p>

    <div className="card">
      <h2>Counter</h2>
      <p className="count">{count}</p>
      
    <div className="btns">
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>

    <div className="card">
      <h2>Type Your Name</h2>
      <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
      />

      <p>Hello,<b>{name || "Guest"}</b>👋</p>
      </div>
    </div>
  );
}