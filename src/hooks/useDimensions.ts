import { useEffect, useState } from "react";

export function useDimensions() {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  function updateDimensions() {
    const { innerHeight, innerWidth } = window;

    setDimensions({ height: innerHeight, width: innerWidth });
  }

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return dimensions;
}
