import React from "react";
import "./style.css";
import road from "../../assets/images/Roadmap.png";
import roadmap from "../../assets/images/roadMaps.png";


export default function Roadmap() {
  return (
    <div className="roadmap" id="roadmap">
        <div  className="responsiveroad"> <img src={road} /></div>
      <img draggable="false" src={roadmap} alt="roadmap" />
    </div>
  );
}
