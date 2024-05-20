import Icon from "./images/profile.jpg";
import bg from "./images/body-wave2.png";
import React, { useEffect } from "react";
const Jobs = ["fullstack engineering", "freelancing", "silicon valley"];

function SectionCard() {
  let bubbles = [];

  const addBubbles = () => {
    for (let i = 0; i < 30; i++) {
      bubbles.push(<div class="bubble"></div>);
    }
    return bubbles;
  };

  useEffect(() => {
    document
      .getElementById("dev")
      .addEventListener("animationiteration", () => {
        let element = document.getElementById("dev");
        let job = element.innerText;
        let index = (Jobs.indexOf(job.toLowerCase()) + 1) % Jobs.length;

        document.getElementById("dev").innerText = Jobs[index];
      });

    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");

      if (document.documentElement.scrollTop === 0) {
        // Add the "top-nav" class to the navbar element
        navbar.className = "trans";
      } else {
        // Remove the "top-nav" class from the navbar element
        navbar.className = "nav-scrolling";
      }
    });
  }, []);

  return (
    <>
      <div class="main">
        <img
          data-aos="zoom-out-up"
          style={{ "z-index": "1300" }}
          src={Icon}
          alt="icon"
        />
        <div class="bubble-container">
          <div class="bubble-wrap">{addBubbles()}</div>
        </div>

        <div id="about-us" class="main-img">
          <img
            id="image1"
            class="top-img"
            src={bg}
            style={{
              "max-width": "200%",
              width: "200%",
              position: "absolute",
              top: 0,
              transform: "rotate(0)",
            }}
            alt="wave svg"
          />
          <img
            id="image2"
            class="bottom-img"
            src={bg}
            style={{
              "max-width": "200%",
              width: "200%",
              position: "absolute",
              bottom: 0,
            }}
            alt="another wave"
          />
          <img
            id="image3"
            class="bottom-img"
            src={bg}
            style={{
              "max-width": "200%",
              width: "200%",
              position: "absolute",
              bottom: 0,
            }}
            alt="wave"
          />
          <div data-aos="fade-down" className="header">
            <img
              className="nameSvg"
              src="name.svg"
              style={{ transform: "rotate(0)" }}
            />
            <h1>Saqib Ali</h1>
            <br />
            <p class="aspire" data-aos="fade-down" data-aos-delay="200">
              <div id="dev">{Jobs[0]}</div>
            </p>
          </div>
          <p data-aos="fade-down">
            A computer engineering student at the university of Waterloo with a
            strong passion for software development and solid industry
            experience.
          </p>
          <div class="section-container-btns">
            <div data-aos="zoom-in-right">
              <a href="mailto:s248ali@uwaterloo.ca" class="mail">
                Email Me
              </a>
            </div>
            <div data-aos="zoom-in-left">
              <a
                class="resume"
                href="https://drive.google.com/file/d/1qp2TPaYc8QmkoGWI9t3IzqpzEY8XgexG/view"
                type="application/pdf"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="bottom-oval"></div>
    </>
  );
}

export default SectionCard;
