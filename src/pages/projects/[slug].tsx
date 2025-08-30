import Head from "next/head";
import Image from "next/image";
import { motion } from "motion/react";
import { useRef } from "react";
import ActionButton from "@/components/actionButton";
import ScreenshotCard from "@/components/screenshotCard";
import { Project, projectList } from "@/utils/data";
import HeaderBar from "@/components/navigationBar";
import CursorHover from "@/components/cursorHover";

export async function getStaticPaths() {
  const projects = projectList;
  const paths = projects.map((project) => ({ params: { slug: project.slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const project = projectList.find((project) => project.slug === params.slug);

  return {
    props: { project },
  };
}

const staggerAnimation = {
  initial: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7 },
  },
};

export default function Projects({ project }: { project: Project }) {
  const cardContainer = useRef(null);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{project.name}</title>
      </Head>

      <header className="w-full bg-white p-3">
        <HeaderBar />
      </header>

      <main className="bg-white px-4 pt-52">
        <motion.span className="block text-xs italic" variants={staggerAnimation} initial="initial" animate="visible">
          {project.workScopes}
        </motion.span>

        <CursorHover message="Demo" scaleSize={4}>
          <h1 className="after:bg-dynamic-black relative w-fit text-5xl leading-none font-light after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:transition-all after:duration-700 after:ease-in after:content-[''] hover:after:w-full md:text-8xl">
            <a className="mt-2 block" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </h1>
        </CursorHover>

        <div className="mt-8 grid grid-cols-1 grid-rows-[repeat(6,min-content)] md:grid-cols-12 md:grid-rows-[repeat(4,min-content)] [&>p]:text-sm [&>p]:font-light [&>span]:font-semibold">
          <span className="md:order-1 md:col-span-2">Type</span>
          <motion.p className="md:order-4 md:col-span-2 md:row-start-2" variants={staggerAnimation} initial="initial" animate="visible">
            {project.typeApp}
          </motion.p>

          <span className="mt-5 md:order-2 md:col-span-6 md:mt-0 lg:col-span-4">Description</span>
          <motion.p className="md:order-5 md:col-span-6 md:row-start-2 lg:col-span-4" variants={staggerAnimation} initial="initial" animate="visible">
            {project.description}
          </motion.p>

          <span className="mt-5 md:order-3 md:col-start-10 md:mt-0 lg:col-start-8">Year</span>
          <motion.p className="md:order-6 md:col-start-10 md:row-start-2 lg:col-start-8" variants={staggerAnimation} initial="initial" animate="visible">
            {project.year}
          </motion.p>

          <span className="mt-5 whitespace-nowrap md:order-7 md:row-start-3">Tech Stack</span>

          <motion.div
            className="flex flex-wrap gap-2 md:order-8 md:col-span-12 md:row-start-4"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              initial: {},
            }}
            initial="initial"
            animate="visible"
          >
            {project.techStack.map((stack, index) => (
              <motion.span variants={staggerAnimation} className="border-dynamic-black/40 rounded-full border px-5 py-1 text-[.65rem] uppercase" key={index}>
                {stack}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <Image src={project.coverImageUrl} className="my-8 w-full" alt="" width="1000" height="800" priority />

        <p className="pt-8 pb-4">{project.jobDescription}</p>

        <CursorHover message="Repo" scaleSize={4}>
          <ActionButton
            afterContent="after:content-['Explore_my_work']"
            className="w-max border text-sm"
            text="Explore my work"
            href={project.repoUrl}
            target="_blank"
          />
        </CursorHover>

        <h2 className="mt-16 text-2xl">Screenshots</h2>

        <div className="border-t-dynamic-black/30 mt-2 h-1 w-full border-t" />

        <div ref={cardContainer} className="mb-8">
          {project.screenshots.map((screenshot, index) => (
            <ScreenshotCard key={index} screenshot={screenshot} />
          ))}
        </div>
      </main>
    </>
  );
}
