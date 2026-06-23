import { useState } from "react";
import "./App.css";

function App() {
  const [bg, setBg] = useState(
    "linear-gradient(to right, #ff9966, #ff5e62)"
  );

  const randomColor = () => {
    const color =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBg(color);
  };

  return (
    <div className="container" style={{ background: bg }}>
      <h1>Background Changer</h1>

      <div className="buttons">
        <button
          className="red"
          onClick={() =>
            setBg("linear-gradient(to right, #ff512f, #dd2476)")
          }
        >
          Red
        </button>

        <button
          className="blue"
          onClick={() =>
            setBg("linear-gradient(to right, #36d1dc, #5b86e5)")
          }
        >
          Blue
        </button>

        <button
          className="green"
          onClick={() =>
            setBg("linear-gradient(to right, #56ab2f, #a8e063)")
          }
        >
          Green
        </button>

        <button
          className="purple"
          onClick={() =>
            setBg("linear-gradient(to right, #8e2de2, #4a00e0)")
          }
        >
          Purple
        </button>

        <button className="random" onClick={randomColor}>
          Random
        </button>
      </div>

      <p>Current Background:</p>
      <p>{bg}</p>
    </div>
  );
}

export default App;