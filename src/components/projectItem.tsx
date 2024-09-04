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
    <div className="relative border-b border-b-dynamic-black/50 px-4 last:mb-2 first-of-type:border-t first-of-type:border-t-dynamic-black/50 md:px-8">
      <details className="md:hidden [&[open]+div]:max-h-56 [&[open]+div]:pb-2 [&[open]>summary_span:first-of-type]:rotate-[360deg] [&[open]>summary_span:last-of-type]:rotate-[270deg]">
        <summary className="w-full cursor-pointer list-none">
          <CursorHover scaleSize={4} className="my-2 flex w-full items-center justify-between">
            {projectName}

            <div className="relative flex items-center justify-center">
              <span className="h-[0.75px] w-4 rotate-0 bg-dynamic-black transition duration-1000" />
              <span className="absolute h-4 w-[0.75px] rotate-0 bg-dynamic-black transition delay-100 duration-1000" />
            </div>
          </CursorHover>
        </summary>
      </details>

      <div className="max-h-0 overflow-hidden bg-white transition-all duration-1000 md:hidden">
        <CursorHover message="See case" scaleSize={8}>
          <Link href={`/projects/${slug}`} className="relative z-10 mb-2 h-full w-full shrink-0">
            <Image src={imageUrl} alt={projectName} width="1000" height="800" priority />
          </Link>
        </CursorHover>
      </div>

      <div
        className="group hidden w-full py-6 md:block"
        onMouseOver={() => setModal({ active: true, index })}
        onMouseLeave={() => setModal({ active: false, index })}
      >
        <Link href={`/projects/${slug}`} className="block w-full text-4xl transition-all duration-200 group-hover:translate-x-2 group-hover:opacity-50">
          {projectName}
        </Link>
      </div>
    </div>
  );
}
