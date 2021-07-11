import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { ChevronDoubleUpIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

import HeroLogo from '../../assets/svgs/hero-brainstorm.svg'
import BulbLogo from '../../assets/svgs/hero-bulb.svg'
import Footer from './Footer'

const Landing = () => {
  const [navbar, setNavbar] = useState(false)

  // change background of navbar on scroll
  useEffect(() => {
    scrollTop();
    window.addEventListener("scroll", scrollTop);
    return () => {
      scrollTop();
    };
  }, []);

  const scrollTop = () => {
    setNavbar(window.scrollY >= 40)
  }

  return (
    <div>
      <a id="top"></a>
      <div className="center-content">

        <Navbar />

        {/* Hero section */}
        <div className="hero">
          {/* heading */}
          <div className="hero__main">
            <p className="hero__main--head-1">Amazing team of Engineers</p>
            <p className="hero__main--head-2">Find Solutions to all your problems in one <span className="highlight">place</span></p>
            <Link to="/login">
              <button className="hero__main--button">Ask your problem</button>
            </Link>
          </div>
          {/* image */}
          <div className="hero__image">
            <img src={HeroLogo} alt="hero" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about">
        <h1 className="heading heading--primary center-content"><span className="highlight">About</span></h1>
        <div className="about__main center-content">
          <div className="about__main-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sint tenetur blanditiis tempora iure excepturi impedit repellendus enim nemo accusamus molestias repudiandae eaque, esse itaque provident, explicabo iusto rem ipsum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sint tenetur blanditiis tempora iure excepturi impedit repellendus enim nemo accusamus molestias repudiandae eaque, esse itaque provident, explicabo iusto rem ipsum.
          </div>
          <div className="about__main-logo">
            <img src={BulbLogo} alt="bulb" />
          </div>
        </div>
      </div>

      {/* Services */}
      <div style={{height:"100vh"}}></div>


      {/* Our Team */}



      {/* Footer */}
      <Footer />


        {/* for scrolling to the top */}
        {
          navbar && (
            <a href="#top" className="scroll-top">
              <ChevronDoubleUpIcon className="scroll-top--icon" />
            </a>
          )
        }
    </div>
  )
}

export default Landing
