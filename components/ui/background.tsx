"use client";

import { motion } from "framer-motion";

export function Background({ color = "#6366f1" }: { color?: string }) {
  return (
    <div className="fixed inset-0 z-0">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `radial-gradient(125% 125% at 50% 10%, #fff 40%, ${color} 100%)`,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </div>
  );
}
