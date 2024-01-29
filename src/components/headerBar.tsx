import Link from "next/link";
import { useContext } from "react";
import ActionButton from "./actionButton";
import { HoverContext } from "@/context/hoverContext";

export default function HeaderBar() {
  const { setHover } = useContext(HoverContext);

  return (
    <div className="grid grid-cols-[1fr_minmax(10px,_130px)] grid-rows-3 py-9 sm:flex sm:items-center sm:justify-between [&>*:not(:first-child)]:text-[.57rem] [&>*:not(:first-child)]:uppercase">
      <Link
        href="/"
        className="row-span-3 first-letter:text-xl"
        onMouseOver={() =>
          setHover({ isHovered: true, message: "Home", scaleSize: 4 })
        }
        onMouseLeave={() => setHover({ isHovered: false, message: "" })}
      >
        <span className="block ml-3">Sabilillah</span>
      </Link>

      <span className="order-2">
        Front-end Developer / <br className="lg:hidden" /> Web Developer
      </span>

      <span className="order-3 mt-2">Available for hire</span>

      <ActionButton
        afterContent="after:content-['Let\'s_Talk']"
        className="text-xs w-[120px]"
        text="Let's Talk"
        href="mailto:sabilillah272@gmail.com"
        onMouseOver={() =>
          setHover({ isHovered: true, message: "", scaleSize: 4 })
        }
        onMouseLeave={() => setHover({ isHovered: false, message: "" })}
      />
    </div>
  );
}
