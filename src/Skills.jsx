import React from "react";
import "./main.css";
import "./skills.css";

function Skills() {
  return (
    <>
      <header>
        <h2 id="mySkills">
          Sk<span className="oddLetter">i</span>lls
        </h2>
      </header>

      <section id="skills">
        <div className="cube">
          <figure>
            <img src="html.svg" />
            <figcaption className="captionSkills">
              <span id="css">HTML CSS JS</span>
            </figcaption>
          </figure>
        </div>
        <div className="cube">
          <figure>
            <img src="react.svg" />
            <figcaption className="captionSkills">React.js</figcaption>
          </figure>
        </div>
        <div className="cube">
          <figure>
            <img src="nextjs.svg" />
            <figcaption className="captionSkills">Next.js</figcaption>
          </figure>
        </div>
        <div className="cube">
          <figure>
            <img src="python.svg" />
            <figcaption className="captionSkills">Python</figcaption>
          </figure>
        </div>
        <div className="cube">
          <figure>
            <img src="sqlite.svg" />
            <figcaption className="captionSkills">SQLite</figcaption>
          </figure>
        </div>
        <div className="cube">
          <figure>
            <img src="figma.svg" />
            <figcaption className="captionSkills">Figma</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

export default Skills;
