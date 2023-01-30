import Image from "next/image";

export default function Header() {
  return (
    <header className="flex min-h-screen flex-col justify-between bg-dynamic-black px-5 text-lighthouse">
      <section className="grid grid-cols-[1fr_minmax(10px,_130px)] grid-rows-3 py-9 sm:flex sm:items-center sm:justify-between [&>*:not(:first-child)]:text-[9px] [&>*:not(:first-child)]:uppercase sm:[&>*:not(:first-child)]:text-xs">
        <a href="#" className="row-span-3 text-xl">
          Sabilillah
        </a>

        <span>
          Front-end Developer / <br className="lg:hidden" /> Web Developer
        </span>

        <span className="mt-2 sm:mt-0 ">Available for hire</span>

        <a
          href="mailto:sabilillah272@gmail.com"
          className="group relative mt-2 max-w-[120px] overflow-hidden rounded-full border border-lighthouse bg-transparent px-8 py-2 text-center before:absolute before:top-0 before:bottom-0 before:left-0 before:h-full before:w-0 before:bg-zhen-zhu-bai-pearl before:transition-all before:duration-700 before:content-[''] after:relative after:left-0 after:bottom-0 after:whitespace-nowrap after:transition-all after:duration-700 after:content-['Let\'s_Talk'] before:hover:w-full after:hover:bottom-9 sm:mt-0"
          role="button"
        >
          <span className="absolute top-9 text-dynamic-black transition-all duration-700 group-hover:top-2">
            Let&apos;s Talk
          </span>
        </a>
      </section>

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
          <h1 className="text-justify text-3xl font-bold leading-7  lg:text-5xl">
            Hello World!
          </h1>

          <p className="mt-7 text-sm leading-4 md:text-base md:leading-4 lg:text-lg">
            I am Sabilillah a Front-end Developer from Jakarta, Indonesia.
            I&apos;m currently is available for hire as a Front-end Developer.
          </p>

          <a
            href="#"
            className="group relative float-right mt-5 hidden overflow-hidden rounded-full border border-lighthouse bg-transparent px-8 py-2 text-center text-xs uppercase before:absolute before:top-0 before:bottom-0 before:left-0 before:h-full before:w-0 before:bg-zhen-zhu-bai-pearl before:transition-all before:duration-700 before:content-[''] after:relative after:left-0 after:bottom-0 after:whitespace-nowrap after:transition-all after:duration-700 after:content-['Scroll_to_discover'] before:hover:w-full after:hover:bottom-9 sm:block"
            role="button"
          >
            <span className="absolute top-9 flex whitespace-nowrap text-dynamic-black transition-all duration-700 group-hover:top-2">
              Scroll to discover
              <Image
                src="/ArrowDown.svg"
                alt=""
                height="16"
                width="16"
                className="ml-2"
                priority
              />
            </span>
          </a>
        </div>
      </section>

      <section className="flex flex-row-reverse items-center justify-between py-3 sm:flex-row">
        <div className="hidden gap-x-16 sm:flex [&>*]:text-xs [&>*]:uppercase">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>

        <span className="text-xs">&copy; 2023</span>
      </section>
    </header>
  );
}
