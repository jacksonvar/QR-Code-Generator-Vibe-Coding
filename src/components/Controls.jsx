import { motion } from "framer-motion";

export default function Controls({
  text,
  setText,
  fgColor,
  setFgColor,
  bgColor,
  setBgColor,
  qrStyle,
  setQrStyle,
}) {
  return (
    <div className="space-y-4">

      {/* INPUT */}
   <input
  value={text}
  onChange={(e) => setText(e.target.value)}
  placeholder="Enter URL..."
  className="w-full px-4 py-3 rounded-xl border border-white/20
  bg-white/10 text-white placeholder-gray-400
  focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<button
  onClick={() => setText("")}
  disabled={!text}
  className={`w-full py-2 rounded-lg mt-2 transition 
  ${text 
    ? "bg-gray-600 hover:bg-gray-700 text-white" 
    : "bg-gray-500 text-gray-300 cursor-not-allowed"}`}
>
  Clear
</button>

      {/* COLORS */}
      <div className="flex gap-3">
        <input type="color" value={fgColor} onChange={(e)=>setFgColor(e.target.value)} />
        <input type="color" value={bgColor} onChange={(e)=>setBgColor(e.target.value)} />
      </div>

      {/* STYLE TOGGLE */}
      <div className="relative flex bg-gray-200 dark:bg-gray-700 p-1 rounded-full overflow-hidden">

        <motion.div
          className="absolute top-1 bottom-1 w-1/2 bg-blue-500 rounded-full"
          animate={{ x: qrStyle === "square" ? "0%" : "100%" }}
        />

        <button
          onClick={() => setQrStyle("square")}
          className={`flex-1 z-10 py-2 ${
            qrStyle === "square" ? "text-white" : "text-black dark:text-white"
          }`}
        >
          Square
        </button>

        <button
          onClick={() => setQrStyle("dots")}
          className={`flex-1 z-10 py-2 ${
            qrStyle === "dots" ? "text-white" : "text-black dark:text-white"
          }`}
        >
          Rounded
        </button>

      </div>

    </div>
  );
}