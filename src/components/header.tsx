import Image from "next/image";
import HeaderBar from "./headerBar";
import ActionButton from "./actionButton";
import { socials } from "@/utils/data";
import CursorHover from "./cursorHover";

export default function Header() {
  return (
    <header className="flex min-h-[100svh] flex-col justify-between bg-eerie-black px-5 text-lighthouse">
      <HeaderBar />

      <section className="grid grid-cols-1 items-center gap-8 p-3 sm:grid-cols-2">
        <Image src="/hero-image.png" alt="" width="500" height="500" className="mx-auto hidden sm:order-2 sm:block md:w-[50vh]" priority />

        <div className="mr-16 sm:order-1">
          <h2 className="text-justify text-3xl font-bold leading-7  lg:text-5xl">Hello World!</h2>

          <p className="mt-7 text-sm leading-4 md:text-base md:leading-4 lg:text-lg">
            I am Sabilillah a Front-end Developer from Jakarta, Indonesia. I&apos;m currently is available for hire as a Web Developer.
          </p>

          <CursorHover scaleSize={4}>
            <ActionButton
              afterContent="after:content-['Explore_My_CV']"
              text="Explore My CV"
              className="text-xs mt-5 border border-lighthouse hidden sm:block uppercase w-fit bg-eerie-black ml-auto"
              href="/cv"
            />
          </CursorHover>
        </div>
      </section>

      <section className="flex flex-row-reverse items-center justify-between p-3 sm:flex-row">
        <div className="hidden gap-x-16 sm:flex">
          {socials.map((social, index) => (
            <CursorHover scaleSize={3} key={index}>
              <a className="text-xs uppercase" href={social.link} target="_blank" rel="noopener noreferrer">
                {social.socialName}
              </a>
            </CursorHover>
          ))}
        </div>

        <span className="text-xs">&copy; {new Date().getFullYear()}</span>
      </section>
    </header>
  );
}
