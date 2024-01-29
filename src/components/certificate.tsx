import React, { useRef } from "react";
import CertificateCard from "./certificateCard";
import { certificates } from "@/utils/data";
import { useScroll } from "framer-motion";

export default function Certificate() {
  const certificateContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: certificateContainer,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <h2 className="text-center text-3xl">My Certificate</h2>

      <div className="min-h-[100svh]" ref={certificateContainer}>
        {certificates.map((certificate, index) => {
          const targetScale = 1 - (certificates.length - index) * 0.05;
          return (
            <CertificateCard key={index} certificateDetail={certificate} />
          );
        })}
      </div>
    </>
  );
}
