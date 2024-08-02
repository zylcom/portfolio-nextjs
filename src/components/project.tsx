import { useState } from "react";
import ProjectItem from "./projectItem";
import ModalGallery from "./modalGallery";
import { projectList } from "@/utils/data";

export type Modal = { active: boolean; index: number };

export default function Project() {
  const projects = projectList;
  const [modal, setModal] = useState<Modal>({ active: false, index: 0 });

  return (
    <div id="work" className="px-4 md:px-8">
      <h2 className="mb-12 text-center text-3xl">My Work</h2>

      {projects.map((project, index) => (
        <ProjectItem
          index={index}
          projectName={project.name}
          imageUrl={project.coverImageUrl}
          slug={project.slug}
          setModal={setModal}
          key={project.id}
        />
      ))}

      <ModalGallery modal={modal} projects={projects} />
    </div>
  );
}
