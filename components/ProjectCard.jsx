import React from "react";
import Image from "next/image";

export default function ProjectCard(props) {
  return (
    <div
      className="projects"
      // data-aos="fade-up"
      // data-aos-anchor-placement="top-center"
      style={{ flexDirection: props.flex == 1 ? "row-reverse" : "row" }}
    >
      <div className="projects__img-box" data-aos="fade-up-right">
        <Image
          src={require(`../public/${props.image}`)}
          alt="project image"
          className="projects__img"
        />
      </div>

      <div className="projects__details" data-aos="fade-up-left">
        <h1 className="number">{props.no}</h1>
        <h1 className="name">{props.name}</h1>
        <p className="short-summery">{props.summery}</p>
        <h4 className="tech-used">Technology Used</h4>
        <ul>
          {props.techUsed.map((el) => (
            <li key="1">{el}</li>
          ))}
        </ul>
        <div className="links">
          <a
            href={`${props.link}`}
            rel="noreferrer"
            target="_blank"
            className="btn btn--sec"
          >
            Visit Site 🔗
          </a>
          {props.githubLink && (
            <a
              href={`${props.githubLink}`}
              target="_blank"
              className="btn btn--sec"
              rel="noreferrer"
            >
              GitHub 👨‍💻
            </a>
          )}

          {props.playstoreLink && (
            <a
              href={`${props.playstoreLink}`}
              target="_blank"
              className="btn btn--sec"
              rel="noreferrer"
            >
              PlayStore 📱
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
