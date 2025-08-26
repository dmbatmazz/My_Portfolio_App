import React from "react";
import avatar from "../assets/avatar.png"; // senin görselin

export default function Hero() {

  const handleEmailClick = () => {
    window.location.href = "mailto:defnemelis8@outlook.com";
  };

  return (
    <section className="hero">
      <div className="hero-text">
        <p className="intro">HI THERE 👋🏻 I'M</p>
        <h1 className="name">DEFNE MELİS <br /> BATMAZ</h1>
        <h2 className="role">UI/UX DESIGNER + DEVELOPER</h2>
        <p className="desc">
          I'm a software engineer specializing in UI/UX design. Check out my portfolio for projects I've worked on so far and more!
        </p>
        <button className="hire-btn" onClick={handleEmailClick}>Mail Me</button>
      </div>

      <div className="hero-image">
        <img src={avatar} alt="Defne Melis Batmaz" />
      </div>
    </section>
  );
}
