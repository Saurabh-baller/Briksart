import React from "react";
import one from "../assets/1pic.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.png";
import six from "../assets/6.jpg";
import seven from "../assets/7.jpg";
import eight from "../assets/8.jpg";
import nine from "../assets/9.jpg";

import "./Project.css";

const Projects = () => {
  return (
    <div>
      <p class="shadow-text">Some Of Our Work</p>
      <div className="img1">
        <img src={one} alt="My " className="full-screen-image" />
      </div>
      <div className="img2">
        <img src={two} alt="My " className="img3" />
        <img src={three} alt="My " className="img4" />
      </div>
      <div>
        <img src={four} alt="My " className="full-screen-image" />
      </div>
      <div className="img2">
        <img src={five} alt="My " className="img3" />
        <img src={six} alt="My " className="img4" />
      </div>
      <div>
        <img src={seven} alt="My " className="full-screen-image" />
      </div>
      <div className="img2">
        <img src={eight} alt="My " className="img3" />
        <img src={nine} alt="My " className="img4" />
      </div>
    </div>
  );
};

export default Projects;
