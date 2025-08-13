import { ArrowRight, ArrowUpDown, Camera, Mic, Users } from "lucide-react";
import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  return (
    // left side
    <div className="min-h-screen bg-[#a8d0ff] flex items-start justify-center gap-6 p-4">
      <div className="w-72 min-h-[500px] bg-white rounded-[2rem] p-6 flex flex-col items-center gap-12 shadow-lg">
        <h1 className="font-semibold text-lg">
          Bolo <span className="text-orange-500">Na!</span>{" "}
        </h1>

        <div className="relative w-full flex flex-col gap-4 items-center">
          <button className="bg-purple-400 text-white py-4 rounded-full w-full text-lg font-medium">
            Hindi
          </button>

          <div className="absolute top-12 bg-orange-400 w-10 h-10 rounded-full flex items-center justify-center text-white">
            <ArrowUpDown size={20} />
          </div>

          <button className="bg-sky-300 text-white py-4 rounded-full w-full text-lg font-medium">
            English
          </button>
        </div>

        <p
          className="text-center font-medium text-gray-900
        "
        >
          Translation now <br /> in your hand
        </p>

        <button className="bg-orange-400 w-12 h-12 rounded-full flex items-center justify-center  text-white">
          <ArrowRight size={20} />
        </button>
      </div>

      {/* right side */}

      <div className="w-72 min-h-[500px] bg-white rounded-[2rem] p-6 flex flex-col gap-6 shadow-lg">
        <h1 className="font-semibold text-lg ">
          Bolo <span className="text-orange-500">Na!</span>
        </h1>

        <h2 className="font-bold text-2xl">Quick translation</h2>

        <div className="bg-[#fdf6ef] p-4 rounded-lg">
          <p className="text-sm text-gray-500 ">English</p>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            className="w-full bg-transparent outline-none resize-none text-gray-800 mt-1"
          />
          <p className="text-xs text-gray-400">{text.length}/1000</p>
        </div>
        {/* output --> language */}
        <div className="bg-[#fdf6ef] p-4 rounded-lg">
          <p className="text-sm text-gray-500 ">Hindi</p>
          <p className="text-gray-800 mt-1">{translated}</p>
          <p className="text-xs text-gray-400">{translated.length}/1000</p>
        </div>

        {/* bottom icons */}
        <div className="flex justify-between items-center">
          <button className="flex flex-col items-center text-gray-500">
            <Users size={20} />
            <span className="text-xs mt-1">Conversation</span>
          </button>

          <button className="bg-orange-400 w-12 h-12 rounded-full flex items-center justify-center text-white">
            <Mic size={20} />
          </button>

          <button
            className=" flex flex-col items-center 
        justify-center text-gray-500"
          >
            <Camera size={20} />
            <span className="text-xs mt-1">Camera</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
