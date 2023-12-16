import { useState, useEffect } from "react";
import Hero from "./HeroPage";
import MyStory from "./MyStory";
import Resume from "./Resume";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import "./main.css";
import "./responsive.css"
import "./externalHelp.css"

function App() {
  let canvas;

  useEffect(function () {
    // Made with Zdog

    let isSpinning = true;

    canvas = document.querySelector(".zdog-canvas");
    canvas.style.display = "none";

    let illo = new Zdog.Illustration({
      element: ".zdog-canvas",
    });

    new Zdog.Box({
      addTo: illo,
      width: 10,
      height: 30,
      depth: 30,
      stroke: false,
      color: "#C25",
      // remove left & right faces
      leftFace: false,
      rightFace: false,
      rearFace: "#EA0",
      topFace: "#ED0",
      bottomFace: "#636",
    });

    function animate() {
      illo.rotate.y += isSpinning ? 0.03 : 0;
      illo.updateRenderGraph();
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  function hoverDisplay(e) {
    let { top, left } = e.target.getBoundingClientRect();
    canvas.style.display = "block";
    canvas.style.left = `${left - 55}px`;
    canvas.style.top = `${top - 10}px`;
  }

  function hoverOut() {
    canvas.style.display = "none";
  }

  return (
    <>
      <canvas className="zdog-canvas" width="15" height="15"></canvas>
      <div className="nav-container">
        <nav id="navbar">
          <a onMouseOver={hoverDisplay} onMouseOut={hoverOut} href="#myStory">
            My story
          </a>
          <a onMouseOver={hoverDisplay} onMouseOut={hoverOut} href="#myResume">
            Resume
          </a>
          <a onMouseOver={hoverDisplay} onMouseOut={hoverOut} href="#mySkills">
            Skills
          </a>
          <a onMouseOver={hoverDisplay} onMouseOut={hoverOut} href="#projects">
            Projects
          </a>
          <a onMouseOver={hoverDisplay} onMouseOut={hoverOut} href="#contact">
            Contact
          </a>
        </nav>
      </div>

      <div className="container">
        <Hero />
        <MyStory />
        <Resume />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
