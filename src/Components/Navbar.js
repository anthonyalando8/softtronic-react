import React, { useState } from 'react'
import "./NavbarStyle.css"
import {FaBars, FaFacebook, FaLinkedin, FaTimes, FaTwitter} from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [shownav, setShownav] =  useState(false);
    const handleShownav = () => setShownav(!shownav);
  return (
    <>
    <div className='header'>
        <div className='nav-top p'>
            Accelerate your digital growth, Transform your business with our unified Solutions.
            <ul className='social-links font-bold'>
                <li>
                    <Link to=""><FaFacebook/></Link>
                </li>
                <li>
                    <Link to=""><FaTwitter/></Link>
                </li>
                <li>
                    <Link to=""><FaLinkedin/></Link>
                </li>
                <li>
                    <Link to="tel:+254700536326">C</Link>
                </li>
            </ul>
        </div>
        <div className='nav-menu p'>
            <Link to="/" className='font-bold logo'>SOFTTRONIC</Link>
            <ul className={shownav ? "nav-links nav-active" : "nav-links"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/support">Support</Link>
                </li>
                <li>
                    <Link to="/support">FAQs</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/blog" className='btn-blog'>Blog</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleShownav}>{
                shownav ? (<FaTimes size={24}/>) : (<FaBars size={24}/>)
            }  
            </div>
        </div>
    </div>
     </>
  )
}

export default Navbar