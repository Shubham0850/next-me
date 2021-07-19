import React, { useState } from "react";
import NavLogoLight from "../public/logo-light.png";
import NavLogoDark from "../public/logo-dark.png";
import Image from "next/image";
import audio from "../public/sound/switch.mp3";
import About from "./About";
import {
  WiSolarEclipse,
  WiLightning,
  WiMeteor,
  WiAlien,
  WiNightClear,
} from "react-icons/wi";
import PlaySound from "./PlaySound";

export default function Nav() {
  const [darkBtn, setDarkBtn] = useState(false);
  const [about, setAbout] = useState(false);

  const ToggleMode = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");

    const ad = new Audio(audio);
    ad.play();

    if (!darkBtn) {
      setDarkBtn(true);
    } else {
      setDarkBtn(false);
    }
  };

  const showAbout = () => {
    if (about) {
      setAbout(false);
    } else {
      setAbout(true);
    }
  };

  return (
    <nav className="nav">
      <div className="nav__logo">
        <Image
          src={darkBtn ? NavLogoDark : NavLogoLight}
          alt="Shubham logo"
          class="nav__logo-img"
        />
      </div>
      <ul className="nav__items">
        <li className="nav__item nav__link" onMouseOver={PlaySound} onClick={showAbout}>
          🧔About me
        </li>
        <li className="nav__item" onMouseOver={PlaySound} >
          <a data-scroll href="#projects" className="nav__link">
          📜
            Projects
          </a>
        </li>
        <li className="nav__item" onMouseOver={PlaySound} >
          <a data-scroll href="#contact" className="nav__link">
          🤙
            Contact
          </a>
        </li>
        <li
          className="nav__item nav__item--mode"
          onClick={ToggleMode}
          id="dark-mode"
        >
          {darkBtn ? (
            <span className="icon">🌞</span>
          ) : (
            // <WiNightClear className="icon" />
            <span className="icon"> 🌃</span>
          )}
        </li>
      </ul>
      {about && (
        <>
          <div className="about-me-bg" onClick={showAbout}></div>
          <About />
        </>
      )}
    </nav>
  );
}
