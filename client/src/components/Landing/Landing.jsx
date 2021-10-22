import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ChevronDoubleUpIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

import HeroLogo from "../../assets/svgs/hero-brainstorm.svg";
import BulbLogo from "../../assets/svgs/hero-bulb.svg";
import Footer from "./Footer";
import ServiceItem from "./ServiceItem";

import ServicesData from "../../seeds/ServicesData";
import Team from "./Team";

const Landing = () => {
  const [navbar, setNavbar] = useState(false);

  // change background of navbar on scroll
  useEffect(() => {
    scrollTop();
    window.addEventListener("scroll", scrollTop);
    return () => {
      scrollTop();
    };
  }, []);

  const scrollTop = () => {
    setNavbar(window.scrollY >= 40);
  };

  return (
    <div>
      <div id='top'></div>
      <div className='center-content'>
        <Navbar />

        {/* Hero section */}
        <div className='hero'>
          {/* heading */}
          <div className='hero__main'>
            <p className='hero__main--head-1'>Amazing team of Engineers</p>
            <p className='hero__main--head-2'>
              Find Solutions to all your problems in one{" "}
              <span className='highlight'>place</span>
            </p>
            <Link to='/login'>
              <button className='button button--primary button--primary--small u-margin-top-medium'>
                Ask your problem
              </button>
            </Link>
          </div>
          {/* image */}
          <div className='hero__image'>
            <img src={HeroLogo} alt='hero' />
          </div>
        </div>
      </div>

      <div id='about'></div>
      {/* About Section */}
      <div className='about'>
        <h1 className='heading heading--primary center-content'>
          <span className='highlight'>About</span>
        </h1>
        <div className='about__main center-content'>
          <div className='about__main-content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus sint tenetur blanditiis tempora iure excepturi
            impedit repellendus enim nemo accusamus molestias repudiandae eaque,
            esse itaque provident, explicabo iusto rem ipsum. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Necessitatibus sint tenetur
            blanditiis tempora iure excepturi impedit repellendus enim nemo
            accusamus molestias repudiandae eaque, esse itaque provident,
            explicabo iusto rem ipsum.
          </div>
          <div className='about__main-logo'>
            <img src={BulbLogo} alt='bulb' />
          </div>
        </div>
      </div>

      <div id='services'></div>
      {/* Services */}
      <div className='services'>
        <h1 className='heading heading--primary center-content'>
          <span className='highlight'>Services</span>
        </h1>
        <div className='services__main'>
          {ServicesData &&
            ServicesData.map((service) => {
              return (
                <ServiceItem
                  key={service.index}
                  index={service.index}
                  name={service.name}
                  description={service.description}
                />
              );
            })}
        </div>
      </div>

      {/* Our Team */}
      <div id='team'></div>
      <Team />

      <div id='contact'></div>
      {/* Footer */}
      <Footer />

      {/* for scrolling to the top */}
      {navbar && (
        <a href='#top' className='scroll-top'>
          <ChevronDoubleUpIcon className='scroll-top--icon' />
        </a>
      )}
    </div>
  );
};

export default Landing;
