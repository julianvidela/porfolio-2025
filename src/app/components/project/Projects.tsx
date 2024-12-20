import React from "react";
import "./project.css";
import { ProejectsLinks } from "./data/ProjectsData";
import Image from "next/image";

export const Projects = () => {
  return (
    <section className="mt-14 h-[50rem]">
      <div className="flex gap-3 items-center ">
        <div className="bg-green px-5 py-1 rounded-full">
          <p className="text-xs">New</p>
        </div>
        <h2 className="text-[var(--text-color-secondary)]">Projects</h2>
      </div>
      <div className="flex flex-col w-full justify-around items-center mt-7 gap-3">
        
        {ProejectsLinks.map((project, index) => (
          <>
          <div className="flex justify-start w-full">
             <p className="text-[var(--text-color-primary)] font-normal text-sm mt-2">
              {project.year}
             </p>
          </div>
          <div key={index} className="flex justify-between items-center  w-full ">
           
            <div className="w-[50%] h-[100px]">
              <h3 className="text-[var(--text-color-secondary)]">
                {project.name}
              </h3>
              <p className="text-[var(--text-color-primary)] font-normal text-sm mt-2">
                {project.description}
              </p>
            </div>
            {/* <div className="w-[250px] h-[120px] border border-[var(--border-primary)] rounded-lg mt-4 overflow-hidden">
              <img
              src={project.img}
              alt={`${project.name} image`}
              className="w-full h-full object-contain"
              />
              </div> */}
            <div className="w-[250px] h-[120px] border border-[var(--border-primary)] rounded-lg mt-4 overflow-hidden">
              <Image
                src={project.img}
                alt={`${project.name} image`}
                layout="responsive"
                width={250}
                height={120}
                objectFit="cover"
                quality={90}
                />
            </div>
          </div>
                </>
        ))}
      </div>
    </section>
  );
};
