import React from "react";
import "./style.css";
import tokenomics from "../../assets/images/TokenDist.png";
import dist from "../../assets/images/Mtokenomics.png";
import graph from "../../assets/images/graph.png";
import frames from "../../assets/frames/partition.svg";

export default function Tokens() {
  return (
    <div className="tokens" id="tokenomics" style={{ paddingTop: 50 }}>
      <div className="tokenomics">
        <div className="heading">
        <img className="responsiveMtoken" src={tokenomics} />
        </div>

        <div className="tokenomics-info">
          <div data-aos="fade-right" className="tokens-card">
            <p>Liqidity Pool</p>
            <h4 className="gradient-heading">3%</h4>
            <p>Buy/Sell</p>
          </div>
          <img
            draggable="false"
            className="parition"
            src={frames}
            alt="fram-partition"
            data-aos="fade-down"
          />
          <div className="tokens-card" data-aos="fade-right">
            <p>Development</p>
            <h4 className="gradient-heading">5%</h4>
            <p>Buy/Sell</p>
            {/* <p style={{ fontWeight: "bold" }}>Development 5% Buy/Sell</p> */}
          </div>
          {/* <img draggable="false" src="frames/liquidity.svg" />
            <img draggable="false" src="frames/development.svg" /> */}
        </div>
      </div><br></br>
     
      <div className="token-distribution">
      <div className="responsiveDist"><img  src={dist} /></div>
       <img
          draggable="false"
          className="graph"
          src={graph}
          alt=""
          data-aos="zoom-in"
        />
      </div>
    </div>
  );
}
