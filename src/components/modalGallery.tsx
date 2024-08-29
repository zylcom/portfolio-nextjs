import { motion } from "framer-motion";
import { Project } from "@/utils/data";
import { Modal } from "./project";
import Image from "next/image";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useContext, useEffect } from "react";
import { HoverContext } from "@/context/hoverContext";

type Props = {
  modal: Modal;
  projects: Project[];
};

const scaleAnimation = {
  initial: { scale: 0, borderRadius: "100%" },
  enter: {
    scale: 1,
    borderRadius: "0%",
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1],
      borderRadius: { type: "tween" },
    },
  },
  closed: {
    scale: 0,
    borderRadius: "100%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function ModalGallery({ modal, projects }: Props) {
  const { x, y } = useMousePosition(-250, -200, {
    stiffness: 500,
    damping: 100,
  });
  const { setHover } = useContext(HoverContext);

  useEffect(() => {
    setHover({ isHovered: modal.active, message: "See Case", scaleSize: 6 });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal.active]);

  return (
    <>
      <motion.div
        className="fixed z-10 top-0 left-0 h-[400px] w-[500px] overflow-hidden pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={modal.active ? "enter" : "closed"}
        style={{ x, y }}
      >
        <motion.div className="absolute w-full h-full transition-[top] duration-300 ease-in-out" style={{ top: modal.index * -100 + "%" }}>
          {projects.map((project) => (
            <div className="flex justify-center items-center w-full h-full bg-dynamic-black px-4" key={project.id}>
              <Image className="w-full" src={project.coverImageUrl} height={1000} width={800} alt={project.name} priority />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
