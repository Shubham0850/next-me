import React from 'react'

export default function Header() {
    return (
        <header class="header" id="smooth-scroll">
        {/* <img
          src="/images/shubham.jpg"
          alt="Shubham photo"
          class="header__img"
          title="It's me"
        /> */}
  
        <h2 class="heading-secondary">Hi👋, I am Shubham Raj</h2>
  
        <h1 class="heading-primary">
          Self taught Full Stack developer<br />
          & Software Engineer
        </h1>
  
        <a href="#contact" class="btn" 
          >Contact Me <ion-icon name="chevron-forward-outline"></ion-icon
        ></a>
      </header>
  
    )
}
