import React, {
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  frame,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import ActionButton from "./actionButton";
import { HoverContext } from "@/context/hoverContext";
import { socials } from "@/utils/data";

export default function Footer() {
  const [lastYPos, setLastYPos] = useState(0);
  const firstText: MutableRefObject<HTMLAnchorElement | null> = useRef(null);
  const secondText: MutableRefObject<HTMLAnchorElement | null> = useRef(null);
  const direction = useRef(1);
  const x = useRef(0);
  const { setHover } = useContext(HoverContext);
  const { scrollY, scrollYProgress } = useScroll();

  const translateY = useTransform(scrollYProgress, [0.9, 1], [50, -300]);
  const y = useSpring(translateY, { stiffness: 200, damping: 200 });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastYPos) {
      direction.current = -1;
    } else {
      direction.current = 1;
    }

    setLastYPos(latest);
  });

  useEffect(() => {
    frame.update(() => {
      if (x.current <= -100) {
        x.current = 0;
      }

      if (x.current > 0) {
        x.current = -100;
      }

      if (firstText.current && secondText.current) {
        firstText.current.style.transform = `translateX(${x.current}%)`;
        secondText.current.style.transform = `translateX(${x.current}%)`;
      }

      x.current += 0.2 * direction.current;
    }, true);
  }, []);

  return (
    <motion.footer
      className="flex min-h-[100vh] w-full flex-col items-start bg-eerie-black pt-20 text-lighthouse overflow-hidden absolute"
      style={{ y }}
    >
      <span className="block h-2.5 w-2.5 rounded-full bg-white self-center" />
      <span className="mt-20 block rounded-full border border-lighthouse px-3 py-2 text-center text-[.56rem] uppercase opacity-50 self-center">
        Have a project in mind?
      </span>

      <motion.div
        className="relative w-full text-center mt-4 grid grid-cols-[repeat(2,minmax(100vw,max-content))]"
        onMouseOver={() =>
          setHover({ isHovered: true, message: "Email", scaleSize: 6 })
        }
        onMouseLeave={() => setHover({ isHovered: false, message: "" })}
      >
        <motion.a
          href="mailto:sabilillah272@gmail.com"
          className="text-6xl sm:text-7xl md:text-8xl uppercase whitespace-nowrap block"
          ref={firstText}
        >
          Let&#700;s Talk
        </motion.a>

        <motion.a
          href="mailto:sabilillah272@gmail.com"
          className="text-6xl sm:text-7xl md:text-8xl uppercase whitespace-nowrap block"
          ref={secondText}
        >
          Let&#700;s Talk
        </motion.a>
      </motion.div>

      <div className="mt-12 w-full md:mt-28 md:flex md:flex-col">
        <div className="flex mx-10 mb-16 gap-x-4 md:mb-24">
          <div className="w-12 h-12 bg-gray-500 rounded-full shrink-0" />

          <div>
            <div>
              <span className="block font-medium">Sabilillah</span>
              <span className="block text-lighthouse/50 text-xs">
                Web Developer
              </span>
            </div>

            <p className="mt-8 mb-6 text-sm italic">
              I&apos;am dedicated to finding the right solutions for you.
            </p>

            <ActionButton
              afterContent="after:content-['Get_in_touch']"
              className="w-max text-sm font-light"
              text="Get in touch"
              href="mailto:sabilillah272@gmail.com"
              onMouseOver={() =>
                setHover({ isHovered: true, message: "", scaleSize: 4 })
              }
              onMouseLeave={() => setHover({ isHovered: false, message: "" })}
            />
          </div>
        </div>

        <div className="mb-10 grid-cols-2 auto-rows-min grid w-full gap-6 px-10 text-xs uppercase md:flex md:justify-between md:w-full">
          <div className="order-1">
            <span className="block text-[.6rem] text-nickel">
              Developed by:
            </span>
            <span className="block">Sabilillah</span>
          </div>

          <div className="flex flex-col order-3 md:order-2 md:grid md:grid-rows-2 md:grid-cols-4 md:gap-x-7">
            <span className="block text-[.6rem] text-nickel md:col-span-4">
              Socials:
            </span>

            {socials.map((social, index) => (
              <a
                href={social.link}
                className="w-fit"
                target="_blank"
                onMouseOver={() =>
                  setHover({ isHovered: true, message: "", scaleSize: 3 })
                }
                onMouseLeave={() => setHover({ isHovered: false, message: "" })}
                rel="noopener noreferrer"
                key={index}
              >
                {social.socialName}
              </a>
            ))}
          </div>

          <a
            href="#"
            className="order-2 self-end place-self-end row-span-2 md:row-span-1 md:order-3"
            onMouseOver={() =>
              setHover({ isHovered: true, message: "", scaleSize: 3 })
            }
            onMouseLeave={() => setHover({ isHovered: false, message: "" })}
          >
            Back to top
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
