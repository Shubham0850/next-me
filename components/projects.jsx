import React from "react";
import ProjectCard from "./ProjectCard";

export default function projects() {
  return (
    <div className="projects-container" id="projects">

      <h2 className="projects-container__heading">My Recent Projects 👨‍💻</h2>
      
      <ProjectCard
        flex= {2}
        image="sbg-pc.png"
        no="01"
        name="SabjiGrocery"
        summery="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore esse
          natus pariatur, rem itaque unde. Repudiandae aliquam, autem quibusdam
          eveniet esse magni, odit commodi minima molestiae veritatis sit at
          hic."
        link="https://SabjiGrocery.com"
        playstoreLink="https://play.google.com/store/apps/details?id=com.north2south.sabjigrocery"
        techUsed={[
          "ReactJs",
          "NodeJs",
          "ExpressJs",
          "MongoDB",
          "Sass",
          "GatsbyJs",
          "PWA",
          "TWA",
          "git",
        ]}
      />

      <ProjectCard
      flex={1}
        no="02"
        name="Nexter"
        image="nexter-pc.png"
        summery=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore esse
            natus pariatur, rem itaque unde. Repudiandae aliquam, autem quibusdam
            eveniet esse magni, odit commodi minima molestiae veritatis sit at
            hic."
        techUsed={["HTML 5", "CSS 3", "SASS", "npm", "git"]}
        link="https://nexter296.netlify.app/"
        githubLink="https://github.com/Shubham0850/Nexter"
      />

      <ProjectCard
      flex={2}
        no="03"
        name="Trillo"
        image="trillio-pc.png"
        summery=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore esse
        natus pariatur, rem itaque unde. Repudiandae aliquam, autem quibusdam
        eveniet esse magni, odit commodi minima molestiae veritatis sit at
        hic."
        techUsed={["HTML 5", "CSS 3", "SASS", "npm", "git"]}
        link="https://trillo296.netlify.app/"
        githubLink="https://github.com/Shubham0850/Trillo"
      />

      <ProjectCard
      flex={1}
        no="04"
        name="Natours"
        image="natours-pc.png"
        summery="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore esse
        natus pariatur, rem itaque unde. Repudiandae aliquam, autem quibusdam
        eveniet esse magni, odit commodi minima molestiae veritatis sit at
        hic."
        techUsed={["HTML 5", "CSS 3", "SASS", "npm", "git"]}
        link="https://natours296.netlify.app/"
        githubLink="https://github.com/Shubham0850/Natours"
      />

      <ProjectCard
      flex={2}
        no="05"
        name="A-Lab"
        image="alab.png"
        summery=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore esse
        natus pariatur, rem itaque unde. Repudiandae aliquam, autem quibusdam
        eveniet esse magni, odit commodi minima molestiae veritatis sit at
        hic."
        techUsed={["ReactJs", "CSS 3", "CRA", "jsx", "React Router", "git"]}
        link="#"
        githubLink="https://github.com/Shubham0850/Amity_Virtual_Lab"
      />

    </div>
  );
}