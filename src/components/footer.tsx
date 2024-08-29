import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ActionButton from "./actionButton";
import { socials } from "@/utils/data";
import CursorHover from "./cursorHover";

export default function Footer() {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "start start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.footer className="bg-eerie-black" ref={target}>
      <motion.div className="flex min-h-[100vh] w-full flex-col bg-eerie-black items-start pt-20 text-lighthouse overflow-hidden" style={{ y: translateY }}>
        <span className="block h-2.5 w-2.5 rounded-full bg-white self-center" />
        <span className="mt-20 block rounded-full border border-lighthouse px-8 py-3 text-center text-xs uppercase self-center">Have a project in mind?</span>

        <CursorHover message="Email" scaleSize={6}>
          <motion.div className="relative w-full text-center my-16 grid grid-cols-[repeat(2,minmax(100vw,max-content))]">
            {[0, 1].map((i) => (
              <motion.div className="relative flex items-center justify-around animate-marquee-left" key={i}>
                <Link href="mailto:sabilillah272@gmail.com" className="text-6xl sm:text-7xl md:text-8xl uppercase whitespace-nowrap md:block hidden">
                  Let&#700;s Talk
                </Link>

                <Link href="mailto:sabilillah272@gmail.com" className="text-6xl sm:text-7xl md:text-8xl uppercase whitespace-nowrap block">
                  Let&#700;s Talk
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </CursorHover>

        <div className="w-full md:mt-28 md:flex md:flex-col">
          <div className="flex mx-10 mb-16 gap-x-4 md:mb-24">
            <div className="w-12 h-12 bg-gray-500 rounded-full shrink-0 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dk9bcf16t/image/upload/q_auto/pasphoto-sabilillah_ncgspp.jpg"
                className="-mt-2"
                alt="Sabilillah"
                width={200}
                height={200}
                priority
              />
            </div>

            <div>
              <div>
                <span className="block font-medium">Sabilillah</span>
                <span className="block text-lighthouse/50 text-xs">Web Developer</span>
              </div>

              <p className="mt-8 mb-6 text-sm italic">I&apos;am dedicated to finding the right solutions for you.</p>

              <CursorHover scaleSize={4}>
                <ActionButton
                  afterContent="after:content-['Get_in_touch']"
                  className="w-max text-sm font-light"
                  text="Get in touch"
                  href="mailto:sabilillah272@gmail.com"
                />
              </CursorHover>
            </div>
          </div>

          <div className="mb-10 grid-cols-2 auto-rows-min grid w-full gap-6 px-10 text-xs uppercase md:flex md:justify-between md:w-full">
            <div className="order-1">
              <span className="block text-[.6rem] text-nickel">Developed by:</span>

              <span className="block">Sabilillah</span>
            </div>

            <div className="flex flex-col order-3 md:order-2 md:grid md:grid-rows-2 md:grid-cols-4 md:gap-x-7">
              <span className="block text-[.6rem] text-nickel md:col-span-4">Socials:</span>

              {socials.map((social, index) => (
                <CursorHover scaleSize={3} key={index}>
                  <a href={social.link} className="w-fit" target="_blank" rel="noopener noreferrer">
                    {social.socialName}
                  </a>
                </CursorHover>
              ))}
            </div>

            <CursorHover scaleSize={3}>
              <a href="#" className="order-2 self-end place-self-end row-span-2 md:row-span-1 md:order-3">
                Back to top
              </a>
            </CursorHover>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
