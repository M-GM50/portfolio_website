import React from "react";
import "./main.css";
import "./contact.css";

function DoubleArrow() {
  return (
    <svg
      width="82"
      height="114"
      viewBox="0 0 82 114"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M80.5355 80.5355C82.4882 78.5829 82.4882 75.4171 80.5355 73.4645L48.7157 41.6447C46.7631 39.692 43.5973 39.692 41.6447 41.6447C39.692 43.5973 39.692 46.7631 41.6447 48.7157L69.9289 77L41.6447 105.284C39.692 107.237 39.692 110.403 41.6447 112.355C43.5973 114.308 46.7631 114.308 48.7157 112.355L80.5355 80.5355ZM0 82H77V72H0L0 82Z" />
      <line x1="5" y1="2.18557e-07" x2="5" y2="77" strokeWidth="10" />
    </svg>
  );
}

function Contact() {
  return (
    <>
      <header>
        <h2 id="contact">
          Cont<span className="oddLetter">a</span>ct
        </h2>
      </header>

      <form id="contact-form" name="contact" method="POST" netlify>
        <span className="text">Name: </span>
        <input type="text" />
        <span className="text">Email: </span>
        <input type="email" />
        <span className="text">Message:</span>
        <textarea
          id="bio"
          rows="3"
          cols="30"
          placeholder="Write something..."
        ></textarea>
        <span id="submit-button">
          <input type="submit" value="Submit" className="text" />
        </span>
      </form>

      <div id="contactMe" className="text">
        <div className="contactContainer">
          Drop me a line!
          <img
            className="logoContacts"
            src="./images/hey.svg"
            alt="email link"
          />
          <p>
            <DoubleArrow />
            <a href="mailto:marion@hey.com">marion@hey.com</a>
          </p>
        </div>
        <div className="contactContainer">
          Connect with me!
          <img
            className="logoContacts"
            src="./images/linkedin.svg"
            alt="linkedin link"
          />
          <a href="https://www.linkedin.com/in/marionm50/" target="_blank">
            {" "}
            <p>
              <DoubleArrow />
              /marionm50{" "}
            </p>
          </a>
        </div>
        <div className="contactContainer">
          Check out my code!
          <img
            className="logoContacts"
            src="./images/github.svg"
            alt="github link"
          />
          <p>
            <a href="https://github.com/M-GM50" target="_blank">
              <DoubleArrow />
              /M-GM50
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
