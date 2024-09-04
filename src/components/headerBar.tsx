import Link from "next/link";
import { motion } from "framer-motion";
import ActionButton from "./actionButton";
import CursorHover from "./cursorHover";

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
  return (
    <div className="grid grid-cols-[1fr_minmax(10px,_130px)] grid-rows-3 py-9 sm:flex sm:items-center sm:justify-between [&>*:not(:first-child)]:text-[.57rem] [&>*:not(:first-child)]:uppercase">
      <CursorHover message="Home" scaleSize={4}>
        <Link href="/" className="row-span-3 first-letter:text-xl">
          <motion.span className="block sm:ml-3" initial="initial" animate="fade" variants={fadeInVariant}>
            Sabilillah
          </motion.span>
        </Link>
      </CursorHover>

      <motion.span className="order-2" initial="initial" animate="fade" variants={fadeInVariant}>
        Front-end Developer / <br className="lg:hidden" /> Web Developer
      </motion.span>

      <motion.span className="order-3 mt-2" initial="initial" animate="fade" variants={fadeInVariant}>
        Available for hire
      </motion.span>

      <motion.div className="order-4" initial="initial" animate="fade" variants={fadeInVariant}>
        <CursorHover scaleSize={4}>
          <ActionButton
            afterContent="after:content-['Let\'s_Talk']"
            className="w-[120px] border text-xs"
            text="Let's Talk"
            href="mailto:sabilillah272@gmail.com"
          />
        </CursorHover>
      </motion.div>
    </div>
  );
}
