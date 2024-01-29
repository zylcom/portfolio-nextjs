import { useContext } from "react";
import Image from "next/image";
import HeaderBar from "./headerBar";
import ActionButton from "./actionButton";
import { HoverContext } from "@/context/hoverContext";
import { socials } from "@/utils/data";

export default function Header() {
  const { setHover } = useContext(HoverContext);

  return (
    <header className="flex min-h-[100svh] flex-col justify-between bg-eerie-black px-5 text-lighthouse">
      <HeaderBar />

      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <Image
          src="/hero-image.png"
          alt=""
          width="500"
          height="500"
          className="mx-auto hidden sm:order-2 sm:block md:w-[50vh]"
          priority
        />

        <div className="mr-16 sm:order-1">
          <h2 className="text-justify text-3xl font-bold leading-7  lg:text-5xl">
            Hello World!
          </h2>

          <p className="mt-7 text-sm leading-4 md:text-base md:leading-4 lg:text-lg">
            I am Sabilillah a Front-end Developer from Jakarta, Indonesia.
            I&apos;m currently is available for hire as a Web Developer.
          </p>

          <ActionButton
            afterContent="after:content-['Scroll_to_discover']"
            text="Scroll to discover"
            className="text-xs mt-5 border border-lighthouse hidden sm:block uppercase w-fit bg-eerie-black ml-auto"
            href="#about"
            onMouseOver={() =>
              setHover({ isHovered: true, message: "", scaleSize: 4 })
            }
            onMouseLeave={() => setHover({ isHovered: false, message: "" })}
          />
        </div>
      </section>

      <section className="flex flex-row-reverse items-center justify-between py-3 sm:flex-row">
        <div className="hidden gap-x-16 sm:flex">
          {socials.map((social, index) => (
            <a
              className="text-xs uppercase"
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              onMouseOver={() =>
                setHover({ isHovered: true, message: "", scaleSize: 3 })
              }
              onMouseLeave={() => setHover({ isHovered: false, message: "" })}
            >
              {social.socialName}
            </a>
          ))}
        </div>

        <span className="text-xs">&copy; {new Date().getFullYear()}</span>
      </section>
    </header>
  );
}
