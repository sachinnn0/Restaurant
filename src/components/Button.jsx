import { motion } from "motion/react";

export default function Button({ text }) {
  return (
    <div>
      <motion.button
        className="px-6 py-2 secondary-color primary-color text-xl uppercase"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
      >
        {text}
      </motion.button>
    </div>
  );
}
