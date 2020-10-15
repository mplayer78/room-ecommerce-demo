import React, { useEffect, useState } from 'react';
import './App.css';
import image1 from "./images/desktop-image-hero-1.jpg"
import mobimage1 from "./images/mobile-image-hero-1.jpg"
import image2 from "./images/desktop-image-hero-2.jpg"
import mobimage2 from "./images/mobile-image-hero-2.jpg"
import image3 from "./images/desktop-image-hero-3.jpg"
import mobimage3 from "./images/mobile-image-hero-3.jpg"
import iconArrow from './images/icon-arrow.svg'
import about1 from './images/image-about-dark.jpg'
import about2 from './images/image-about-light.jpg'

const fakeFetch = [
  {title: "Discover innovative ways to decorate",
body: "We provide unmatched quality, comfort and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
imgUrl: image1,
mobileImgUrl: mobimage1,
},
{title: "We are available all across the globe",
body: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
imgUrl: image2,
mobileImgUrl: mobimage2},
{title: "Manufactured with the best materials",
body: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
imgUrl: image3,
mobileImgUrl: mobimage3}
]

function App() {
  const [currentFocus, setCurrentFocus]:[any, any] = useState(0)
  const [menuExposed, setMenuExposed] = useState(false)
  useEffect(() => {
    setCurrentFocus(fakeFetch[0])
  }, [])
  return (
    <div className="App">
        <div className={`mask ${menuExposed ? "open" : ""}`}></div>
        <nav className={`navbar ${menuExposed ? "navbar-open" : ""}`}>
          <ul className="links">
        <button onClick={() => setMenuExposed(!menuExposed)} className="link" aria-controls="menu-list" aria-expanded="false"></button>
            <li className="link branding">
              room
            </li>
            <li className="link collapsible">home</li>
            <li className="link collapsible">shop</li>
            <li className="link collapsible">about</li>
            <li className="link collapsible">contact</li>
          </ul>
        </nav>
        <div 
        className="image slideshow-frame" 
        style={{backgroundImage:`url(${currentFocus.imgUrl})`}}
        >
        </div>
          <div className="slideshow-nav">
            <button className="slideshow-nav-left slideshow-nav-button"></button>
            <button className="slideshow-nav-right slideshow-nav-button"></button>
          </div>
        <div className="details-frame">
          <h1>{currentFocus.title}</h1>
          <p>{currentFocus.body}</p>
          <a href="/" className="shop-now">
            Shop Now
            <img src={iconArrow} alt="Arrow"/>
            </a>
        </div>
        <div className="image image-left footer-images" style={{backgroundImage: `url(${about1})`}}></div>
        <div className="description-frame">
          <h4>About Our Furniture</h4>
          <p>Our multifunctional collection blends design and function to suit your individual tast. Make each room unique or pick a cohesive theme that best expresses your interests and what inspires you. Find the furniture pieces you need from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>
        <div className="image image-right footer-images" style={{backgroundImage: `url(${about2})`}}></div>
    </div>
  );
}

export default App;
