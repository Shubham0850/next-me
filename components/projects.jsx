import React from "react";
import ProjectCard from "./ProjectCard";
import PlaySound from "./PlaySound";
import Link from "next/link";
import { Fade } from "react-reveal";

export default function projects() {
  return (
    <div className="projects-container" id="projects">
      <Fade bottom>
        <h2 className="projects-container__heading">My Recent Projects 👨‍💻</h2>
      </Fade>

      <ProjectCard
        flex={2}
        no="01"
        name="A-Lab"
        image="alab.png"
        summery="Virtual Platform designed to develop your engineering skills through lab work . Through this approach, Virtual Lab aims to ease the learning process by involving students in practical activities carried out in a virtual laboratory using technologies such as 3D and Virtual Reality.
        "
        techUsed={[
          "ReactJs",
          "CSS 3",
          "CRA",
          "NextJs",
          "React Router",
          "git",
          "AntD",
        ]}
        link="https://a-lab.vercel.app/"
      />

      <ProjectCard
        flex={1}
        no="02"
        name="NoobDev"
        image="blog.png"
        summery="NoobDev is a hashnode site, where i used to write blogs about web-development and software-development. I am also a hashnode Ambassador. If you want to learn something, do check this website."
        techUsed={["Proudly part of Hashnode"]}
        link="https://noobdev.tech"
      />

      <ProjectCard
        flex={2}
        image="sbg-phone.png"
        no="03"
        name="SabjiGrocery"
        summery="Patna's most convenient online grocery channel SabjiGrocery makes your grocery shopping even simpler and at affordable prices right at your doorstep. Full MERN stack application available for web and playstore."
        link="https://sabjigrocery-new.vercel.app/"
        playstoreLink="https://play.google.com/store/apps/details?id=com.north2south.sabjigrocery"
        techUsed={[
          "ReactJs",
          "NodeJs",
          "ExpressJs",
          "MongoDB",
          "Sass",
          "CRA",
          "PWA",
          "TWA",
          "git",
        ]}
      />

      <ProjectCard
        flex={1}
        no="04"
        name="SBR photof ilms"
        image="sbr.png"
        summery="SBR Photofilms is a team of top candid wedding photographers and wedding filmers in India. SBR Photofilms is headed by Rishav Agarwal. Who is one of the pioneers in the field of candid wedding photography in India."
        techUsed={["ReactJs", "NextJs", "SASS", "npm", "git", "React Revel"]}
        link="https://sbrphotofilms.com/"
      />

      <ProjectCard
        flex={2}
        no="05"
        name="Invoice App"
        image="invoice.png"
        summery="Invoice App is a fast and easy invoice app for sending invoices and estimates to your customers. Invoice App is the perfect invoice maker.Create, send and track invoices and estimates easily on your phone. Manage all of your billing while on the go so you can get paid faster. Send the estimate or invoice before you even leave the customer!"
        techUsed={[
          "React Native",
          "Native Base",
          "React Navigation",
          "npm",
          "git",
          "React Native Camera",
        ]}
        link="https://shubhamraj.live/"
      />

      <ProjectCard
        flex={1}
        no="06"
        name="Artistry"
        image="artistry.png"
        summery="Artistry Inc is a brand that resonates with quality designer products that promise a subtle yet elegant touch. The company has been synonymous with luxury, quality and perfection ever since its inception."
        techUsed={["ReactJs", "NextJs", "SASS", "npm", "git", "React Revel"]}
        link="https://new-artistry.vercel.app/"
      />

      <ProjectCard
        flex={2}
        image="fxfins.png"
        no="07"
        name="FxFins"
        summery="Forex Treadig web-application. Who help forex traders make the most profitable and efficient trading decisions. FxFins come into existence to give user access to the Forex market and provide best services. Experience it yourself."
        link="https://fxfins.com"
        techUsed={[
          "ReactJs",
          "React Bootstrap",
          "NextJs",
          "Airtable",
          "Sass",
          "git",
        ]}
      />

      <ProjectCard
        flex={1}
        image="dentway.png"
        no="08"
        name="DentWay"
        summery="Dentway in Patna offers a host of treatments and cures for a wide range of dental ailments faced by the patients. Few of the dental procedures they offer range from inducing fillings and repairs in the tooth and many other dental services."
        link="https://dentway.in"
        techUsed={[
          "ReactJs",
          "React Bootstrap",
          "NextJs",
          "Airtable",
          "Sass",
          "git",
        ]}
      />

      <ProjectCard
        flex={2}
        no="09"
        name="Bankist"
        image="bankist.png"
        summery="I have build this project from an Udemy course name The Complete JavaScript Course 2021: From Zero to Expert!. and learnt so many thing while building this project. This webpage is a landing page of a Bank name Bankist."
        techUsed={["HTML 5", "npm", "SASS", "javascript", "git"]}
        link="#"
        githubLink="#"
      />

      <ProjectCard
        flex={1}
        no="10"
        name="Nexter"
        image="nexter-pc.png"
        summery="I have build this project from an Udemy course name Advanced CSS and Sass: Flexbox, Grid, Animations and More!. and learnt so many thing while building this project. Nexter is a company who sell expensive villas and home via their website."
        techUsed={["HTML 5", "CSS 3", "SASS", "npm", "git"]}
        link="https://nexter296.netlify.app/"
        githubLink="https://github.com/Shubham0850/Nexter"
      />

      <ProjectCard
        flex={2}
        no="11"
        name="Trillo"
        image="trillio-pc.png"
        summery="I have build this project from an Udemy course name Advanced CSS and Sass: Flexbox, Grid, Animations and More!. and learnt so many thing while building this project. Trillo is a clone of Airbnb. Trillo just has the layout not any functionality."
        techUsed={["HTML 5", "CSS 3", "SASS", "npm", "git"]}
        link="https://trillo296.netlify.app/"
        githubLink="https://github.com/Shubham0850/Trillo"
      />

      <ProjectCard
        flex={1}
        no="12"
        name="Natours"
        image="natours-pc.png"
        summery="I have build this project from an Udemy course name Advanced CSS and Sass: Flexbox, Grid, Animations and More!. and learnt so many thing while building this project. Natours is build to sell Tours via their website."
        techUsed={["HTML 5", "CSS 3", "SASS", "npm", "git"]}
        link="https://natours296.netlify.app/"
        githubLink="https://github.com/Shubham0850/Natours"
      />

      <ProjectCard
        flex={2}
        no="13"
        name="Techotsav 2020"
        image="techotsav.png"
        summery="Techotsav 2020 was the event organised by Posh Production Entertainment Pvt Ltd. The event was going to be organised at Funtasia Water Park - Patna. But due to covid-19 the event was not organised."
        techUsed={["HTML 5", "CSS 3", "npm", "git"]}
        link="https://techotsav.netlify.app/"
        githubLink="https://github.com/Shubham0850/techotsav"
      />

      <ProjectCard
        flex={1}
        no="14"
        name="Tesla Clone"
        image="tesla.png"
        summery="I have built this application on React Native. And also generated apk file and uploaded to gdrive. I learnt React Native from a YouTube channel name notJust.dev. and after learning, I have completed this project."
        techUsed={["React Native", "npm", "git"]}
        link="https://drive.google.com/file/d/1cTCmG6hAILMWZtxiNO78DL1SDp34lA7D/view?usp=sharing"
        githubLink="https://github.com/Shubham0850/tesla-clone"
      />

      <ProjectCard
        flex={2}
        no="15"
        name="Culture of Bihar"
        image="bihar.png"
        summery="I have built this website on top of React. I have build this website on a hackathon organised by Amity University. This is a webiste whic tell us about the different culures of Bihar."
        techUsed={["React", "npm", "git", "Next.Js"]}
        link="https://bihar.vercel.app/"
        githubLink="https://github.com/Shubham0850/bihar"
      />
    </div>
  );
}
