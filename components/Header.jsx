import React from "react";
import Image from "next/image";
import Me from "../public/sqr-logo.png";
import PlaySound from "./PlaySound";

export default function Header() {
  return (
    <header className="header">
      <div className="header__img">
        <Image src={Me} alt="Shubham photo" title="It's me" />
      </div>

      <h2 className="heading-secondary">Hi👋, I am Shubham Raj</h2>

      <h1 className="heading-primary">
        Self taught📚 Full Stack developer👨‍💻
        <br />& Software Engineer🎓
      </h1>

      <a href="#contact" className="btn" onMouseOver={PlaySound}>
        Contact Me👇
      </a>
    </header>
  );
}
