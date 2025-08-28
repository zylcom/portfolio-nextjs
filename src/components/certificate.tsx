import React, { useRef } from "react";
import CertificateCard from "./certificateCard";
import { certificates } from "@/utils/data";

export default function Certificate() {
  const certificateContainer = useRef(null);

  return (
    <>
      <h2 className="text-center text-3xl" id="certificates">
        My Certificate
      </h2>

      <div className="relative" ref={certificateContainer}>
        {certificates.map((certificate, index) => {
          return <CertificateCard key={index} certificateDetail={certificate} />;
        })}
      </div>
    </>
  );
}
