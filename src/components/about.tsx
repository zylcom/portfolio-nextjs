import Image from "next/image";
import CursorHover from "./cursorHover";

export default function About() {
  return (
    <section id="about" className="pb-20 text-dynamic-black sm:px-[3vw] md:pt-20">
      <div className="mb-16 mt-6 grid grid-cols-1 gap-y-6 md:grid-cols-4">
        <h2 className="hidden text-sm uppercase md:block md:text-lg">About Me</h2>

        <p className="order-2 max-w-lg px-3 text-xl sm:px-0 md:order-2 md:col-span-2 md:text-4xl lg:text-3xl">
          I am passionate about everything that has to do with Programming. I enjoy working with enthusiastic people who want to solve problems through
          beautiful design and experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-y-8 px-3 sm:px-0 md:grid-cols-4 lg:grid-cols-5">
        <ul className="grid grid-cols-1 md:col-span-3 md:grid-cols-3 md:gap-x-4 lg:gap-x-12">
          <li className="grid grid-cols-3 gap-x-8 border-t border-t-dynamic-black/80 py-4 md:grid md:grid-cols-1 md:grid-rows-[minmax(50px,max-content),min-content] md:gap-y-4 md:border-t-0">
            <h3 className="text-sm md:text-base md:font-medium">Responsive Web Design</h3>
            <p className="col-span-2 text-xs font-light md:text-sm md:font-normal">
              I always strive to create responsive layouts experiences. Users can access from different device without any problem that are truly beneficial to
              users.
            </p>
          </li>

          <li className="grid grid-cols-3 gap-x-8 border-t border-t-dynamic-black/80 py-4 md:grid md:grid-cols-1 md:grid-rows-[minmax(50px,max-content),min-content] md:gap-y-4 md:border-t-0">
            <h3 className="text-sm md:text-base md:font-medium">Testing &amp; Debugging</h3>
            <p className="col-span-2 text-xs font-light md:text-sm md:font-normal">
              With my extensive experience in programming, I&apos;m have a strong foundation in debugging and testing to ensure that code have less bug.
            </p>
          </li>

          <li className="grid grid-cols-3 gap-x-8 border-t border-t-dynamic-black/80 py-4 md:grid md:grid-cols-1 md:grid-rows-[minmax(50px,max-content),min-content] md:gap-y-4 md:border-t-0">
            <h3 className="text-sm md:text-base md:font-medium">Clean Code</h3>
            <p className="col-span-2 text-xs font-light md:text-sm md:font-normal">
              As an expert Developer, I make sure my code are clean, efficient, readable and easy to maintain.
            </p>
          </li>
        </ul>

        <div className="md:self-end md:justify-self-end lg:col-span-2">
          <CursorHover message="Scroll" scaleSize={4}>
            <a
              href="#work"
              className="flex items-center justify-center gap-x-2 whitespace-nowrap rounded-full border border-dynamic-black px-5 py-2 text-xs uppercase"
            >
              Explore my work
              <Image src="/ArrowDown.svg" alt="" width="12" height="12" />
            </a>
          </CursorHover>
        </div>
      </div>
    </section>
  );
}
