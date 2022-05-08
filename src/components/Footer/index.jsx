import React, { useState } from 'react';
import './style.css';

export default function Footer() {
  return (
    <div className='navbar'>
      <footer>
        <h3 className="">2021 by Logo Here. All rights reserved.</h3>
        <div>

          <div className='nav-btns'>
            <div className="footer-icons">
              <img src="icons/060-telegram.svg" />
              <img src="icons/049-messenger.svg" />
              <img src="icons/039-twitter.svg" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
