import React from 'react';
import './style.css';

export default function Features() {
  return (
    <div className='features' data-aos="fade-up">
      <h1 className="head gradient-heading">Features</h1>
      <main>
        <p>Experience a one-of-a-kind platform when you enter the world of Mplaza.
          Mplaza is building an entire virtual shopping experience with features that cover a wide range of user-friendly capabilities:
        </p>

        <div className="feature-cards" >
          <div className="feature">
            <img className='icon' src="icons/vr-camera.png" />
            <h4 className="gradient-heading subheading">Shops</h4>
            <p>Whether you want to go on a virtual shopping spree or create a shop of your own to sell your digital creations and assets, Mplaza will have everything you could ever desire within a virtual shopping experience.</p>
          </div>
          <div className="feature">
            <img className='icon' src="icons/vr-camera.png" />
            <h4 className="gradient-heading subheading">Event Halls</h4>
            <p>Our virtual event halls are the perfect place to meet up and connect with others. These meeting halls are designed the way YOU want and are completely customizable. Accessing and organizing virtual events will be easier than ever with Mplaza.
            </p>
          </div>
          <div className="feature">
            <img className='icon' src="icons/vr-camera.png" />
            <h4 className="gradient-heading subheading">Build Your Own NFT Game</h4>
            <p>Users have the power to build their own NFT games within the Mplaza space. The platform will feature thousands of NFT games for users to play and earn with while also allowing them to customize games of their own design.
            </p>
          </div>
          <div className="feature">
            <img className='icon' src="icons/vr-camera.png" />
            <h4 className="gradient-heading subheading">NFT Avatars</h4>
            <p>Mplaza will allow users to create and use NFT avatars within the digital space using pre-built assets. Users can explore the metaverse using the avatar of their choice. This gives NFT collectors the chance to get the most out of their NFT assets.</p>
          </div>
          <div className="feature">
            <img className='icon' src="icons/vr-camera.png" />
            <h4 className="gradient-heading subheading">NFT Galleries</h4>
            <p>Users can design and curate their own NFT galleries within the Mplaza platform. These galleries will support NFTs from all platforms and will be easily transferrable between platforms.  Mplaza will also provide users the ability to create and mint NFT designs of their own.</p>
          </div>
          <div className="feature">
            <img className='icon' src="icons/vr-camera.png" />
            <h4 className="gradient-heading subheading">Networking</h4>
            <p>Networking within the metaverse will be easier than ever with Mplaza’s unique commercial hangout space. Users can share culture, content, and information with one another when meeting in these virtual hangout spaces. Each space can be customized to each user’s personal taste and preference.
            </p>
          </div>
          <div className="feature">
            <img className='icon' src="icons/vr-camera.png" />
            <h4 className="gradient-heading subheading">Interperable Platform</h4>
            <p>The Mplaza platform aims to be 100% interoperable, supporting major blockchains and allowing users to log in using their Web2 such as Google or Web3 accounts such as Metamask.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
