import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { Modal } from "./project";
import CursorHover from "./cursorHover";

type ProjectItemProps = {
  projectName: string;
  imageUrl: string;
  index: number;
  slug: string;
  setModal: Dispatch<SetStateAction<Modal>>;
};

export default function ProjectItem({ projectName, imageUrl, index, slug, setModal }: ProjectItemProps) {
  return (
    <div className="px-4 relative border-b border-b-dynamic-black/50 first-of-type:border-t first-of-type:border-t-dynamic-black/50 last:mb-2 md:px-8">
      <details className="[&[open]+div]:max-h-56 [&[open]+div]:pb-2 [&[open]>summary_span:first-of-type]:rotate-[360deg] [&[open]>summary_span:last-of-type]:rotate-[270deg] md:hidden">
        <CursorHover scaleSize={4}>
          <summary className="list-none flex justify-between items-center my-2 cursor-pointer">
            {projectName}

            <div className="relative flex items-center justify-center">
              <span className="h-[0.75px] w-4 bg-dynamic-black transition duration-1000 rotate-0" />
              <span className="absolute h-4 w-[0.75px] bg-dynamic-black transition delay-100 duration-1000 rotate-0" />
            </div>
          </summary>
        </CursorHover>
      </details>

      <div className="max-h-0 transition-all duration-1000 bg-white overflow-hidden md:hidden">
        <CursorHover message="See case" scaleSize={8}>
          <Link href={`/projects/${slug}`} className="relative z-10 h-full w-full shrink-0 mb-2">
            <Image src={imageUrl} alt={projectName} width="1000" height="800" priority />
          </Link>
        </CursorHover>
      </div>

      <div
        className="hidden py-6 group w-full md:block"
        onMouseOver={() => setModal({ active: true, index })}
        onMouseLeave={() => setModal({ active: false, index })}
      >
        <Link href={`/projects/${slug}`} className="text-4xl block w-full transition-all duration-200 group-hover:translate-x-2 group-hover:opacity-50">
          {projectName}
        </Link>
      </div>
    </div>
  );
}
