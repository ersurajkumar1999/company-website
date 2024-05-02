import React, { useState } from 'react';
import logo from "./../../assets/images/logo/logo.svg";
import { FaAngleDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="main-header">
            <div className="header-sticky">
                <nav className={`navbar navbar-expand-lg ${isMenuOpen ? 'open' : ''}`}>
                    <div className="container">
                        {/* <a  href="index.html"> */}
                        <Link to={'/'} className="navbar-brand">                            <img src={logo} height={50} alt="Logo" />
                        </Link>
                        <a className="navbar-toggle" onClick={toggleMenu}>
                            {
                                isMenuOpen ? <MdClose fontSize={'40px'} /> : <GiHamburgerMenu fontSize={'40px'} />
                            }
                        </a>
                        <div className={`collapse navbar-collapse main-menu ${isMenuOpen ? 'show' : ''}`}>
                            <div className="nav-menu-wrapper">
                                <ul className="navbar-nav mr-auto" id="menu">
                                    {/* <li className="nav-item submenu"><a className="nav-link" href="index.html">home</a>
                                        <ul>
                                            <li className="nav-item"><a className="nav-link" href="index-2.html">Hero Layout 1</a></li>
                                            <li className="nav-item"><a className="nav-link" href="index-3.html">Hero Layout 2</a></li>
                                            <li className="nav-item"><a className="nav-link" href="index-4.html">Hero Layout 3</a></li>
                                        </ul>
                                    </li> */}
                                    <li className="nav-item"><Link to={'/'} className="nav-link">Home</Link> </li>
                                    <li className="nav-item"><Link to={'/about-us'} className="nav-link">About Us</Link> </li>
                                    <li className="nav-item"><Link to={'/services'} className="nav-link">Services</Link> </li>
                                    <li className="nav-item"><Link to={'contact-us'} className="nav-link">Contact Us</Link> </li>
                                    {/* <li className="nav-item submenu"><a className="nav-link" href="#">pages <FaAngleDown /></a>
                                        <ul>
                                            <li className="nav-item"><a className="nav-link" href="service-single.html">service details</a></li>
                                            <li className="nav-item"><a className="nav-link" href="portfolio-single.html">portfolio details </a></li>
                                            <li className="nav-item"><a className="nav-link" href="blog-single.html">blog details</a></li>
                                            <li className="nav-item"><a className="nav-link" href="faqs.html">FAQ</a></li>
                                            <li className="nav-item"><a className="nav-link" href="404.html">404</a></li>
                                        </ul>
                                    </li> */}
                                    <li className="nav-item highlighted-menu"><a className="nav-link" href="contact-us.html">free consultation</a></li>
                                </ul>
                            </div>
                            <div className="header-btn d-inline-flex">
                                {/* <a href="contact-us.html" className="btn-default">free consultation</a> */}
                                <button className="btn-default">free consultation1111</button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="responsive-menu"></div>
            </div>
        </header>
    );
}

export default Header;
