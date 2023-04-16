import React from "react";

function Navbar() {
  return (
    <nav id="navbar" class="trans">
      <div class="nav-left">SA</div>
      <ul class="nav-right">
        <a href="#about-us">
          <li data-aos="fade-down">
            <span>About</span>
          </li>
        </a>
        <a href="#experience">
          <li data-aos="fade-down" data-aos-delay="50">
            <span>Experience</span>
          </li>
        </a>
        <a href="#projects">
          <li data-aos="fade-down" data-aos-delay="100">
            <span>Projects</span>
          </li>
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
