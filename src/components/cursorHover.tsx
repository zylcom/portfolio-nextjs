import { HoverContext } from "@/context/hoverContext";
import { ReactNode, useContext } from "react";

export default function CursorHover({ children, scaleSize = 1, message = "" }: { children: ReactNode; scaleSize?: number; message?: string }) {
  const { setHover } = useContext(HoverContext);

  return (
    <div className="w-fit" onMouseOver={() => setHover({ isHovered: true, message, scaleSize })} onMouseLeave={() => setHover({ isHovered: false, message })}>
      {children}
    </div>
  );
}
