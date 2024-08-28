import Head from "next/head";
import HeaderBar from "@/components/headerBar";

export default function Cv() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Personal CV</title>
      </Head>

      <header className="p-3 bg-white w-full">
        <HeaderBar />
      </header>

      <main className="max-w-screen-lg mx-auto space-y-9 p-7 w-full [&_section_h2]:font-medium md:[&_section_h2]:text-3xl [&_section_h2]:mb-2 [&_section_h2]:pb-1 [&_section_h2]:border-b [&_section_h2]:border-b-dynamic-black [&_section_h2]:text-xl">
        <section className="w-full">
          <h1 className="uppercase text-5xl text-center font-bold mb-2">Sabilillah</h1>

          <p className="text-sm uppercase text-center border-b-2 border-b-dynamic-black/50 pb-2 w-4/5 mx-auto">Web Developer | Front-end Developer</p>

          <div className="justify-center flex items-center gap-x-2 pt-1 text-xs flex-col sm:flex-row">
            <span>Cengkareng, Jakarta</span>

            <span className="hidden sm:block">&bull;</span>

            <a href="https://wa.me/6283806163238/" target="_blank" rel="noreferrer">
              0838-0616-3238
            </a>

            <span className="hidden sm:block">&bull;</span>

            <a href="mailto:sabilillah272@gmail.com" target="_blank" rel="noreferrer">
              sabilillah272@gmail.com
            </a>
          </div>
        </section>

        <section>
          <h2>Summary Statement</h2>

          <p className="text-sm sm:text-base">
            Self-taught Web Developer adept in all stages of advanced web development. Knowledgeable in user interface, testing, and debugging processes.
            Equipped with a diverse and promising skill set. Proficient in an assortment of technologies, including HTML, CSS, JavaScript/TypeScript, Vue, React
            and Tailwindcss. Able to effectively self-manage during independent projects, as well as collaborate in a team setting.
          </p>
        </section>

        <section>
          <h2>Areas of Expertise</h2>

          <ul className="[&_li]:list-disc pl-10 text-sm sm:text-base">
            <li>Programming Languages: HTML, CSS, JavaScript/TypeScript, PHP, Nodejs</li>
            <li>Front-end Framework: Vue, React, Tailwindcss</li>
            <li>Back-end Framework: Laravel, Express</li>
            <li>Version Control: Git, GitHub</li>
            <li>Soft skills: Fast Learner, Adaptability, Communication, Problem Solving</li>
            <li>Additional Skills: Responsive design, API Development, Automation Testing</li>
          </ul>
        </section>

        <section>
          <h2>Relevant Experience</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl">E-commerce Website – Personal Project, Jakarta</h3>

              <p className="mb-4 text-sm sm:text-base">Front-end Developer (Dec 2023 – Current)</p>

              <ul className="[&_li]:list-disc pl-10 text-sm sm:text-base">
                <li>Developed a secure, interactive web application with a modern front-end framework and an intuitive user interface</li>
                <li>Utilized library and frameworks such as Vue and Tailwindcss to create interactive user interfaces</li>
                <li>Developed and implemented automated testing scripts to improve test coverage and reduce the amount of time spent on manual testing</li>
                <li>Implemented a REST API integration that dynamically retrieved and synchronized data from the server to the web application</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl">E-commerce RESTful API – Personal Project, Jakarta </h3>

              <p className="mb-4 text-sm sm:text-base">Back-end Developer (Dec 2023 - Current) </p>

              <ul className="[&_li]:list-disc pl-10 text-sm sm:text-base">
                <li>Developed a RESTful API that allowed for secure and efficient data transfer between the front-end and back-end systems</li>
                <li>Developed integration tests to ensure bug-free code and a high-quality user experience</li>
                <li>Integrated a payment gateway into the web application that allowed for secure online payments</li>
                <li>Developed a CI/CD pipeline that enabled continuous testing and deployment</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Education</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl">Degree: Marketing</h3>

              <div className="text-sm sm:text-base">
                <span>State Vocational High School 42</span>
                <span>Jakarta</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl">Certification: Responsive Web Design</h3>

              <div className="text-sm sm:text-base">
                <span>freeCodeCamp</span>
                <span>Online</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
