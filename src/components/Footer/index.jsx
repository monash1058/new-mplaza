import React, { useState } from 'react';
import './style.css';
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='navbar'>
      <footer>
        <h3 className="">© 2022 by MPlaza. All rights reserved.</h3>
        <div>

          <div className='nav-btns'>
            <div className="footer-icons">
            <FaDiscord />
            <FaTelegramPlane />
            <FaTwitter />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
