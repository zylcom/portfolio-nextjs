import { HoverContext } from "@/context/hoverContext";
import { ReactNode, useContext } from "react";

export default function CursorHover({
  className,
  children,
  scaleSize = 1,
  message = "",
}: {
  className?: string;
  children: ReactNode;
  scaleSize?: number;
  message?: string;
}) {
  const { setHover } = useContext(HoverContext);

  return (
    <div
      className={"w-fit " + className}
      onMouseOver={() => setHover({ isHovered: true, message, scaleSize })}
      onMouseLeave={() => setHover({ isHovered: false, message })}
    >
      {children}
    </div>
  );
}
