import Image from "next/image";
import { useContext, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { CardDetail } from "@/utils/data";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useMousePosition } from "@/hooks/useMousePosition";
import { HoverContext } from "@/context/hoverContext";

type Props = {
  detail: CardDetail;
};

export default function FeatureCard({ detail }: Props) {
  const wrapper = useRef(null);
  const image = useRef(null);
  const isMedium = useMediaQuery("(min-width: 768px)");
  const { setHover } = useContext(HoverContext);
  const { x, y } = useMousePosition();

  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const translateY = useSpring(imageY, { stiffness: 100, damping: 70 });

  return (
    <div
      className="h-[80svh] min-h-[280px] overflow-hidden relative w-full md:h-[100svh] md:overflow-visible [clip-path:polygon(0_0,0_100%,100%_100%,100%_0)]"
      ref={wrapper}
    >
      <div className="hidden md:block md:absolute md:top-2 md:left-2 z-10 md:w-1/2 bg-white bg-clip-text text-transparent [mix-blend-mode:difference] pointer-events-none">
        <h3 className="text-2xl font-bold leading-none">{detail.title}</h3>
        <p className="font-light leading-4 text-sm mt-3">
          {detail.description}
        </p>
      </div>

      <motion.div className="min-h-full relative md:after:content-[''] md:after:absolute md:after:top-0 md:after:w-full md:after:h-full md:after:bg-gradient-to-b md:after:from-dynamic-black">
        {isMedium ? (
          <Image src={detail.images.desktop} alt="" fill priority />
        ) : (
          <motion.img
            className="w-full h-full"
            src={`https://picsum.photos/id/${detail.images.backgroundId}/480/987`}
            width={1000}
            height={800}
            alt=""
            style={{ y: translateY }}
          />
        )}
      </motion.div>

      <div className="w-11/12 rounded shadow-lg mx-auto overflow-hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-auto md:right-16 sm:w-4/5 md:h-4/5 md:w-auto md:fixed">
        <motion.span
          className="absolute top-0 w-full h-full bg-dynamic-black/70 text-center text-lighthouse flex justify-center items-center flex-col"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          onMouseOver={() =>
            setHover({ isHovered: true, message: "", scaleSize: 6 })
          }
          onMouseLeave={() => setHover({ isHovered: false, message: "" })}
        >
          <h3 className="text-2xl font-bold leading-none">{detail.title}</h3>
          <p className="font-light leading-4 text-sm mt-3">
            {detail.description}
          </p>
        </motion.span>

        <Image
          className="w-full h-full object-cover"
          src={isMedium ? detail.images.mobile : detail.images.desktop}
          width={1000}
          height={800}
          alt=""
          ref={image}
          priority
        />
      </div>
    </div>
  );
}
