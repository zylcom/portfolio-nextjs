import { Dispatch, SetStateAction, createContext } from "react";

export type Hover = {
  isHovered: boolean;
  message: string;
  scaleSize?: number;
};

interface HoverContextType {
  hover: Hover;
  setHover: Dispatch<SetStateAction<Hover>>;
}

export const HoverContext = createContext<HoverContextType>({
  hover: { isHovered: false, message: "", scaleSize: 4 },
  setHover: () => {},
});
