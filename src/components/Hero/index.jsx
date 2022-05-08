import React from "react";
import "./style.css";
import vid from "../../assets/video.mp4";
import pdf from "../../assets/metaplaza.pdf";

export default function Hero() {
  return (
    <div className="hero">
      <div
        className="video-div"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          zIndex: -1,
        }}
      >
        <video
          style={{ objectFit: "cover" }}
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <main>
        <h1 className="gradient-heading">Mplaza</h1>
        {/* <img  className="logo" src="images/logo.png"/> */}

        <div className="hero-desc">
          A virtual hangout place for <span className="words"></span>.
        </div>
        {/* <button>
          <a href={pdf} rel="noreferrer">
            Start Now
          </a>
        </button> */}
      </main>
    </div>
  );
}
