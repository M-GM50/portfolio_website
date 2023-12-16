import React from "react";
import "./main.css";
import "./mystory.css";

function MyStory() {
  return (
    <>
      <header>
        <h2 id="myStory">
          My st<span className="oddLetter">o</span>ry
        </h2>
      </header>

      <div className="storyContainer">
        <figure>
          <img className="pictures" src="/white_hair.jpg" />
          <figcaption id="captions">
            <span id="temp">-32C</span>
            <br></br>My hair and eyelashes turned white! #CanadianLife
          </figcaption>
        </figure>

        <div className="storyText text">
          <p>My adventure with coding started in 2019.</p>
          <p>
            I was having the time of my life in Québec when the pandemic hit and
            put me of out a job.
          </p>
          <p>
            I used that time off to try and learn something new. My partner is a
            developer and he introduced me to this world.
          </p>
          <p>
            I got <span id="hooked">hooked</span>.
          </p>
        </div>

        <div className="storyText text">
          <p>
            The pandemic showed no sign of stopping so switching career became
            more and more obvious for me.
          </p>
          <p>I started going to various tech events.</p>
          <p>
            I first one was{" "}
            <a href="https://www.offf.barcelona/">OFF Barcelona 2023</a> where I
            was able to learn more about the tech world.
          </p>
          <p>
            I also went to <a href="https://reactnorway.com/">React Norway</a>{" "}
            in Larvik.
          </p>
          <p>
            Then I joined a Software Engineering Bootcamp. It was a decisive
            turn. It was happening.
          </p>
        </div>

        <figure>
          <img className="pictures" src="/barcelona.jpg" />
          <figcaption id="captions">
            My first tech event in Barcelona
          </figcaption>
        </figure>
      </div>
    </>
  );
}

export default MyStory;
