import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import CursorHover from "./cursorHover";
import type { Certificate } from "@/utils/data";

type Props = {
  certificateDetail: Certificate;
};

export default function CertificateCard({ certificateDetail }: Props) {
  const certificateImage = useRef(null);
  const imageContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageContainer,
    offset: ["start end", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div className="sticky top-1/2 flex h-auto -translate-y-1/2 items-center justify-center px-3 first:mt-32 sm:first:mt-72" ref={imageContainer}>
      <a href={certificateDetail.verificationUrl} title={certificateDetail.title} target="_blank" rel="noopener noreferrer" className="block">
        <CursorHover message="Verify" scaleSize={8}>
          <motion.img
            src={certificateDetail.imageUrl}
            alt={certificateDetail.title}
            className="max-h-screen w-full rounded shadow-md md:w-auto md:max-w-screen-md"
            width={1000}
            height={800}
            ref={certificateImage}
            initial={{ scale: 0.8 }}
            style={{ scale: imageScale }}
          />
        </CursorHover>
      </a>
    </div>
  );
}
