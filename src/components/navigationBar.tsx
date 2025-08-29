import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import { AnimatePresence, hover, motion } from "motion/react";
import ActionButton from "./actionButton";
import CursorHover from "./cursorHover";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { useLenis } from "lenis/react";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";

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
  const logoWrapper = useRef<HTMLAnchorElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis((lenis) => {
    if (lenis.actualScroll >= 800 && lenis.direction >= 1) {
      setNavbarOffset(navbarRef.current ? -navbarRef.current.offsetHeight : 0);
    } else if (lenis.actualScroll > 10 && (lenis.direction <= -1 || lenis.direction >= 1)) {
      setNavbarOffset(-50);

      if (logoWrapper.current) {
        logoWrapper.current.style = "width: 88px;";
      }
    } else if (lenis.actualScroll < 10) {
      setNavbarOffset(0);

      if (logoWrapper.current) {
        logoWrapper.current.style = "width: 360px;";
      }
    }
  });

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
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      setCursorHoverMessage("menu");
    }
  }, [showMenu]);

  return (
    <>
      <motion.div
        className="fixed top-0 z-30 flex w-full items-center justify-between px-4 py-14 md:px-7"
        animate={{ y: navbarOffset, animationDuration: 3 }}
        ref={navbarRef}
      >
        <CursorHover message="Home" scaleSize={4}>
          <Link
            href="/"
            className="flex max-w-[88px] items-center gap-x-3 overflow-hidden rounded-lg bg-white p-3 transition-all duration-[300ms] sm:max-w-none sm:bg-transparent md:w-auto"
            ref={logoWrapper}
          >
            <Image className="size-16" width={32} height={32} src="/favicon.ico" alt="Logo" />
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
                <Link
                  href="#work"
                  className="nav-link relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-red-200 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
                >
                  Work
                </Link>
              </CursorHover>
            </li>
            <li>
              <CursorHover scaleSize={4}>
                <Link
                  href="#certificates"
                  className="nav-link relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-red-200 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
                >
                  Certificates
                </Link>
              </CursorHover>
            </li>
            <li>
              <CursorHover scaleSize={4}>
                <Link
                  href="#skills"
                  className="nav-link relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-red-200 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
                >
                  Skills
                </Link>
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
            className="bg-dire-wolf text-lighthouse fixed inset-0 z-20 origin-[-25%_-5%] overflow-hidden md:hidden"
            initial="initial"
            animate="visible"
            exit="hidden"
            variants={menuContentVariants}
          >
            <ScrollArea className="h-screen">
              <CursorHover scaleSize={4} className="w-full">
                <motion.a
                  className="mt-44 block w-full border-t border-t-black/30 px-5.5 py-4 text-2xl font-bold"
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
                  className="block w-full border-t border-t-black/30"
                  variants={{
                    visible: { y: 0, opacity: 1, transition: { type: "spring" } },
                    initial: { y: 30, opacity: 0 },
                    hidden: {},
                  }}
                >
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="flex cursor-pointer items-center justify-between p-0 px-5.5 py-4 text-2xl font-bold hover:no-underline">
                        Certificates
                      </AccordionTrigger>
                      <AccordionContent className="font-figtree mt-4 pl-12 text-xl font-medium">
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
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
