import { useEffect } from "react";

export default function Toast({ message, clear }) {
  useEffect(() => {
    if (message) {
      const t = setTimeout(clear, 2000);
      return () => clearTimeout(t);
    }
  }, [message]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded-lg shadow">
      {message}
    </div>
  );
}