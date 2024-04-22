import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContext, useRef } from "react";
import ActionButton from "@/components/actionButton";
import Footer from "@/components/footer";
import ScreenshotCard from "@/components/screenshotCard";
import { Project, projectList } from "@/utils/data";
import { HoverContext } from "@/context/hoverContext";
import HeaderBar from "@/components/headerBar";

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
  const { setHover } = useContext(HoverContext);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{project.name}</title>
      </Head>

      <header className="p-3 bg-white w-full">
        <HeaderBar />
      </header>

      <main className="px-4 bg-white">
        <motion.span
          className="italic text-xs block"
          variants={staggerAnimation}
          initial="initial"
          animate="visible"
        >
          {project.workScopes}
        </motion.span>

        <a
          className="block mt-2 w-fit"
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={() =>
            setHover({ isHovered: true, message: "Demo", scaleSize: 4 })
          }
          onMouseLeave={() => setHover({ isHovered: false, message: "" })}
        >
          <h1 className="text-5xl font-light leading-none md:text-8xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-dynamic-black after:w-0 after:h-1 after:transition-all after:duration-700 after:ease-in hover:after:w-full">
            {project.name}
          </h1>
        </a>

        <div className="mt-8 grid grid-rows-[repeat(6,min-content)] grid-cols-1 md:grid-cols-12 md:grid-rows-[repeat(4,min-content)] [&>span]:font-semibold [&>p]:font-light [&>p]:text-sm">
          <span className="md:order-1 md:col-span-2">Type</span>
          <motion.p
            className="md:order-4 md:col-span-2 md:row-start-2"
            variants={staggerAnimation}
            initial="initial"
            animate="visible"
          >
            {project.typeApp}
          </motion.p>

          <span className="mt-5 md:mt-0 md:order-2 md:col-span-6 lg:col-span-4">
            Description
          </span>
          <motion.p
            className="md:order-5 md:col-span-6 lg:col-span-4 md:row-start-2"
            variants={staggerAnimation}
            initial="initial"
            animate="visible"
          >
            {project.description}
          </motion.p>

          <span className="mt-5 md:mt-0 md:order-3 md:col-start-10 lg:col-start-8">
            Year
          </span>
          <motion.p
            className="md:order-6 md:col-start-10 lg:col-start-8 md:row-start-2"
            variants={staggerAnimation}
            initial="initial"
            animate="visible"
          >
            {project.year}
          </motion.p>

          <span className="mt-5 whitespace-nowrap md:row-start-3 md:order-7">
            Tech Stack
          </span>

          <motion.div
            className="flex gap-2 flex-wrap md:row-start-4 md:order-8 md:col-span-12"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              initial: {},
            }}
            initial="initial"
            animate="visible"
          >
            {project.techStack.map((stack, index) => (
              <motion.span
                variants={staggerAnimation}
                className="uppercase rounded-full border border-dynamic-black/40 px-5 text-[.65rem] py-1"
                key={index}
              >
                {stack}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <Image
          src={project.coverImageUrl}
          className="my-8 w-full"
          alt=""
          width="1000"
          height="800"
          priority
        />

        <p className="pt-8 pb-4">{project.jobDescription}</p>

        <ActionButton
          afterContent="after:content-['Explore_my_work']"
          className="text-sm w-max"
          text="Explore my work"
          href={project.repoUrl}
          target="_blank"
          onMouseOver={() =>
            setHover({ isHovered: true, message: "Repo", scaleSize: 4 })
          }
          onMouseLeave={() => setHover({ isHovered: false, message: "" })}
        />

        <h2 className="text-2xl mt-16">Screenshots</h2>

        <div className="border-t border-t-dynamic-black/30 mt-2 w-full h-1" />

        <div ref={cardContainer} className="mb-8">
          {project.screenshots.map((screenshot, index) => (
            <ScreenshotCard key={index} screenshot={screenshot} />
          ))}
        </div>
      </main>
    </>
  );
}
