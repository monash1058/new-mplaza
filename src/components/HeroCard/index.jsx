import React from "react";
import "./style.css";
import logo from "../../assets/images/whatismplaza.png";

export default function HeroCard() {
  console.log(window.innerWidth);
  return (
    <div
    // data-aos={window.innerWidth > 720 ? "fade-up" : "fade-right"}
    // data-aos-offset={window.innerWidth > 720 ? "0" : "-300"}
    // data-aos-anchor-placement="bottom-bottom"
    // style={{ marginBottom: "10rem" }}
      // style={{ marginBottom: "10rem" }}
    >
      <div className="info-card">
          {/* <h2 className="gradient-heading">What is Mplaza</h2> */}
          <img className="responsivePlaza" src={logo} />
          <p>
          Mplaza is a unique, all-encompassing virtual commercial hangout space for Web2 and Web3 users to interact, monetize their creations, and experience the metaverse.
          We are creating the ultimate virtual hangout space for business, culture, shopping, events, and socialization.
          Let your imagination come to life on Mplaza. In this space, you have the power to design the interactive NFT game or virtual space that you’ve always desired.
          For the first time ever in the BSC, you get to make the rules and build an NFT game the way YOU want it using our pre-built assets.
          Whether you’re seeking a space to share eye-popping content, build a tight-knit community, or drive meaningful sales of your creations, Mplaza is a place where you can make your visions a reality.
          The Mplaza team wanted to transform the metaverse and work towards decentralizing social media and online commerce. 
          The platform is a virtual space for users to design their own NFT games, shops, galleries, and hangout rooms. Networking and content sharing will be effortless within the Mplaza realm. With customized NFT avatars, personalized spaces, and buildable NFT galleries, users will be able to make the most out of their digital assets.
          </p>
      </div>
    </div>
  );
}
