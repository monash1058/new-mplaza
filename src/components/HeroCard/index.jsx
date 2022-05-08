import React from "react";
import "./style.css";

export default function HeroCard() {
  console.log(window.innerWidth);
  return (
    <div
      data-aos={window.innerWidth > 720 ? "fade-up" : "fade-right"}
      data-aos-offset={window.innerWidth > 720 ? "0" : "-300"}
      data-aos-anchor-placement="bottom-bottom"
      // style={{ marginBottom: "10rem" }}
    >
      <div className="info-card">
        <div className="title">
          <h2 className="gradient-heading">What is Mplaza</h2>
        </div>
        <div className="description">
          <p>
            Mplaza, short for Metaplaza, is a unique, all-encompassing virtual
            commercial hangout space for Web2 and Web3 users to interact,
            monetize their creations, and experience the metaverse. The Mplaza
            team wanted to transform the metaverse and work towards
            decentralizing social media and online commerce. The platform is a
            virtual space for users to design their own NFT games, shops,
            galleries, and hangout rooms. Networking and content sharing will be
            effortless within the Mplaza realm. With customized NFT avatars,
            personalized spaces, and buildable NFT galleries, users will be able
            to make the most out of their digital assets.
          </p>
        </div>
        <img
          draggable="false"
          className="card-image1 "
          src="images/dollars.svg"
          alt="card-1"
        />
        <img
          draggable="false"
          className="card-image2 "
          src="images/dollars2.svg"
          alt="card-2"
        />
      </div>
    </div>
  );
}
