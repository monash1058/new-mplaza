import React from "react";
import "./style.css";

export default function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-desc" data-aos="flip-left">
        {/* <h1 className="gradient-heading logo">Logo Here</h1> */}
        <img  className="logo" src="images/logo.png" />
        <p>Disclaimer :</p>
        <p>
      This website is distributed for general informational and
            educational purposes only and is not intended to constitute legal,
            tax, accounting or investment advice.
           All investment strategies and investments involve risk of loss.
            Nothing contained in this website should be construed as investment
            advice. Any reference to an investment’s past or potential
            performance is not, and should not be construed as, a recommendation
            or as a guarantee of any specific outcome or profit.
          </p>
        
      </div>
      <div className="contact-links" data-aos="flip-left">
        <h4>Useful Links</h4>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="contact-form" data-aos="flip-left">
        <h4>Connect With Us!</h4>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <button className="join-btn">Join Newsletter</button>
        </form>
      </div>
    </div>
  );
}
