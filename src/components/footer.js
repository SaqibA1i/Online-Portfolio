import React from "react";
import { Youtube, Github, Linkedin } from "react-bootstrap-icons";

function Footer() {
  return (
    <>
      <div class="footer">
        <div class="footer-content">
          <div class="footer-icons">
            <h3>Socials</h3>
            <div classNam="footer-icon">
              <Youtube
                onClick={() => {
                  window.location.href =
                    "https://www.youtube.com/channel/UChbV48W0We8mOFe50MJeKIQ";
                }}
                size={30}
                className="icon"
                color={"white"}
              />

              <Github
                onClick={() => {
                  window.location.href =
                    "https://github.com/SaqibA1i?tab=repositories";
                }}
                size={30}
                color={"white"}
              />
              <Linkedin
                onClick={() => {
                  window.location.href =
                    "https://www.linkedin.com/in/saqib-ali-25b2aa213/";
                }}
                size={30}
                color={"white"}
              />
            </div>
          </div>
          <div class="footer-icons">
            <h3>Contact & Info</h3>
            <div classNam="footer-icon" style={{ textAlignLast: "start" }}>
              <p>Saqib Ali</p>
              <p>+1 647-561-7949</p>
            </div>
          </div>
          <a href="mailto:saqibalip321@gmail.com">Lets talk!</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
