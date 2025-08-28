import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import { AnimatePresence, hover, motion, useMotionValueEvent, useScroll } from "motion/react";
import ActionButton from "./actionButton";
import CursorHover from "./cursorHover";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { useDimensions } from "@/hooks/useDimensions";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLenis } from "lenis/react";

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

const menuContentVariants = {
  initial: { height: "auto", transform: "rotate(-135deg)" },
  visible: {
    height: "auto",
    transform: "rotate(0deg)",
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
      type: "spring" as const,
      stiffness: 125,
      damping: 10,
    },
  },
  hidden: { height: 0, transform: "rotate(0deg)" },
};

export default function NavigationBar() {
  const [cursorHoverMessage, setCursorHoverMessage] = useState("menu");
  const [showMenu, setShowMenu] = useState(false);
  const [navbarOffset, setNavbarOffset] = useState(0);
  const navbarRef = useRef<HTMLDivElement>(null);
  const { width } = useDimensions();
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis.actualScroll, lenis.direction);

    if (lenis.actualScroll >= 800 && lenis.direction >= 1) {
      setNavbarOffset(navbarRef.current ? -navbarRef.current.offsetHeight : 0);
    } else if (lenis.direction <= -1) {
      setNavbarOffset(0);
    }
  });
  const { scrollYProgress } = useScroll();

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   // console.log("scroll changed to", scrollYProgress.getPrevious(), latest);
  //   if (scrollYProgress.getPrevious()! > latest) {
  //     setNavbarOffset(0);
  //   }
  // });

  // useGSAP(() => {
  //   const st = gsap.timeline({
  //     scrollTrigger: {
  //       start: "top top",
  //       end: document.body.clientHeight,
  //       scrub: true,
  //       onUpdate: (self) => {
  //         if (self.scroll() >= window.innerHeight) {
  //           setNavbarOffset(navbarRef.current ? -navbarRef.current.offsetHeight : 0);
  //         } else {
  //           setNavbarOffset(0);
  //         }
  //       },
  //     },
  //   });
  // });

  useEffect(() => {
    hover(".nav-link", (element) => {
      element.classList.add("after:left-0");
      element.classList.remove("after:right-0");

      return () => {
        element.classList.remove("after:left-0");
        element.classList.add("after:right-0");
      };
    });
  });

  useEffect(() => {
    if (showMenu) {
      setCursorHoverMessage("close");
    } else {
      setCursorHoverMessage("menu");
    }
  }, [showMenu]);

  useEffect(() => {
    if (isMediumScreen && showMenu) {
      setShowMenu(false);
    }
  }, [width]);

  return (
    <>
      <motion.div
        className="fixed top-0 z-20 flex w-full items-center justify-between px-4 py-2 md:px-7 md:py-9 lg:p-14"
        animate={{ y: navbarOffset, animationDuration: 3 }}
        ref={navbarRef}
      >
        <CursorHover message="Home" scaleSize={4}>
          <Link
            href="/"
            className="flex w-18 items-center gap-x-3 overflow-hidden rounded-lg bg-white p-3 transition-all duration-[300ms] sm:w-full sm:bg-transparent"
          >
            <img className="size-12 md:size-16" src="/favicon.ico" alt="Logo" />
            <motion.span
              className="font-figtree text-lighthouse block text-4xl uppercase lg:text-5xl"
              initial="initial"
              animate="fade"
              variants={fadeInVariant}
            >
              Sabilillah
            </motion.span>
          </Link>
        </CursorHover>

        <CursorHover message={cursorHoverMessage} scaleSize={4}>
          <Button size="icon" className="relative flex size-12 cursor-pointer items-center justify-center md:hidden" onClick={() => setShowMenu(!showMenu)}>
            <AnimatePresence>
              {!showMenu && (
                <motion.div
                  key="menu-icon"
                  className="absolute"
                  initial={{ scale: 0, rotate: 360 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 360 }}
                >
                  <MenuIcon key="menu-icon" className="size-8" />
                </motion.div>
              )}
              {showMenu && (
                <motion.div
                  key="x-icon"
                  className="absolute"
                  initial={{ scale: 0, rotate: 360 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 360 }}
                >
                  <XIcon className="size-8" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </CursorHover>

        <div className="hidden gap-x-12 md:flex md:basis-1/2 md:items-center md:justify-between">
          <ul className="text-lighthouse bg-rainstorm ml-auto flex w-auto justify-evenly gap-x-20 rounded-md px-8 py-3 text-xl">
            <li>
              <CursorHover scaleSize={4}>
                <a
                  href="/#works"
                  className="nav-link relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-red-200 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
                >
                  Works
                </a>
              </CursorHover>
            </li>
            <li>
              <CursorHover scaleSize={4}>
                <a
                  href="/#certificates"
                  className="nav-link relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-red-200 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
                >
                  Certificates
                </a>
              </CursorHover>
            </li>
            <li>
              <CursorHover scaleSize={4}>
                <a
                  href="/#skills"
                  className="nav-link relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-red-200 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
                >
                  Skills
                </a>
              </CursorHover>
            </li>
          </ul>

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
      </motion.div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="bg-dire-wolf text-lighthouse fixed inset-0 z-10 origin-[-25%_-5%] overflow-hidden"
            initial="initial"
            animate="visible"
            exit="hidden"
            variants={menuContentVariants}
          >
            <CursorHover scaleSize={4} className="w-full">
              <motion.a
                className="mt-32 block w-full border-t border-t-black/30 px-5.5 py-4 text-2xl font-bold"
                href="#works"
                variants={{
                  visible: { y: 0, opacity: 1, transition: { type: "spring" } },
                  initial: { y: 30, opacity: 0 },
                  hidden: {},
                }}
              >
                Works
              </motion.a>
              <motion.div
                className="block w-full border-t border-t-black/30 px-5.5 py-4"
                variants={{
                  visible: { y: 0, opacity: 1, transition: { type: "spring" } },
                  initial: { y: 30, opacity: 0 },
                  hidden: {},
                }}
              >
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="flex items-center justify-between p-0 text-2xl font-bold hover:no-underline">Certificates</AccordionTrigger>
                    <AccordionContent className="font-figtree mt-4 pl-4 text-xl font-medium">
                      <ul className="space-y-4">
                        <li>
                          <a href="#">JavaScript Expert</a>
                        </li>
                        <li>
                          <a href="#">Responsive Design</a>
                        </li>
                        <li>
                          <a href="#">UX Design</a>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
              <motion.a
                className="block w-full border-y border-y-black/30 px-5.5 py-4 text-2xl font-bold"
                href="#"
                variants={{
                  visible: { y: 0, opacity: 1, transition: { type: "spring" } },
                  initial: { y: 30, opacity: 0 },
                  hidden: {},
                }}
              >
                Skills
              </motion.a>
            </CursorHover>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
