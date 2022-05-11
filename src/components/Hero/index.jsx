import React from "react";
import "./style.css";
import vid from "../../assets/video.mp4";
import pdf from "../../assets/metaplaza.pdf";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <div className="hero">
      <div
        className="video-div"
        style={{
          position: "absolute",
          bottom: 80,
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

        <h1
          style={{
            paddingTop: "0.5rem",
            margin: "auto 0 40px",
            fontWeight: "normal",
            color: "#f2f2f2"
          }}
        >
          A virtual hangout place for{" "}
          <span>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "Culture",
                "social events",
                "Shopping",
                "Business",
                "Socialization",
              ]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </span>
        </h1>
      </main>
    </div>
  );
}
