
import React from 'react'
import logo from "./../../assets/images/logo/logo.svg";
import { FaAngleDown } from "react-icons/fa";
const Header = () => {
    return (
        <header className="main-header">
            <div className="header-sticky">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">
                            <img src={logo} height={50} alt="Logo" />
                        </a>
                        <div className="collapse navbar-collapse main-menu">
                            <div className="nav-menu-wrapper">
                                <ul className="navbar-nav mr-auto" id="menu">
                                    <li className="nav-item submenu"><a className="nav-link" href="index.html">home</a>
                                        <ul>
                                            <li className="nav-item"><a className="nav-link" href="index-2.html">Hero Layout 1</a></li>
                                            <li className="nav-item"><a className="nav-link" href="index-3.html">Hero Layout 2</a></li>
                                            <li className="nav-item"><a className="nav-link" href="index-4.html">Hero Layout 3</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="about.html">about us</a></li>
                                    <li className="nav-item"><a className="nav-link" href="services.html">services</a></li>
                                    <li className="nav-item"><a className="nav-link" href="portfolio.html">portfolio</a></li>
                                    <li className="nav-item"><a className="nav-link" href="blog.html">blog</a></li>
                                    <li className="nav-item submenu"><a className="nav-link" href="#">pages <FaAngleDown /></a>
                                        <ul>
                                            <li className="nav-item"><a className="nav-link" href="service-single.html">service details</a></li>
                                            <li className="nav-item"><a className="nav-link" href="portfolio-single.html">portfolio details </a></li>
                                            <li className="nav-item"><a className="nav-link" href="blog-single.html">blog details</a></li>
                                            <li className="nav-item"><a className="nav-link" href="faqs.html">FAQ</a></li>
                                            <li className="nav-item"><a className="nav-link" href="404.html">404</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item highlighted-menu"><a className="nav-link" href="contact-us.html">free consultation</a></li>
                                </ul>
                            </div>
                            <div className="header-btn d-inline-flex">
                                <a href="contact-us.html" className="btn-default">free consultation</a>
                            </div>
                        </div>

                        <div className="navbar-toggle"></div>
                    </div>
                </nav>
                <div className="responsive-menu"></div>
            </div>
        </header>
    )
}

export default Header