import React, { useState } from "react";
import "./style.css";

export default function Navbar() {
  const [isOpen, setIsopen] = useState(false);
  const handleChange = () => {
    setIsopen((value) => !value);
  };
  return (
    <div className="navbar">
      <div className="menu-bars hidden">
        <img
          onClick={handleChange}
          src={`icons/${isOpen ? "menu-open.svg" : "menu.svg"}`}
          alt="menu"
        />
      </div>
      <nav>
        {/* <h1 className="logo gradient-heading">Logo Here</h1> */}
        <img className="logo" src="images/logo.png" />
        <div className={isOpen ? "" : "close"}>
          <ul className="navlinks">
            <li >Mplaza</li>
            <li>Tokenomics</li>
            <li>Roadmap</li>
            <li><a target="_blank" rel="noreferrer noopener" href="whitepaper.pdf">Whitepaper</a></li>
          </ul>
          <div className="nav-btns">
            <div className="social-icons">
              <img src="icons/github.svg" alt="github" />
              <img src="icons/discord.svg" alt="discor" />
              <img src="icons/twitter.svg" alt="twitter" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
