import React from "react";
import "./style.css";

export default function About() {
  return (
    <div className="about" id="about">
    <div className="about-left about-flex" data-aos="fade-right">
      <div>
        <img className="responsiveabout" src="images/about.png" />
        <div className="token"><img className="responsivetoken" src="images/Mplazatoken.png" /></div>

        <div className="about-info">
          <p>The prime token for this project is $Mplaza.</p>
          <p>
            {" "}
            Initially, Mplaza will deploy on a BSC network. Within few weeks
            of the Mplaza BEP20 launch, we will deploy on the ETH and Solana
            blockchains as well.
          </p>
          <p>
            We plan to eventually deploy on all other blockchains, such as
            AVAX, CRO, MATIC.
          </p>
          <p>
            {" "}
            The $Mplaza token will have a Buy/Sell Tax of 8% (5% development
            and 3% LP).
          </p>
          <p>
            The staking dashboard will be available as soon Mplaza goes live
            on PCS.
          </p>
          <p>
            Up to 800% APY will be given for the initial investors. The APY
            will be changed in 3 weeks, so people who stake within the first 3
            weeks can get up to 800% APY.
          </p>{" "}
          <p>
            {" "}
            Mplaza will be a multi cross-chain token bridged, listed on all
            top CEX. All the contracts will run side by side. The price will
            be maintained via the bridge. Volumes of all chains will count
            towards Mplaza volume on CMC & CG.
          </p>
        </div>
      </div>

      <div className="about-right">
        <img draggable="false" src="icons/about-img1.svg" alt="" />
        {/* <div className="readmore-frame">
          <img
            data-aos="flip-left"
            draggable="false"
            src="images/readmore.svg"
            alt=""
          />
        </div> */}
      </div>
    </div>
  </div>
    // <div className="about" id="about">
    //   <div className="about-left" data-aos="fade-right">
    //   <img className="responsiveabout" src="images/about.png" />
    //   <div className="token"><img className="responsivetoken" src="images/Mplazatoken.png" /></div>
    //     <p>
    //       The prime token for this project is $Mplaza. Initially, Mplaza will
    //       deploy on a BSC network. Within few weeks of the Mplaza BEP20 launch,
    //       we will deploy on the ETH and Solana blockchains as well. We plan to
    //       eventually deploy on all other blockchains, such as AVAX, CRO, MATIC.
    //       The $Mplaza token will have a Buy/Sell Tax of 8% (5% development and
    //       3% LP). The staking dashboard will be available as soon Mplaza goes
    //       live on PCS. Up to 800% APY will be given for the initial investors.
    //       The APY will be changed in 3 weeks, so people who stake within the
    //       first 3 weeks can get up to 800% APY. Mplaza will be a multi
    //       cross-chain token bridged, listed on all top CEX. All the contracts
    //       will run side by side. The price will be maintained via the bridge.
    //       Volumes of all chains will count towards Mplaza volume on CMC & CG.
    //     </p>
    //   </div>

    //   <div className="about-right">
    //     <img draggable="false" src="icons/about-img1.svg" alt="" />
    //     <div className="readmore-frame">
    //       <img
    //         data-aos="flip-left"
    //         draggable="false"
    //         src="images/readmore.svg"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
