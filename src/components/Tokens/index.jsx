import React from "react";
import "./style.css";

export default function Tokens() {
  return (
    <div className="tokens">
      <div className="tokenomics">
        <div className="heading">
          <h1 className="head gradient-heading">Tokenomics (BEP20)</h1>
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
            src="frames/partition.svg"
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
      </div>

      <div className="token-distribution">
        <h1 className="gradient-heading">Token Distribution</h1>
        <img
          draggable="false"
          src="images/token_distribution.png"
          alt=""
          data-aos="zoom-in"
        />
      </div>
    </div>
  );
}
