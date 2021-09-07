import Image from "next/image";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

export default function ProjectCard(props) {
  return (
    <div className={props.flex == 1 ? "row-rev projects" : "row projects"}>
      <Zoom>
        <div className="projects__img-box">
          <Image
            src={require(`../public/${props.image}`)}
            alt="project image"
            className="projects__img"
          />
        </div>
      </Zoom>

      <Fade bottom>

      <div className="projects__details">
      <Fade bottom>
        <h1 className="number">{props.no}</h1>
        </Fade>
        <h1 className="name">{props.name}</h1>
        <Fade bottom>
        <p className="short-summery">{props.summery}</p>
        </Fade>
        <Fade bottom>
        <h4 className="tech-used">Technology Used</h4>
        </Fade>
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
      </Fade>
    </div>
  );
}
