import { motion, useScroll, useTransform } from "framer-motion";
import { useContext, useRef } from "react";
import type { Certificate } from "@/utils/data";
import { HoverContext } from "@/context/hoverContext";

type Props = {
  certificateDetail: Certificate;
};

export default function CertificateCard({ certificateDetail }: Props) {
  const certificateImage = useRef(null);
  const imageContainer = useRef(null);
  const { setHover } = useContext(HoverContext);

  const { scrollYProgress } = useScroll({
    target: imageContainer,
    offset: ["start end", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  scrollYProgress.on("change", (latest) => {
    console.log(latest);
  });

  return (
    <div className="h-auto flex items-center justify-center first:mt-32 sm:first:mt-72 sticky top-1/2 px-3 -translate-y-1/2" ref={imageContainer}>
      <a href={certificateDetail.verificationUrl} title={certificateDetail.title} target="_blank" rel="noopener noreferrer" className="block">
        <motion.img
          src={certificateDetail.imageUrl}
          alt={certificateDetail.title}
          className="w-full rounded shadow-md max-h-screen md:w-auto md:max-w-screen-md"
          width={1000}
          height={800}
          ref={certificateImage}
          initial={{ scale: 0.8 }}
          style={{ scale: imageScale }}
          onMouseOver={() => setHover({ isHovered: true, message: "Verify", scaleSize: 8 })}
          onMouseLeave={() => setHover({ isHovered: false, message: "" })}
        />
      </a>
    </div>
  );
}
