import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <div
      className="w-full h-screen transition-all duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className=" fixed
   bottom-22 flex flex-wrap justify-center  inset-x-0 px-2 py-2"
      >
        <div
          className=" flex flex-wrap 
    justify-center gap-4
     bg-white rounded-2xl
     px-5 py-4"
        >
          <button
            onClick={() => setColor("red")}
            className="
       outline-none 
       px-4 py-2 
       rounded-full 
       text-white
       "
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="
       outline-none 
       px-4 py-2 
       rounded-full 
       text-white
       "
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="
       outline-none 
       px-4 py-2 
       rounded-full 
       text-black
       "
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
