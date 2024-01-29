import { useEffect, useState } from "react";
import { useMediaQuery } from "./useMediaQuery";

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 769px)");

  useEffect(() => {
    if (
      window.navigator.userAgentData?.mobile ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      (window.navigator.userAgentData?.mobile && isSmallScreen)
    ) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isSmallScreen]);

  return isMobile;
}
