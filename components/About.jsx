import React from 'react'

export default function About() {
    return (
        <div className="about-me">
        <a href="#" className="close about-me__link">&times;</a>
         {/* <img
          src="./images/dev.gif"
          alt="shubham photo"
          class="about-me__banner-img"
        />  */}
        <div className="about-me__banner"></div>

        <div className="about-me__details">
          <h1 className="heading-primary">About me.</h1>
          <p className="paragraph">
            I'm Shubham Raj, a 19-year-old Indian Front-end Engineer. I'm a
            weird guy who likes making weird things with web technologies.<br />
            I like to resolve design problems, create smart user interface and
            imagine useful interaction, developing rich web experiences & web
            applications. When not working or futzing around with code, I study
            how to escape from University. Actually for hire.
            <br />
            I ❤️ working with Startups.
          </p>
          <h2 className="heading-secondary">🙋Available for freelance projects</h2>
          <div className="about-me__link-box">
            <a href="#" target="_blan" className="about-me__link">FIVERR</a>
            <a href="#" target="_blan" className="about-me__link">UPWORK</a>
          </div>

          <div className="btn btn--sec" onmouseover="playAudio('hover.mp3')">
            <ion-icon name="arrow-down-circle-outline"></ion-icon>
            My Resume
          </div>
        </div>
      </div>
    )
}
