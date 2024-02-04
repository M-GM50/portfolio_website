import React from "react";
import "./main.css";
import "./resume.css";

function Resume() {
  return (
    <>
      <header>
        <h2 id="myResume">
          Res<span className="oddLetter">u</span>me
        </h2>
      </header>

      <section id="resume">
        <img id="resumeImg" src="./images/resume.png" />
        <div className="text">
          <br></br>
          <p>This is a very brief summary of my life.</p>
          <p>
            Visit my{" "}
            <a href="https://www.linkedin.com/in/marionm50/"> LinkedIn</a> to
            know more!
          </p>
          <p>
            Before consering a career as a software engineer, I was in
            hospitality.
          </p>
          <p>
            My most notable job was working a cabin crew on the Eurostar. I had
            the time of life.
          </p>
          <p>
            I was living between London, Paris, Brussels, the French Riviera in
            the summers and travelling to the Alps in the winter.
          </p>
          <p>
            It's also worth mentioning that I did a course on Graphic Design in
            2021 where I was introduced to Figma. A software that I still
            frequently use.
          </p>
          <p>I made this resume on Figma. Figma is awesome.</p>
          <p><a href = "./images/WebDev.pdf" target= "_blank">DOWNLOAD IT HERE</a></p>
        </div>
      </section>
    </>
  );
}

export default Resume;
