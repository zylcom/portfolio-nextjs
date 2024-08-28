import Head from "next/head";
import About from "@/components/about";
import Certificate from "@/components/certificate";
import Project from "@/components/project";
import Header from "@/components/header";
import { skills } from "@/utils/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sabilillah | Web Developer</title>
        <meta name="description" content="Hi there, I am Sabilillah, a Web Developer from Jakarta, Indonesia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="bg-zhen-zhu-bai-pearl">
        <About />
        <Certificate />
        <Project />

        <div className="px-4 mt-32 md:px-8">
          <div className="grid grid-cols-1 auto-rows-min gap-x-4 py-8 md:grid-cols-3 md:border-t md:border-t-dynamic-black/50">
            <span className="hidden md:block col-span-1 text-xs h-max w-max rounded-full border border-dynamic-black/40 mb-10 text-dynamic-black/40 py-1 px-4">
              Approach
            </span>

            <ul className="grid grid-cols-1 md:col-span-2 md:grid-cols-3 md:gap-x-4 lg:gap-x-12">
              <li className="border-t border-t-dynamic-black/80 py-4 grid grid-cols-3 gap-x-8 md:py-0 md:border-t-0 md:grid md:grid-cols-1 md:grid-rows-[minmax(50px,max-content),min-content] md:gap-y-4">
                <h3 className="text-sm md:text-base md:font-medium">Responsive Web Design</h3>
                <p className="text-xs font-light col-span-2 md:text-sm md:font-normal">
                  I always strive to create responsive layouts experiences. Users can access from different device without any problem that are truly beneficial
                  to users.
                </p>
              </li>

              <li className="border-t border-t-dynamic-black/80 py-4 grid grid-cols-3 gap-x-8 md:py-0 md:border-t-0 md:grid md:grid-cols-1 md:grid-rows-[minmax(50px,max-content),min-content] md:gap-y-4">
                <h3 className="text-sm md:text-base md:font-medium">Testing &amp; Debugging</h3>
                <p className="text-xs font-light col-span-2 md:text-sm md:font-normal">
                  With my extensive experience in programming, I&apos;m have a strong foundation in debugging and testing to ensure that code have less bug.
                </p>
              </li>

              <li className="border-t border-t-dynamic-black/80 py-4 grid grid-cols-3 gap-x-8 md:py-0 md:border-t-0 md:grid md:grid-cols-1 md:grid-rows-[minmax(50px,max-content),min-content] md:gap-y-4">
                <h3 className="text-sm md:text-base md:font-medium">Clean Code</h3>
                <p className="text-xs font-light col-span-2 md:text-sm md:font-normal">
                  As an expert Developer, I make sure my code are clean, efficient, readable and easy to maintain.
                </p>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 auto-rows-min gap-x-4 border-t border-t-dynamic-black/50 py-4 md:py-8 md:grid-cols-3">
            <span className="col-span-1 text-xs h-max w-max rounded-full border border-dynamic-black/40 mb-10 text-dynamic-black/40 py-1 px-4">Education</span>

            <div className="col-span-2 flex justify-between gap-x-4">
              <div className="flex flex-col gap-y-1">
                <span className="text-sm -tracking-wide font-semibold">2018 --- 2021</span>
                <span className="text-sm -tracking-wide">Online Business &amp; Marketing</span>
                <span className="text-sm -tracking-wide">Vocational High School 42 Jakarta</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 auto-rows-min gap-x-4 border-t border-t-dynamic-black/50 py-4 md:py-8 md:grid-cols-3">
            <span className="text-xs h-max w-max rounded-full border border-dynamic-black/40 mb-10 text-dynamic-black/40 py-1 px-4 md:col-span-1">Skills</span>

            <ul className="justify-between gap-x-4 gap-y-1 grid grid-cols-3 md:col-span-2">
              {skills.map((skill, index) => (
                <li className="text-sm -tracking-wide" key={index}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
