import React from 'react'
import NavLogoLight from "../public/logo-light.png";
import NavLogoDark from "../public/logo-dark.png";

export default function Nav() {
    return (
        <nav className="nav">
      <img
        src={NavLogoLight}
        alt="Shubham logo"
        class="nav__logo-img"
      />
      <ul className="nav__items">
        <li className="nav__item">
          <a href="#about-me" className="nav__link">About me</a>
        </li>
        <li className="nav__item">
          <a href="#projects" className="nav__link">Projects</a>
        </li>
        <li className="nav__item">
          <a href="#contact" className="nav__link">Contact</a>
        </li>
        <li className="nav__item nav__item--mode" id="dark-mode">dArk mode</li>
      </ul>
    </nav>

    )
}
