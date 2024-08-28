import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Images } from "@/utils/data";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Props = {
  screenshot: Images;
};

export default function ScreenshotCard({ screenshot }: Props) {
  const wrapper = useRef(null);
  const image = useRef(null);
  const isMedium = useMediaQuery("(min-width: 768px)");

  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y = useSpring(imageY, { stiffness: 50, damping: 100 });

  return (
    <div
      className="min-h-[280px] max-h-[380px] md:max-h-min overflow-hidden relative w-full md:overflow-visible [clip-path:polygon(0_0,0_100%,100%_100%,100%_0)]"
      ref={wrapper}
    >
      <motion.div className="min-h-full relative flex items-center justify-center p-8">
        {isMedium && (
          <Image
            className="h-auto w-7/12 mr-auto relative z-10 ml-20 lg:ml-32"
            src={screenshot.devices.desktop}
            alt="Screenshot"
            height={1000}
            width={800}
            priority
          />
        )}
        <motion.img
          className="absolute w-full top-0"
          src={`https://picsum.photos/id/${screenshot.devices.backgroundId}/${isMedium ? "1440/1056" : "480/987"}`}
          width={1000}
          height={800}
          alt=""
          style={{ y }}
        />
      </motion.div>

      <div className="w-11/12 rounded shadow-lg mx-auto overflow-hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-auto md:right-16 sm:w-4/5 md:h-3/5 md:w-auto md:fixed">
        <Image
          className="w-full h-full object-cover"
          src={isMedium ? screenshot.devices.mobile : screenshot.devices.desktop}
          width={1000}
          height={800}
          alt="Screenshot"
          ref={image}
          priority
        />
      </div>
    </div>
  );
}
