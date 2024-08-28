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
      className="rounded-full bg-white [mix-blend-mode:difference] h-4 w-4 fixed left-0 top-0 z-50 pointer-events-none flex justify-center items-center"
      initial={{ scale: 1 }}
      animate={{
        scale: isHovered ? scaleSize : 1,
        transition: { type: "spring", stiffness: 100, duration: 0.2 },
      }}
      style={{ x, y }}
    >
      {isHovered && (
        <motion.span className="text-xs whitespace-nowrap" style={{ scale: scaleSize ? 1 / scaleSize : 0.2 }}>
          {message}
        </motion.span>
      )}
    </motion.div>
  );
}
