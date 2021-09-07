import React, { useState } from "react";
import Image from "next/image";
import Me from "../public/sqr-logo.png";
import PlaySound from "./PlaySound";
import { Zoom, Fade } from "react-reveal";

import About from "./About";

export default function Header() {
  const [about, setAbout] = useState(false);

  const showAbout = () => {
    if (about) {
      setAbout(false);
    } else {
      setAbout(true);
    }
  };

  return (
    <header className="header">
      <Zoom bottom>
        <div className="header__img">
          <Image src={Me} alt="Shubham photo" title="It's me" />
        </div>
      </Zoom>

      <Fade bottom>
        <h2 className="heading-secondary">Hi👋, I am Shubham Raj</h2>
      </Fade>

      <Zoom bottom>
        <h1 className="heading-primary">
          Self taught📚 Full Stack developer👨‍💻
          <br />& Software Engineer🎓
        </h1>
      </Zoom>

      <div className="btn" onMouseOver={PlaySound} onClick={showAbout}>
        About Me 🧔‍
      </div>

      {about && (
        <>
          <div className="about-me-bg" onClick={showAbout}></div>
          <About />
        </>
      )}
    </header>
  );
}
