import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Controls from "./components/Controls";
import QRGenerator from "./components/QRGenerator";

export default function App() {
  const [text, setText] = useState("");

  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [qrStyle, setQrStyle] = useState("square");

  const [hasExpanded, setHasExpanded] = useState(false);

  const hasQR = text.trim().length > 0;

  useEffect(() => {
    if (hasQR && !hasExpanded) {
      setHasExpanded(true);
    }
  }, [hasQR]);

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-[#0f172a] via-[#020617] to-black">

      {/* 🔥 GLASS CARD */}
      <motion.div
        animate={{ width: hasExpanded ? 900 : 420 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="p-6 rounded-2xl border border-white/10
        bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        relative overflow-hidden"
      >

        {/* 💡 LIGHT GLOW EFFECT */}
        <div className="absolute inset-0 bg-gradient-to-r 
          from-purple-500/10 via-transparent to-blue-500/10 blur-2xl pointer-events-none" />

        {/* HEADER */}
        <h1 className="text-xl font-semibold text-white mb-6">
          QR Studio ✨
        </h1>

        {/* CONTENT */}
        <div className="flex gap-6 items-center">

          {/* LEFT */}
          <div className="flex-1">
            <Controls
              text={text}
              setText={setText}
              fgColor={fgColor}
              setFgColor={setFgColor}
              bgColor={bgColor}
              setBgColor={setBgColor}
              qrStyle={qrStyle}
              setQrStyle={setQrStyle}
            />
          </div>

          {/* RIGHT */}
          {hasExpanded && (
            <div className="flex-1 flex justify-center">

              <AnimatePresence mode="wait">

                {hasQR ? (
                  <motion.div
                    key="qr"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 60 }}
                    transition={{ duration: 0.4 }}
                  >
                    <QRGenerator
                      text={text}
                      fgColor={fgColor}
                      bgColor={bgColor}
                      qrStyle={qrStyle}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="gif"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <img
                      src="https://media1.tenor.com/m/SXLl_nHIBRwAAAAC/dnd-spell.gif"
                      alt="loading"
                      className="w-[220px] h-[220px] rounded-xl object-cover"
                    />
                  </motion.div>
                )}

              </AnimatePresence>

            </div>
          )}

        </div>

      </motion.div>
    </div>
  );
}