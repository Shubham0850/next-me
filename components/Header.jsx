import React from "react";
import Image from "next/image";
import Me from "../public/shubham.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";


export default function Header() {
  return (
    <header className="header" id="smooth-scroll">
      <div className="header__img">
        <Image src={Me} alt="Shubham photo" title="It's me" />
      </div>

      <h2 className="heading-secondary">Hi👋, I am Shubham Raj</h2>

      <h1 className="heading-primary">
        Self taught📚 Full Stack developer👨‍💻
        <br />& Software Engineer🎓
      </h1>

      <a href="#contact" className="btn">
        Contact Me👇 
      </a>
    </header>
  );
}
