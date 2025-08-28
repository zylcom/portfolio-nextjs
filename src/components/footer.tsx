import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
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
      <motion.div className="bg-eerie-black text-lighthouse flex min-h-[100vh] w-full flex-col items-start overflow-hidden pt-20" style={{ y: translateY }}>
        <span className="block h-2.5 w-2.5 self-center rounded-full bg-white" />
        <span className="border-lighthouse mt-20 block self-center rounded-full border px-8 py-3 text-center text-xs uppercase">Have a project in mind?</span>

        <CursorHover message="Email" scaleSize={6}>
          <motion.div className="relative my-16 grid w-full grid-cols-[repeat(2,minmax(100vw,max-content))] text-center">
            {[0, 1].map((i) => (
              <motion.div className="animate-marquee-left relative flex items-center justify-around" key={i}>
                <Link href="mailto:sabilillah272@gmail.com" className="hidden text-6xl whitespace-nowrap uppercase sm:text-7xl md:block md:text-8xl">
                  Let&#700;s Talk
                </Link>

                <Link href="mailto:sabilillah272@gmail.com" className="block text-6xl whitespace-nowrap uppercase sm:text-7xl md:text-8xl">
                  Let&#700;s Talk
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </CursorHover>

        <div className="w-full md:mt-28 md:flex md:flex-col">
          <div className="mx-10 mb-16 flex gap-x-4 md:mb-24">
            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gray-500">
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
                <span className="text-lighthouse/50 block text-xs">Web Developer</span>
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

          <div className="mb-10 grid w-full auto-rows-min grid-cols-2 gap-6 px-10 text-xs uppercase md:flex md:w-full md:justify-between">
            <div className="order-1">
              <span className="text-nickel block text-[.6rem]">Developed by:</span>

              <span className="block">Sabilillah</span>
            </div>

            <div className="order-3 flex flex-col md:order-2 md:grid md:grid-cols-4 md:grid-rows-2 md:gap-x-7">
              <span className="text-nickel block text-[.6rem] md:col-span-4">Socials:</span>

              {socials.map((social, index) => (
                <CursorHover scaleSize={3} key={index}>
                  <a href={social.link} className="w-fit" target="_blank" rel="noopener noreferrer">
                    {social.socialName}
                  </a>
                </CursorHover>
              ))}
            </div>

            <CursorHover scaleSize={3}>
              <a href="#" className="order-2 row-span-2 place-self-end self-end md:order-3 md:row-span-1">
                Back to top
              </a>
            </CursorHover>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
