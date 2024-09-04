import { motion } from "framer-motion";
import { useContext } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { HoverContext } from "@/context/hoverContext";

export default function CursorMask() {
  const { x, y } = useMousePosition(-13, -13);
  const {
    hover: { isHovered, message, scaleSize },
  } = useContext(HoverContext);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-white [mix-blend-mode:difference]"
      initial={{ scale: 1 }}
      animate={{
        scale: isHovered ? scaleSize : 1,
        transition: { type: "spring", stiffness: 100, duration: 0.2 },
      }}
      style={{ x, y }}
    >
      {isHovered && (
        <motion.span className="whitespace-nowrap text-xs" style={{ scale: scaleSize ? 1 / scaleSize : 0.2 }}>
          {message}
        </motion.span>
      )}
    </motion.div>
  );
}
