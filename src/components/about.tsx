import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="pb-20 text-dynamic-black sm:px-[3vw] md:pt-20"
    >
      <div className="mb-10 grid grid-cols-1 gap-y-6 md:grid-cols-4">
        <h2 className="hidden text-sm uppercase md:block xl:text-base">
          About
        </h2>

        <p className="order-2 max-w-lg px-3 text-xl md:order-2 md:col-span-2 md:text-4xl lg:text-4xl">
          I am passionate about everything that has to do with Web Development.
          I enjoy working with enthusiastic people who want to solve problems
          through beautiful design and experiences.
        </p>

        <Image
          src="/hero-image.png"
          alt="Sabilillah"
          width="720"
          height="720"
          className="order-1 mx-auto bg-dynamic-black md:order-3 md:rounded-full xl:max-w-xs"
          priority
        />
      </div>

      <div className="grid grid-cols-1 gap-y-8 px-3 sm:gap-x-5 md:grid-cols-4 max-md:[&_div:not(:last-child)]:border-t [&_p]:text-xs lg:[&_p]:text-base lg:[&_p]:leading-4 [&_h3]:text-sm lg:[&_h3]:text-lg">
        <div className="grid grid-cols-[6rem_60%] justify-between border-t-dynamic-black pt-5 md:grid-cols-1 md:gap-y-6">
          <h3>Responsive Web Design</h3>
          <p>
            I always strive to create responsive layouts experiences. Users can
            access from different device without any problem that are truly
            beneficial to users.
          </p>
        </div>

        <div className="grid grid-cols-[6rem_60%] justify-between border-t-dynamic-black pt-5 md:grid-cols-1 md:gap-y-6">
          <h3>Testing &amp; Debugging</h3>
          <p>
            With my extensive experience in programming, I&apos;m have a strong
            foundation in debugging and testing to ensure that code have less
            bug.
          </p>
        </div>

        <div className="grid grid-cols-[6rem_60%] justify-between border-t-dynamic-black pt-5 md:grid-cols-1 md:gap-y-6">
          <h3>Clean Code</h3>
          <p>
            By using my expertise as a Developer, I make sure that code clean,
            efficient, readable and easy to maintain.
          </p>
        </div>

        <div className="md:self-end md:justify-self-end">
          <a
            href="#"
            className="flex items-center justify-center gap-x-2 whitespace-nowrap rounded-full border border-dynamic-black px-5 py-2 text-xs uppercase"
          >
            Explore my work
            <Image src="/ArrowDown.svg" alt="" width="12" height="12" />
          </a>
        </div>
      </div>
    </section>
  );
}
