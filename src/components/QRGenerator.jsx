import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function QRGenerator({ text, fgColor, bgColor, qrStyle }) {
  const canvasRef = useRef(null);

  // ❌ Don't render if empty
  if (!text.trim()) return null;

  // ✅ Download QR
  const downloadQR = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qr.png";
    link.click();
  };

  // ✅ Copy QR
  const copyQR = async () => {
    try {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.toBlob(async (blob) => {
        if (!blob) return;

        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob }),
        ]);
      });
    } catch (err) {
      alert("Copy not supported in this browser");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="text-center"
    >

      {/* QR BOX */}
      <div className="bg-white p-4 rounded-xl shadow-lg inline-block">
        <QRCodeCanvas
          value={text}
          size={220}
          fgColor={fgColor}
          bgColor={bgColor}
          ref={canvasRef}
          style={{
            borderRadius: qrStyle === "dots" ? "20px" : "0px",
          }}
        />
      </div>

      {/* BUTTONS BELOW QR */}
      <div className="flex justify-center gap-4 mt-4">

        <button
          onClick={downloadQR}
          className="bg-blue-500 hover:bg-blue-600 transition-all duration-200 active:scale-95 text-white px-4 py-2 rounded-lg"
        >
          ⬇ Download
        </button>

        <button
          onClick={copyQR}
          className="bg-green-500 hover:bg-green-600 transition-all duration-200 active:scale-95 text-white px-4 py-2 rounded-lg"
        >
          📋 Copy
        </button>

      </div>

    </motion.div>
  );
}