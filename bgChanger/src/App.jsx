import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ background: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 mb-5">
          <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-3xl shadow-lg">
            <button
              className="outline-none text-white px-4 py-1 rounded-3xl shadow-lg"
              style={{ backgroundColor: "Red" }}
              onClick={() => setColor("Red")}
            >
              Red
            </button>
            <button
              className="outline-none text-white px-4 py-1 rounded-3xl shadow-lg"
              style={{ backgroundColor: "Yellow" }}
              onClick={() => setColor("Yellow")}
            >
              Yellow
            </button>

            <button
              className="outline-none text-white px-4 py-1 rounded-3xl shadow-lg"
              style={{ backgroundColor: "Green" }}
              onClick={() => setColor("Green")}
            >
              Green
            </button>
            <button
              className="outline-none text-white px-4 py-1 rounded-3xl shadow-lg"
              style={{ backgroundColor: "Blue" }}
              onClick={() => setColor("Blue")}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
