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
      className="relative max-h-[380px] min-h-[280px] w-full overflow-hidden [clip-path:polygon(0_0,0_100%,100%_100%,100%_0)] md:max-h-min md:overflow-visible"
      ref={wrapper}
    >
      <motion.div className="relative flex min-h-full items-center justify-center p-8">
        {isMedium && (
          <Image
            className="relative z-10 mr-auto ml-20 h-auto w-7/12 lg:ml-32"
            src={screenshot.devices.desktop}
            alt="Screenshot"
            height={1000}
            width={800}
            priority
          />
        )}
        <motion.img
          className="absolute top-0 w-full"
          src={`https://picsum.photos/id/${screenshot.devices.backgroundId}/${isMedium ? "1440/1056" : "480/987"}`}
          width={1000}
          height={800}
          alt=""
          style={{ y }}
        />
      </motion.div>

      <div className="absolute top-1/2 left-1/2 mx-auto w-11/12 -translate-y-1/2 -translate-x-1/2 overflow-hidden rounded shadow-lg sm:w-4/5 md:fixed md:left-auto md:right-16 md:h-3/5 md:w-auto md:-translate-x-0">
        <Image
          className="h-full w-full object-cover"
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
