import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, seCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "@#$%^&*()!_{}:|<>?/";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  const passwordCopied = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md rounded-xl bg-gray-800 p-6 text-white shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold">
          Password Generator
        </h1>

        <div className="mb-6 flex">
          <input
            type="text"
            value={password}
            className="w-full rounded-l-lg bg-white p-3 text-black outline-none"
            readOnly
            ref={passwordRef}
          />

          <button
            className="rounded-r-lg
           bg-blue-600 px-4
            hover:bg-blue-500"
            onClick={passwordCopied}
          >
            Copy
          </button>
        </div>

        <div className="mb-5 flex items-center gap-3">
          <input
            type="range"
            value={length}
            className="w-full accent-blue-500 cursor-pointer"
            min={10}
            max={100}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <span>{length}</span>
        </div>

        <div className="mb-6 flex flex-wrap gap-5">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              className="accent-blue-500"
            />
            Numbers
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              id="characterInput"
              className="accent-blue-500"
              defaultChecked={charAllowed}
              onChange={() => {
                seCharAllowed((prev) => !prev);
              }}
            />
            Special Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
