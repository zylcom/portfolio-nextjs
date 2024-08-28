import Link from "next/link";
import { motion } from "framer-motion";
import { useContext } from "react";
import ActionButton from "./actionButton";
import { HoverContext } from "@/context/hoverContext";

const fadeInVariant = {
  initial: {
    y: 30,
    opacity: 0,
  },
  fade: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7 },
  },
};

export default function HeaderBar() {
  const { setHover } = useContext(HoverContext);

  return (
    <div className="grid grid-cols-[1fr_minmax(10px,_130px)] grid-rows-3 py-9 sm:flex sm:items-center sm:justify-between [&>*:not(:first-child)]:text-[.57rem] [&>*:not(:first-child)]:uppercase">
      <Link
        href="/"
        className="row-span-3 first-letter:text-xl"
        onMouseOver={() => setHover({ isHovered: true, message: "Home", scaleSize: 4 })}
        onMouseLeave={() => setHover({ isHovered: false, message: "" })}
      >
        <motion.span className="block ml-3" initial="initial" animate="fade" variants={fadeInVariant}>
          Sabilillah
        </motion.span>
      </Link>

      <motion.span className="order-2" initial="initial" animate="fade" variants={fadeInVariant}>
        Front-end Developer / <br className="lg:hidden" /> Web Developer
      </motion.span>

      <motion.span className="order-3 mt-2" initial="initial" animate="fade" variants={fadeInVariant}>
        Available for hire
      </motion.span>

      <motion.div className="order-4" initial="initial" animate="fade" variants={fadeInVariant}>
        <ActionButton
          afterContent="after:content-['Let\'s_Talk']"
          className="text-xs w-[120px]"
          text="Let's Talk"
          href="mailto:sabilillah272@gmail.com"
          onMouseOver={() => setHover({ isHovered: true, message: "", scaleSize: 4 })}
          onMouseLeave={() => setHover({ isHovered: false, message: "" })}
        />
      </motion.div>
    </div>
  );
}
