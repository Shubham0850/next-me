import React from 'react'

export default function Contact() {
    return (
        <footer className="footer" id="contact">
      <h1 className="heading-primary">
        I like to resolve design problems,<br />
        create smart user interface<br />
        and imagine useful interaction, developing <br />rich web experiences &
        web applications.
      </h1>

      <div className="contact-links">
        <a
          href="mailto:rajshubham0850@gmail.com"
          onmouseover="playAudio('hover.mp3')"
          ><ion-icon name="mail"></ion-icon>
        </a>

        <a
          href="https://www.linkedin.com/in/shubham-raj-98b7521a6/"
          target="_blank"
          onmouseover="playAudio('hover.mp3')"
          ><ion-icon name="logo-linkedin"></ion-icon
        ></a>

        <a
          href="https://github.com/Shubham0850"
          target="_blank"
          onmouseover="playAudio('hover.mp3')"
          ><ion-icon name="logo-github"></ion-icon
        ></a>

        <a
          href="https://twitter.com/rajshubham0850"
          target="_blank"
          onmouseover="playAudio('hover.mp3')"
          ><ion-icon name="logo-twitter"></ion-icon
        ></a>

        <a
          href="https://codepen.io/rajshubham0850"
          target="_blank"
          onmouseover="playAudio('hover.mp3')"
          ><ion-icon name="logo-codepen"></ion-icon
        ></a>
      </div>

      <h3 className="heading-secondary">🙋Available for freelance projects</h3>

      <p className="copyright">
        &copy; All right is reserved by Shubham Raj | Made with ❤️ and ☕ by me
      </p>
    </footer>
    )
}
