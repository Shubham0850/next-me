import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Me from "../public/me-vector.svg";
import PlaySound from "./PlaySound";
import { Zoom, Fade } from "react-reveal";

import About from "./About";
import { HoverButton } from "../utils/animation";

export default function Header() {
  const [about, setAbout] = useState(false);
  const btnRef1 = useRef(null);

  useEffect(() => {
    const btn1 = btnRef1.current;

    new HoverButton(btn1);
  }, []);

  const showAbout = () => {
    if (about) {
      setAbout(false);
    } else {
      setAbout(true);
    }
  };

  return (
    <header className="header">
      <button className="header__circle" ref={btnRef1}>
        <div className="header__img">
          <Image src={Me} alt="Shubham photo" title="It's me" />
        </div>
      </button>

      <Fade bottom>
        <h2 className="heading-secondary">Hiya! 👋 Shubham Raj, aka Gulzari</h2>
      </Fade>

      <Zoom bottom>
        <h1 className="heading-primary">
          👩‍🚀 The Frontend Speedster 🚀,
          <br /> 🏎️ Master of Fast Website Wizardry 💨
          <br /> 🏔️Turning pixels into pure magic!🪄
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
