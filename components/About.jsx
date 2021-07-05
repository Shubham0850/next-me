import React from "react";

export default function About() {
  return (
    <div className="about-me">
     
      {/* <img
          src="./images/dev.gif"
          alt="shubham photo"
          class="about-me__banner-img"
        />  */}
      <div className="about-me__banner"></div>

      <div className="about-me__details">
        <h1 className="heading-primary">About me.</h1>
        <p className="paragraph">
          I&apos;m Shubham Raj🧔, a 19-year-old Indian🇮🇳  Full-Stack Developer👨‍💻. I&apos;m a simple🙂
          guy who likes❤️ making things with web technologies🌏.
          <br />
          I like to resolve design problems, create smart user interface and
          imagine useful interaction, developing rich web experiences & web
          applications.
          <br />I ❤️ what i do😊.
        </p>
        <h2 className="heading-secondary">
          🙋Available for freelance projects
        </h2>
        <div className="about-me__link-box">
          <a href="#" target="_blan" className="about-me__link">
            FIVERR
          </a>
          <a href="#" target="_blan" className="about-me__link">
            UPWORK
          </a>
        </div>

        <div className="btn btn--sec">
          My Resume
        </div>
      </div>
    </div>
  );
}
