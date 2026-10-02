import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, seCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

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

  return (
    <div
      className="min-h-screen flex items-start justify-center
      bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950
      px-4 py-16"
    >
      <div
        className="max-w-md mx-auto w-full
        bg-white/5 backdrop-blur-xl
        border border-white/10
        text-violet-100
        shadow-2xl shadow-purple-950/50
        rounded-2xl p-6 sm:p-8"
      >
        <div
          className="flex overflow-hidden rounded-xl mb-4
          border border-white/10 bg-slate-950/80
          shadow-inner transition-all duration-300
          focus-within:border-violet-500
          focus-within:shadow-lg focus-within:shadow-violet-500/10"
        >
          <input
            type="text"
            value={password}
            className="outline-none w-full min-w-0 py-3 px-4
            bg-white text-black
            font-mono tracking-wide placeholder-slate-500
            focus:ring-2 focus:ring-violet-500/30"
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default App;
