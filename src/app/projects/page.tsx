import React from 'react';
import { LampDemo } from "@/components/lampdemo";
import ThreeDCardDemo from "@/components/projectCard";
import { projects } from "@/data/constants";

function Page() {
  return (
    <div className='overflow-y-scroll scrollbar px-4 sm:px-8'>
      <LampDemo />
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mx-16 mx-4 font-mono'>
        {projects.map((project) => (
          <ThreeDCardDemo
            key={project.title}
            title={project.title}
            description={project.description}
            src={project.src}
            livelink={project.siteUrl}
            gitlink={project.github}
            stack={project.techUsed}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
