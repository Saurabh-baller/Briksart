// import React from "react";
// import VideoComponent from "../assets/WhatsApp Video 2023-11-25 at 2.11.27 PM.mp4";
// import './Hero.css';


// const Hero = () => {

  
//   return (

//     <div className="video-container">
//    <video className="video" src={VideoComponent}/>
//     </div>
   
//   );
// };

// export default Hero;
// Hero.js
// import React from "react";
// import VideoFile from "../assets/WhatsApp Video 2023-11-25 at 2.11.27 PM.mp4";
// import './Hero.css';

// const Hero = () => {
//   return (
//     <div className="video-container">
//       <video className="video" controls>
//         <source src={VideoFile} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default Hero;

// Hero.js
import React from "react";
import VideoFile from "../assets/Homescreen.mp4";
import './Hero.css';

const Hero = () => {
  return (
    <div className="video-container">
      {/* <video className="video" autoPlay loop muted> */}
      <video autoPlay loop muted className="background-video">
        <source src={VideoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-text">
        <h1>Build Strong, Last Long</h1>
      </div>
    </div>
  );
};

export default Hero;
