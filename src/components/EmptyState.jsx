import { motion } from "framer-motion";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center">

      <div className="w-[200px] h-[200px] border-2 border-dashed 
        rounded-xl flex items-center justify-center overflow-hidden">

        <motion.div
          animate={{ x: [-60, 60, -60] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-3xl"
        >
          🐇
        </motion.div>

      </div>

      <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
        Waiting for URL...
      </p>

    </div>
  );
}