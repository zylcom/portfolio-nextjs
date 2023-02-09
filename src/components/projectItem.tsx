import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useEffect, useRef, useState } from "react";

type ProjectItemProps = {
  projectName: string;
  imageUrl: string;
  slug: string;
};

export default function ProjectItem({
  projectName,
  imageUrl,
  slug,
}: ProjectItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const imageWrapper = useRef<HTMLDivElement>(null!);
  const mouseEventTimeoutId = useRef<ReturnType<typeof setTimeout>>();

  function handleClick() {
    let timeoutId: ReturnType<typeof setTimeout>;

    isOpen
      ? (imageWrapper.current.style.maxHeight = "")
      : (imageWrapper.current.style.maxHeight =
          imageWrapper.current.scrollHeight + "px");

    setIsOpen(!isOpen);

    if (isOpen) {
      timeoutId = setTimeout(() => {
        imageWrapper.current.classList.remove("flex", "justify-center");
      }, 1000);

      clearTimeout(timeoutId);
    } else {
      imageWrapper.current.classList.add("flex", "justify-center");
    }
  }

  function handleMouseEnter(event: MouseEvent<HTMLAnchorElement>) {
    const nextSibling = event.currentTarget.nextElementSibling!;

    mouseEventTimeoutId.current = setTimeout(() => {
      nextSibling.classList.remove(
        "transition-all",
        "duration-1000",
        "lg:duration-300"
      );
    }, 300);
  }

  function handleMouseMove(event: MouseEvent<HTMLAnchorElement>) {
    const nextSibling = event.currentTarget.nextElementSibling! as HTMLElement;

    nextSibling.style.transform = `translate3d(${
      event.pageX * 0.1 - 100 + "px"
    }, 0px, 0px)`;
  }

  function handleMouseLeave(event: MouseEvent<HTMLAnchorElement>) {
    const nextSibling = event.currentTarget.nextElementSibling! as HTMLElement;

    clearTimeout(mouseEventTimeoutId.current);

    nextSibling.classList.add(
      "transition-all",
      "duration-1000",
      "lg:duration-300"
    );
    nextSibling.style.transform = "none";
  }

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    function removeTransition() {
      imageWrapper.current.classList.remove(
        "transition-all",
        "duration-1000",
        "lg:duration-300"
      );

      timeoutId = setTimeout(() => {
        imageWrapper.current.classList.add(
          "transition-all",
          "duration-1000",
          "lg:duration-300"
        );
      }, 400);

      if (window.innerWidth >= 1024 && isOpen) {
        imageWrapper.current.style.maxHeight = "";
      }

      if (window.innerWidth < 1024 && isOpen) {
        imageWrapper.current.style.maxHeight =
          imageWrapper.current.scrollHeight + "px";
      }
    }

    window.addEventListener("resize", removeTransition);

    return () => {
      window.removeEventListener("resize", removeTransition);

      clearTimeout(timeoutId);
    };
  }, [isOpen]);

  return (
    <div className="relative border-dynamic-black/50">
      <button
        className="flex w-full items-center justify-between py-2 text-left lg:hidden"
        onClick={handleClick}
      >
        {projectName}
        <div className="relative flex items-center justify-center">
          <span
            className={`h-[0.75px] w-4 bg-dynamic-black transition duration-1000 ${
              isOpen ? "rotate-[360deg]" : "rotate-0"
            }`}
          />
          <span
            className={`absolute h-4 w-[0.75px] bg-dynamic-black transition delay-100 duration-1000 ${
              isOpen ? "rotate-[270deg]" : "rotate-0"
            }`}
          />
        </div>
      </button>

      <Link
        href={`/projects/${slug}`}
        className="peer hidden py-2 text-dynamic-black transition-all duration-500 hover:pl-5 hover:text-dynamic-black/60 lg:block"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {projectName}
      </Link>

      <div
        className="relative z-10 max-h-0 overflow-hidden transition-all duration-1000 lg:pointer-events-none lg:absolute lg:left-1/2 lg:flex lg:max-h-full lg:w-1/2 lg:max-w-[540px] lg:transform lg:items-center lg:justify-center lg:overflow-visible lg:opacity-0 lg:duration-300 lg:peer-hover:opacity-100"
        ref={imageWrapper}
      >
        <Link
          href={`/projects/${slug}`}
          className="relative z-50 h-full w-full shrink-0 bg-dynamic-black"
        >
          <Image src={imageUrl} alt="" width="1000" height="800" priority />
        </Link>
      </div>
    </div>
  );
}
