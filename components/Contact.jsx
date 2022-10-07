import React from "react";
import {
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMdMail,
  IoLogoCodepen,
  IoLogoGithub,
} from "react-icons/io";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { Zoom, Fade } from "react-reveal";

export default function Contact() {
  return (
    <footer className="footer" id="contact">
      <Zoom bottom>
        <h1 className="heading-primary">
          I like to resolve design problems,
          <br />
          create smart user interface
          <br />
          and imagine useful interaction, developing <br />
          rich web experiences & web applications.
        </h1>
      </Zoom>

      <Fade right>
        <div className="contact-links">
          <a href="mailto:rajshubham0850@gmail.com">
            <IoMdMail className="icon" title="E-Mail" />
          </a>

          <a
            href="https://www.linkedin.com/in/shubham0850/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoLinkedin className="icon" title="LinkedIn" />
          </a>

          <a
            href="https://github.com/Shubham0850"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoGithub className="icon" title="GitHub" />
          </a>

          <a
            href="https://twitter.com/Shubham0850"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoTwitter className="icon" title="Twitter" />
          </a>

          <a
            href="https://www.qwiklabs.com/public_profiles/c1d9f15e-65d4-4dde-9fcf-8115a883f727"
            target="_blank"
            rel="noreferrer"
          >
            <DiGoogleCloudPlatform className="icon" title="quicklab" />
          </a>
        </div>
      </Fade>

      <Fade left>
        <h3 className="heading-secondary">👨‍💻Building projects on Blockchain</h3>
      </Fade>

      <Fade bottom>
        <p className="copyright">
          &copy; All right is reserved by Shubham Raj | Made with ❤️ and ☕ by
          me
        </p>
      </Fade>
    </footer>
  );
}
