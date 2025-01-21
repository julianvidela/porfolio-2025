// import { useRouter } from "next/router";
// import { ProejectsLinks } from "@/app/components/project/data/ProjectsData";
// import "./projects.css";
// import "tailwindcss/tailwind.css";

// const ProjectDetails = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   const project = ProejectsLinks.find((proj) => proj.id === Number(id));

//   if (!project) {
//     return <p className="">Project not found</p>;
//   }

//   return (
//     <section className="h-auto w-auto mb-16">
//       <section className="flex flex-col w-[600px] m-auto justify-start gap-5 mt-8">
//         <div className="mt-10 flex flex-col gap-3">
//         <div className="flex justify-start w-full">
//           <div className="bg-orange px-3 py-1 rounded-full inline-block">
//             <p className="text-[var(--text-color-orange)] text-xs font-light m-0">
//               {project.year}
//             </p>
//           </div>
//         </div>
//           <h2 className="text-[var(--text-color-secondary)] text-[20px] font-normal">
//             {project.name}
//           </h2>
//           <p className="text-[var(--text-color-primary)] font-normal text-sm">
//             {project.description}
//           </p>
//         </div>
//         <div>
//           <img
//             className="border-[var(--border-primary)] border rounded-lg h-[300px] w-full"
//             src={project.img}
//             alt={project.name}
//           />
//         </div>
//         <div className="mb-10">
//           <p className="text-[var(--text-color-primary)] font-normal text-sm">
//             {project.extendedDescription}
//           </p>
//         </div>
//       </section>
//       <section className="flex flex-col h-auto w-[600px] m-auto justify-start gap-5 mt-8">

//         <h2 className="text-[var(--text-color-secondary)] text-[20px] font-normal">{project.projectTec.front.title}</h2>
//         <div className="h-auto]">
//           <p className="text-[var(--text-color-primary)] font-normal text-sm">{project.projectTec.front.description}</p>
//         </div>
//       </section>
//       <section className="flex flex-col h-auto w-[600px] m-auto justify-start gap-5 mt-8">

//         <h2 className="text-[var(--text-color-secondary)] text-[20px] font-normal">{project.projectTec.backend?.title}</h2>
//         <div className="h-auto">
//           <p className="text-[var(--text-color-primary)] font-normal text-sm">{project.projectTec.backend?.description}</p>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default ProjectDetails;

import { useRouter } from "next/router";
import { ProejectsLinks } from "@/app/components/project/data/ProjectsData";
import "./projects.css";
import "tailwindcss/tailwind.css";
import { renderDescriptionAsList } from "@/app/helper/renderDescriptionAsList";
import icons from "@/common/assets/icons/_index";
import Background from "@/app/atoms/backGround/BackGround";

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const project = ProejectsLinks.find((proj) => proj.id === Number(id));

  if (!project) {
    return <p className="">Project not found</p>;
  }

  return (
    <section className=" relative h-auto w-auto mb-16">
      <Background />
      <section className="flex flex-col w-[600px] m-auto justify-start mt-8">
        <div className="mt-10 flex flex-col gap-3">
          <div className="flex justify-start w-full">
            <div className="bg-orange px-3 py-1 rounded-full inline-block">
              <p className="text-[var(--text-color-orange)] text-xs font-light m-0">
                {project.year}
              </p>
            </div>
          </div>
          <h2 className="text-[var(--text-color-secondary)] text-[20px] font-normal">
            <a
              href={project.href}
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-2 "
            >
              {project.name}

              <img src={icons.clip} alt="Arrow Up" className="w-5 h-5" />
            </a>
          </h2>
          <p className="text-[var(--text-color-primary)] font-normal text-sm">
            {project.description}
          </p>
        </div>
        <div className="mt-8">
          <img
            className="border-[var(--border-primary)] border rounded-lg h-[300px] w-full"
            src={project.img}
            alt={project.name}
          />
        </div>
        <div className="mb-10 mt-8">
          <p className="text-[var(--text-color-primary)] font-normal text-sm leading-6">
            {project.extendedDescription}
          </p>
        </div>
      </section>
      <section className="flex flex-col h-auto w-[600px] m-auto justify-start gap-5 mt-8">
        <h2 className="text-[var(--text-color-secondary)] text-[20px] font-normal">
          {project.projectTec.front.title}
        </h2>
        <div className="h-auto">
          {renderDescriptionAsList(project.projectTec.front.description)}
        </div>
      </section>
      <section className="flex flex-col h-auto w-[600px] m-auto justify-start gap-5 mt-8">
        <h2 className="text-[var(--text-color-secondary)] text-[20px] font-normal">
          {project.projectTec.backend?.title}
        </h2>
        <div className="h-auto">
          {renderDescriptionAsList(
            project.projectTec.backend?.description || ""
          )}
        </div>
      </section>
    </section>
  );
};

export default ProjectDetails;
