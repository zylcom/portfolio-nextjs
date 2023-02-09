import { useRef } from "react";
import ProjectItem from "./projectItem";

export default function Project() {
  const dummyProjects = useRef([
    {
      id: 1,
      nameProject: "Project 1",
      projectImageUrl: "https://picsum.photos/600/400.webp?random=1",
      slug: "project-1",
    },
    {
      id: 2,
      nameProject: "Project 2",
      projectImageUrl: "https://picsum.photos/600/400.webp?random=2",
      slug: "project-2",
    },
    {
      id: 3,
      nameProject: "Project 3",
      projectImageUrl: "https://picsum.photos/600/400.webp?random=3",
      slug: "project-3",
    },
    {
      id: 4,
      nameProject: "Project 4",
      projectImageUrl: "https://picsum.photos/600/400.webp?random=4",
      slug: "project-4",
    },
    {
      id: 5,
      nameProject: "Project 5",
      projectImageUrl: "https://picsum.photos/600/400.webp?random=5",
      slug: "project-5",
    },
  ]);

  return (
    <div>
      <div>
        <h2 className="text-center text-lg">My Work</h2>

        <div className="mt-12 px-4 last:mb-2 md:px-8 [&>div]:border-b [&>div:first-child]:border-t">
          {dummyProjects.current.map((project) => (
            <ProjectItem
              projectName={project.nameProject}
              imageUrl={project.projectImageUrl}
              slug={project.slug}
              key={project.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
