import React, { useState } from "react";
import "./style.css";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

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
        <a target="_blank" href="https://mplaza.space/">
          <img className="logo" src="images/logo.png" />
        </a>
        <div className={isOpen ? "" : "close"}>
          <ul className="navlinks">
            {/* <li>
              <a href="#">Mplaza</a>{" "}
            </li> */}
            <li>
              <a href="#tokenomics">Tokenomics</a>{" "}
            </li>
            <li>
              <a rel="noreferrer noopener" href="Mplaza_0x509446B0559562Fc4B03111b55c6056B0Bdb86Ec.pdf">
                Audit
              </a>
            </li>
            <li>
              {" "}
              <a href="#roadmap">Roadmap</a>{" "}
            </li>
            <li>
              <a rel="noreferrer noopener" href="whitepaper.pdf">
                Whitepaper
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="https://staking.mplaza.space/">Staking</a>
            </li>
            <li>
              <a href="https://bscscan.com/address/0x509446B0559562Fc4B03111b55c6056B0Bdb86Ec/">Contract</a>{" "}
            </li>
          </ul>
          <div className="nav-btns">
            <div className="social-icons">
              <a
                target="_blank"
                href="https://discord.gg/qSyW4Jc7j3"
                rel="noreferrer"
              >
               <FaDiscord />
              </a>
              <a
                target="_blank"
                href="https://t.me/mplazaofficial"
                rel="noreferrer"
              >
                <FaTelegramPlane />
              </a>
              <a
                target="_blank"
                href="https://twitter.com/Mplazaofficial"
                rel="noreferrer"
              >
               <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}