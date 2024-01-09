import React from "react";
import "./main.css";
import "./projects.css";

function Projects() {
  return (
    <>
      <header id="projects">
        <h2>
          Pr<span className="oddLetter">o</span>jects
        </h2>
      </header>

      <section id="projectsDisplay">
        <div className="projectPinkCube">
          <figure>
            <figcaption>
              <a
                className="captionsP"
                href="/pokedex/index.html"
                target="_blank"
              >
                Pokédex (JavaScript)
              </a>
            </figcaption>
          </figure>
          <a href="/pokedex/index.html" target="_blank">
            <img
              className="projectPictures"
              src="./images/pikachuThumbnail.png"
              alt="pokedex link"
            />
          </a>
        </div>

        <div className="projectGreyCube">
          <figure>
            <figcaption>
              <a
                className="captionsP"
                href="/cssTransition/index.html"
                target="_blank"
              >
                {" "}
                Sunrise to Sunset (CSS)
              </a>{" "}
            </figcaption>
          </figure>
          <a href="/cssTransition/index.html" target="_blank">
            <img
              className="projectPictures"
              src="./images/cssProject.png"
              alt="css project link"
            />
          </a>
        </div>
        <div className="projectPinkCube">
          <figure>
            <figcaption>
              <a
                className="captionsP"
                href="https://github.com/M-GM50/text_based_adventure_game"
                target="_blank"
              >
                {" "}
                Text Game (Python)
              </a>{" "}
            </figcaption>
          </figure>
          <a
            href="https://github.com/M-GM50/text_based_adventure_game"
            target="_blank"
          >
            <img
              className="projectPictures"
              src="./images/pythonProject.png"
              alt="python project link"
            />
          </a>
        </div>
        <div className="projectGreyCube">
          <figure>
            <figcaption>
              <a
                className="captionsP"
                href="https://github.com/M-GM50/registration_form_SQLite"
                target="_blank"
              >
                {" "}
                Registration Form (SQLite)
              </a>{" "}
            </figcaption>
          </figure>
          <a
            href="https://github.com/M-GM50/registration_form_SQLite"
            target="_blank"
          >
            <img
              className="projectPictures"
              src="./images/form.png"
              alt="react project link"
            />
          </a>
        </div>
        <div className="projectGreyCube">
          <figure>
            <figcaption>
              <a
                className="captionsP"
                href="https://replit.com/@marion10/ColorPickerv2#index.html"
                target="_blank"
              >
                {" "}
                Color Picker (React)
              </a>{" "}
            </figcaption>
          </figure>
          <a
            href="https://replit.com/@marion10/ColorPickerv2#index.html"
            target="_blank"
          >
            <img
              className="projectPictures"
              src="./images/colourPicker.png"
              alt="React Project link"
            />
          </a>
        </div>
      </section>
    </>
  );
}

export default Projects;
