import React from "react";
import "./style.css";

export default function Disclaimer() {
  return (
    <div className="disclaimer" data-aos="fade-up" >
      <div className="disclaimer-card">
        <div className="title">
          <h2 className="gradient-heading">Disclaimer</h2>
        </div>
        <div className="description">
          <p>
            This website is distributed for general informational and
            educational purposes only and is not intended to constitute legal,
            tax, accounting or investment advice.
          </p>
          <p>
            All investment strategies and investments involve risk of loss.
            Nothing contained in this website should be construed as investment
            advice. Any reference to an investment’s past or potential
            performance is not, and should not be construed as, a recommendation
            or as a guarantee of any specific outcome or profit.
          </p>
        </div>
      </div>
    </div>
  );
}
