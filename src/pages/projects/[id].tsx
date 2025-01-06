import { useRouter } from "next/router";
import { ProejectsLinks } from "@/app/components/project/data/ProjectsData";
import "./projects.css";
import "tailwindcss/tailwind.css";

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const project = ProejectsLinks.find((proj) => proj.id === Number(id));

  if (!project) {
    return <p className="">Project not found</p>;
  }

  return (
    <section className="h-auto">
     
      <section className="flex flex-col w-[600px] m-auto justify-start gap-10 mt-8">
        <div className="mt-10 flex flex-col gap-3">
          <p className="text-[var(--text-color-primary)] text-[16px] font-normal">{project.year}</p>
         <h2 className="text-[var(--text-color-secondary)] text-[20px] font-normal">{project.name}</h2>
          <p className="text-[var(--text-color-primary)] font-normal text-sm">{project.description}</p>
        </div>
        <div>
          <img
            className="border-[var(--border-primary)] border rounded-lg h-[300px] w-full"
            src={project.img}
            alt={project.name}
          />
        </div>
        <div className="mb-10">
          <p className="text-[var(--text-color-primary)] font-normal text-sm">{project.extendedDescription}</p>
        </div>
      </section>
    </section>
  );
};

export default ProjectDetails;
