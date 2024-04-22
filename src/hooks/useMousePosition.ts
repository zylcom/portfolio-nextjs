import { SpringOptions, useSpring } from "framer-motion";
import { useEffect } from "react";

export function useMousePosition(
  xOffset = 0,
  yOffset = 0,
  spring = {
    stiffness: 200,
    damping: 50,
  }
) {
  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  function updateMousePosition(e: MouseEvent) {
    mousePosition.x.set(e.clientX + xOffset);
    mousePosition.y.set(e.clientY + yOffset);
  }

  useEffect(() => {
    mousePosition.x.set(window.innerWidth / 2 + xOffset);
    mousePosition.y.set(window.innerHeight / 2 + yOffset);

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return mousePosition;
}
