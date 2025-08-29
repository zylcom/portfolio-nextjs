import Image from "next/image";
import { motion } from "motion/react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const fadeInVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, type: "spring" as const, stiffness: 125 },
  },
};

const imagesMetadata = [
  {
    className: "left-0 z-[3]",
    src: "https://images.unsplash.com/photo-1751207357973-d05855774f24?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "",
  },
  {
    className: "left-[calc((100%_-_13rem)/3)] z-[2] sm:left-[calc((100%_-_16.5rem)/3)] lg:left-[calc((100%_-_26rem)/3)]",
    src: "https://images.unsplash.com/photo-1607859342232-b3d5de765bdf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "",
  },
  {
    className: "left-[calc((100%_-_13rem)*2/3)] z-[1] sm:left-[calc((100%_-_16.5rem)*2/3)] lg:left-[calc((100%_-_26rem)*2/3)]",
    src: "https://images.unsplash.com/photo-1606383069718-104a95938112?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    alt: "",
  },
  {
    className: "right-0",
    src: "https://images.unsplash.com/photo-1746964878331-f816e26b332c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcxfHx8ZW58MHx8fHx8",
    alt: "",
  },
];

const delay = 3;

export default function HeroSection() {
  const imageWrapper = useRef<HTMLDivElement | null>(null);
  const heroWrapper = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<HTMLImageElement[]>([]);

  const setItemRef = (element: HTMLImageElement | null, key: number) => {
    if (element) {
      imageRefs.current[key] = element;
    }
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
      });
      // const st = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: heroWrapper.current,
      //     start: "top top",
      //     end: "+=600",
      //     scrub: true,
      //     onUpdate: (self) => {
      //       // console.log("Scroll Position:", self.scroll());
      //       console.log(imageRefs.current[1].getBoundingClientRect().width);
      //       // console.log(imageRefs.current[1].getBoundingClientRect().left);
      //       // console.log(imageRefs.current[2].getBoundingClientRect().left);
      //       // console.log(imageRefs.current[3].getBoundingClientRect().left);

      //       if (self.scroll() >= 1) {
      //         heroWrapper.current?.classList.remove("overflow-hidden");
      //       } else {
      //         heroWrapper.current?.classList.add("overflow-hidden");
      //       }

      //       if (self.scroll() >= 100) {
      //         tl.pause();
      //       } else {
      //         tl.resume();
      //       }
      //     },
      //   },
      // });

      // st.to(
      //   imageRefs.current[0],
      //   {
      //     y: 1000,
      //     x: 0 - imageRefs.current[0].getBoundingClientRect().left + (window.innerWidth - imageRefs.current[0].getBoundingClientRect().width * 4) / 5,
      //     filter: "none",
      //     rotate: 0,
      //     maxWidth: window.innerWidth / 4,
      //     scale: 1,
      //   },
      //   0,
      // )
      //   .to(
      //     imageRefs.current[1],
      //     {
      //       y: 1000,
      //       x:
      //         0 -
      //         imageRefs.current[1].getBoundingClientRect().left +
      //         imageRefs.current[1].getBoundingClientRect().width +
      //         ((window.innerWidth - imageRefs.current[0].getBoundingClientRect().width * 4) / 5) * 2,
      //       filter: "none",
      //       rotate: 0,
      //       maxWidth: window.innerWidth / 4,
      //       scale: 1,
      //       delay: 0.02,
      //     },
      //     0,
      //   )
      //   .to(
      //     imageRefs.current[2],
      //     {
      //       y: 1000,
      //       x:
      //         0 -
      //         imageRefs.current[2].getBoundingClientRect().left +
      //         imageRefs.current[2].getBoundingClientRect().width * 2 +
      //         ((window.innerWidth - imageRefs.current[0].getBoundingClientRect().width * 4) / 5) * 3,
      //       filter: "none",
      //       rotate: 0,
      //       maxWidth: window.innerWidth / 4,
      //       scale: 1,
      //       delay: 0.04,
      //     },
      //     0,
      //   )
      //   .to(
      //     imageRefs.current[3],
      //     {
      //       y: 1000,
      //       x:
      //         0 -
      //         imageRefs.current[3].getBoundingClientRect().left +
      //         imageRefs.current[3].getBoundingClientRect().width * 3 +
      //         ((window.innerWidth - imageRefs.current[0].getBoundingClientRect().width * 4) / 5) * 4,
      //       filter: "none",
      //       rotate: 0,
      //       maxWidth: window.innerWidth / 4,
      //       scale: 1,
      //       delay: 0.06,
      //     },
      //     0,
      //   );

      tl.to(imageRefs.current[0], { filter: "none" }, 0)
        .to(imageRefs.current[1], { x: 480, rotate: 8, delay }, 0)
        .to(imageRefs.current[1], { zIndex: 4, x: 0, rotate: 0, filter: "none" }, 3.2)
        .to(imageRefs.current[0], { scale: 0.8 }, 3)
        .to(imageRefs.current[2], { scale: 0.8 }, 3)
        .to(imageRefs.current[3], { scale: 0.8 }, 3)
        .to(imageRefs.current[0], { filter: "blur(4px)", scale: 1 }, 3.2)
        .to(imageRefs.current[2], { scale: 1 }, 3.2)
        .to(imageRefs.current[3], { scale: 1 }, 3.2)

        .to(imageRefs.current[2], { x: 480, rotate: 8, delay }, 3)
        .to(imageRefs.current[2], { zIndex: 5 }, 6)
        .to(imageRefs.current[2], { x: 0, rotate: 0, filter: "none" }, 6.2)
        .to(imageRefs.current[1], { scale: 0.8 }, 6)
        .to(imageRefs.current[0], { scale: 0.8 }, 6)
        .to(imageRefs.current[3], { scale: 0.8 }, 6)
        .to(imageRefs.current[1], { filter: "blur(4px)", scale: 1 }, 6.2)
        .to(imageRefs.current[0], { scale: 1 }, 6.2)
        .to(imageRefs.current[3], { scale: 1 }, 6.2)

        .to(imageRefs.current[3], { x: 480, rotate: 8, delay }, 6)
        .to(imageRefs.current[3], { zIndex: 6 }, 9)
        .to(imageRefs.current[3], { x: 0, rotate: 0, filter: "none" }, 9.2)
        .to(imageRefs.current[2], { scale: 0.8 }, 9)
        .to(imageRefs.current[0], { scale: 0.8 }, 9)
        .to(imageRefs.current[1], { scale: 0.8 }, 9)
        .to(imageRefs.current[2], { filter: "blur(4px)", scale: 1 }, 9.2)
        .to(imageRefs.current[0], { scale: 1 }, 9.2)
        .to(imageRefs.current[1], { scale: 1 }, 9.2)

        .to(imageRefs.current[2], { x: -480, rotate: -8, delay }, 9)
        .to(imageRefs.current[2], { zIndex: 7 }, 12)
        .to(imageRefs.current[2], { x: 0, rotate: 0, filter: "none" }, 12.2)
        .to(imageRefs.current[3], { scale: 0.8 }, 12)
        .to(imageRefs.current[0], { scale: 0.8 }, 12)
        .to(imageRefs.current[1], { scale: 0.8 }, 12)
        .to(imageRefs.current[3], { filter: "blur(4px)", scale: 1 }, 12.2)
        .to(imageRefs.current[0], { scale: 1 }, 12.2)
        .to(imageRefs.current[1], { scale: 1 }, 12.2)

        .to(imageRefs.current[1], { x: -480, rotate: -8, delay }, 12)
        .to(imageRefs.current[1], { zIndex: 8 }, 14.9)
        .to(imageRefs.current[1], { x: 0, rotate: 0, filter: "none" }, 15.2)
        .to(imageRefs.current[2], { scale: 0.8 }, 15)
        .to(imageRefs.current[0], { scale: 0.8 }, 15)
        .to(imageRefs.current[3], { scale: 0.8 }, 15)
        .to(imageRefs.current[2], { filter: "blur(4px)", scale: 1 }, 15.2)
        .to(imageRefs.current[0], { scale: 1 }, 15.2)
        .to(imageRefs.current[3], { scale: 1 }, 15.2)

        .to(imageRefs.current[0], { x: -480, rotate: -8, delay }, 15)
        .to(imageRefs.current[0], { zIndex: 9 }, 17.9)
        .to(imageRefs.current[0], { x: 0, rotate: 0, filter: "none" }, 18.2)
        .to(imageRefs.current[1], { scale: 0.8 }, 18)
        .to(imageRefs.current[2], { scale: 0.8 }, 18)
        .to(imageRefs.current[3], { scale: 0.8 }, 18)
        .to(imageRefs.current[1], { filter: "blur(4px)", scale: 1 }, 18.2)
        .to(imageRefs.current[2], { scale: 1 }, 18.2)
        .to(imageRefs.current[3], { scale: 1 }, 18.2);
    },
    { scope: heroWrapper },
  );

  return (
    <div
      className="text-lighthouse font-figtree hero-wrapper bg-rainstorm hero-wrapper h-auto overflow-hidden px-3.5 pt-52 sm:pb-40 lg:px-14 2xl:px-24"
      ref={heroWrapper}
    >
      <div className="m-auto flex max-w-[calc(var(--spacing)*495)] flex-col lg:flex-row">
        <div className="flex w-full flex-col justify-between">
          <div className="uppercase">
            <motion.div
              className="flex text-6xl font-black lg:text-7xl xl:text-9xl"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                initial: {},
              }}
              initial="initial"
              animate="visible"
            >
              <motion.div variants={fadeInVariants}>g</motion.div>
              <motion.div variants={fadeInVariants}>e</motion.div>
              <motion.div variants={fadeInVariants}>n</motion.div>
              <motion.div variants={fadeInVariants}>u</motion.div>
              <motion.div variants={fadeInVariants}>i</motion.div>
              <motion.div variants={fadeInVariants}>n</motion.div>
              <motion.div variants={fadeInVariants}>e</motion.div>
              <motion.div variants={fadeInVariants}>.</motion.div>
            </motion.div>
            <motion.div
              className="flex text-6xl font-black lg:text-7xl xl:text-9xl"
              variants={{
                visible: { transition: { delayChildren: 0.3, staggerChildren: 0.1 } },
                initial: {},
              }}
              initial="initial"
              animate="visible"
            >
              <motion.div variants={fadeInVariants}>i</motion.div>
              <motion.div variants={fadeInVariants}>m</motion.div>
              <motion.div variants={fadeInVariants}>p</motion.div>
              <motion.div variants={fadeInVariants}>a</motion.div>
              <motion.div variants={fadeInVariants}>c</motion.div>
              <motion.div variants={fadeInVariants}>t</motion.div>
              <motion.div variants={fadeInVariants}>.</motion.div>
            </motion.div>
          </div>
          <p className="pt-14 pb-5.5 text-left text-xl sm:max-w-xl sm:pt-0">
            As a web developer, I help brands turn ideas into impactful digital experiences — building solutions that are fast, intuitive, and tailored to their
            needs.
          </p>
        </div>
        <div className="relative flex min-h-96 w-full justify-evenly md:min-h-[36rem] lg:min-w-[38rem]" ref={imageWrapper}>
          {imagesMetadata.map((metadata, index) => (
            <Image
              key={index}
              className={cn(
                "absolute h-80 max-h-[36rem] w-52 max-w-80 rounded-3xl object-cover object-center blur-xs after:content-[''] sm:h-[30rem] sm:w-[16.5rem] lg:h-[44rem] lg:max-h-[44rem] lg:w-[26rem] lg:max-w-[26rem]",
                metadata.className,
              )}
              src={metadata.src}
              alt={metadata.alt}
              ref={(el) => setItemRef(el, index)}
              width={576}
              height={208}
              priority
            />
          ))}
        </div>
      </div>
      {/* <div className="grid grid-cols-1 items-center gap-8 p-3 px-5 sm:grid-cols-2">
        <Image src="/hero-image.png" alt="" width="500" height="500" className="mx-auto hidden sm:order-2 sm:block md:w-[50vh]" priority />

        <div className="mr-16 sm:order-1">
          <h2 className="text-justify text-3xl leading-7 font-bold lg:text-5xl">Hello World!</h2>

          <p className="mt-7 text-sm leading-4 md:text-base md:leading-4 lg:text-lg">
            I am Sabilillah a Front-end Developer from Jakarta, Indonesia. I&apos;m currently is available for hire as a Web Developer.
          </p>

          <CursorHover scaleSize={4} className="ml-auto">
            <ActionButton
              afterContent="after:content-['Explore_My_CV']"
              text="Explore My CV"
              className="border-lighthouse bg-eerie-black mt-5 hidden w-fit border text-xs uppercase sm:block"
              href="/cv"
            />
          </CursorHover>
        </div>
      </div>

      <div className="flex flex-row-reverse items-center justify-between p-3 sm:flex-row">
        <div className="hidden gap-x-16 sm:flex">
          {socials.map((social, index) => (
            <CursorHover scaleSize={3} key={index}>
              <a className="text-xs uppercase" href={social.link} target="_blank" rel="noopener noreferrer">
                {social.socialName}
              </a>
            </CursorHover>
          ))}
        </div>

        <span className="text-xs">&copy; {new Date().getFullYear()}</span>
      </div> */}
    </div>
  );
}
