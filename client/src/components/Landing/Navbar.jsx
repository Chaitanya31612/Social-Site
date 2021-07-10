import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [mobileview, setMobileview] = useState(false);

  // determine mobileview
  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => {
      resize();
    };
  }, []);

  const resize = () => {
    setMobileview(window.innerWidth <= 750);
  };

  return mobileview ? (
    <div class='navigation'>
      <input type='checkbox' class='navigation__checkbox' id='navi-toggle' />
      <label for='navi-toggle' class='navigation__button'>
        <span class='navigation__icon'>&nbsp;</span>
      </label>

      <div class='navigation__background'>&nbsp;</div>

      <nav class='navigation__nav'>
        <ul class='navigation__list'>
          <li class='navigation__item'>
            <a href='#' class='navigation__link'>
              Home
            </a>
          </li>
          <li class='navigation__item'>
            <a href='#' class='navigation__link'>
              About
            </a>
          </li>
          <li class='navigation__item'>
            <a href='#' class='navigation__link'>
              Services
            </a>
          </li>
          <li class='navigation__item'>
            <a href='#' class='navigation__link'>
              Our Team
            </a>
          </li>
          <li class='navigation__item'>
            <a href='#' class='navigation__link'>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  ) : (
      <div className={'nav'}>
        <Link to="/" style={{textDecoration: 'none'}}>
          <h1 className="nav__logo">Social Site</h1>
        </Link>
        <nav className="nav__nav">
          <ul className="nav__list">
            <li className="nav__list-item">
              <a className="nav__list-link" href="#home">Home</a>
            </li>
            <li className="nav__list-item">
              <a className="nav__list-link" href="#about">About</a>
            </li>
            <li className="nav__list-item">
              <a className="nav__list-link" href="#services">Services</a>
            </li>
            <li className="nav__list-item">
              <a className="nav__list-link" href="#team">Our Team</a>
            </li>
            <li className="nav__list-item">
              <a className="nav__list-link" href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="nav__cta">
          <Link to="/login" className="nav__cta-login">Log In</Link>
          <Link to="/register" className="nav__cta-register">Try it for free</Link>
        </div>
      </div>
  );
};
export default Navbar;
