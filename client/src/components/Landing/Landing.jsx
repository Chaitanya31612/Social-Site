import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { ChevronDoubleUpIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

import HeroLogo from '../../assets/svgs/hero-brainstorm.svg'

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
    <div className="landing">
      <a id="top"></a>

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
