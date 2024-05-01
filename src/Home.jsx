import React from 'react'
import logo from "./assets/images/logo/logo.svg";
import postImage from "./assets/images/post/post.jpg";
import { FaAngleDown } from "react-icons/fa";

const Home = () => {
    return (
        <>
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

            <div className="hero">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="hero-content">
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">about our Company</h3>
                                    <h1 className="text-anime-style-3">Web Design, SEO & Internet Marketing For <span>Your Business</span></h1>
                                </div>
                                <div className="hero-body">
                                    <p className="wow fadeInUp" data-wow-delay="0.5s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo veritatis et quasi architecto beatae vitae dicta sunt.</p>
                                </div>
                                <div className="hero-footer">
                                    <a href="#" className="btn-default wow fadeInUp" data-wow-delay="0.75s">free consultation</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="hero-video-image">
                                <div className="hero-image">
                                    <figure className="image-anime reveal">
                                        <img src="images/hero-img.jpg" alt="" />
                                    </figure>
                                </div>

                                <div className="hero-play-button">
                                    <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video"><i className="fa-solid fa-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-us">
                <div className="container">
                    <div className="row section-row align-items-center">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">about Company</h3>
                                <h2 className="text-anime-style-3">Websites that tell your brand's story</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <div className="about-img">
                                    <figure className="image-anime reveal">
                                        <img src="images/about-us-img.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="about-consultation">
                                    <figure>
                                        <img src="images/about-circle.png" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <p className="wow fadeInUp" data-wow-delay="0.25s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium , totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</p>

                                <p className="wow fadeInUp" data-wow-delay="0.5s">totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae vitae dicta sunt explicabo. sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

                                <p className="wow fadeInUp" data-wow-delay="0.75s">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>

                                <ul className="wow fadeInUp" data-wow-delay="1s">
                                    <li>Ease of Scalability</li>
                                    <li>Instant Impact</li>
                                    <li>Expertise and Experience</li>
                                    <li>Time Zone Aligned</li>
                                    <li>Full Flexibility</li>
                                    <li>Proactive Support</li>
                                </ul>

                                <a href="#" className="btn-default wow fadeInUp" data-wow-delay="1.25s">free consultation</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-services">
                <div className="container">
                    <div className="row section-row align-items-center">
                        <div className="col-lg-7 col-md-7">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">our services</h3>
                                <h2 className="text-anime-style-3">What we can offer today</h2>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-5">
                            <div className="section-btn">
                                <a href="#" className="btn-default wow fadeInUp" data-wow-delay="0.25s">view all services</a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item wow fadeInUp" data-wow-delay="0.25s">
                                <div className="service-content">
                                    <div className="service-content-title">
                                        <h2>web development</h2>
                                        <a href="#"><img src="images/arrow.svg" alt="" /></a>
                                    </div>
                                    <p>totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.</p>
                                </div>
                                <div className="service-image">
                                    <figure className="image-anime">
                                        <img src="images/service-img-1.jpg" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-item wow fadeInUp" data-wow-delay="0.5s">
                                <div className="service-content">
                                    <div className="service-content-title">
                                        <h2>Digital Marketing</h2>
                                        <a href="#"><img src="images/arrow.svg" alt="" /></a>
                                    </div>
                                    <p>totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.</p>
                                </div>
                                <div className="service-image">
                                    <figure className="image-anime">
                                        <img src="images/service-img-2.jpg" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-item wow fadeInUp" data-wow-delay="0.75s">
                                <div className="service-content">
                                    <div className="service-content-title">
                                        <h2>Game Development</h2>
                                        <a href="#"><img src="images/arrow.svg" alt="" /></a>
                                    </div>
                                    <p>totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.</p>
                                </div>
                                <div className="service-image">
                                    <figure className="image-anime">
                                        <img src="images/service-img-3.jpg" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-item wow fadeInUp" data-wow-delay="1s">
                                <div className="service-content">
                                    <div className="service-content-title">
                                        <h2>Mobile App Development</h2>
                                        <a href="#"><img src="images/arrow.svg" alt="" /></a>
                                    </div>
                                    <p>totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.</p>
                                </div>
                                <div className="service-image">
                                    <figure className="image-anime">
                                        <img src="images/service-img-4.jpg" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-item wow fadeInUp" data-wow-delay="1.25s">
                                <div className="service-content">
                                    <div className="service-content-title">
                                        <h2>Networking Services</h2>
                                        <a href="#"><img src="images/arrow.svg" alt="" /></a>
                                    </div>
                                    <p>totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.</p>
                                </div>
                                <div className="service-image">
                                    <figure className="image-anime">
                                        <img src="images/service-img-5.jpg" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-item wow fadeInUp" data-wow-delay="1.5s">
                                <div className="service-content">
                                    <div className="service-content-title">
                                        <h2>Graphics Design</h2>
                                        <a href="#"><img src="images/arrow.svg" alt="" /></a>
                                    </div>
                                    <p>totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.</p>
                                </div>
                                <div className="service-image">
                                    <figure className="image-anime">
                                        <img src="images/service-img-6.jpg" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-work">
                <div className="container">
                    <div className="row section-row align-items-center">
                        <div className="col-lg-8 col-md-9">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">our works</h3>
                                <h2 className="text-anime-style-3">Excellence from concept to completion</h2>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-3">
                            <div className="section-btn wow fadeInUp" data-wow-delay="0.25s">
                                <a href="#" className="btn-default">all portfolio</a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="works-item wow fadeInUp" data-wow-delay="0.25s">
                                <div className="works-image">
                                    <figure className="image-anime">
                                        <img src="images/works-img-1.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="works-content">
                                    <h2>Operation Atlas</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="works-item wow fadeInUp" data-wow-delay="0.5s">
                                <div className="works-image">
                                    <figure className="image-anime">
                                        <img src="images/works-img-2.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="works-content">
                                    <h2>Quantum Quest</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="works-item wow fadeInUp" data-wow-delay="0.75s">
                                <div className="works-image">
                                    <figure className="image-anime">
                                        <img src="images/works-img-3.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="works-content">
                                    <h2>Blue Horizon Initiative</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="works-item wow fadeInUp" data-wow-delay="1s">
                                <div className="works-image">
                                    <figure className="image-anime">
                                        <img src="images/works-img-4.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="works-content">
                                    <h2>Project Alpha</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="why-choose-us">
                <div className="container">
                    <div className="row section-row align-items-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">why choose us</h3>
                                <h2 className="text-anime-style-3">Why choose us ?</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="why-choose-us-item wow fadeInUp" data-wow-delay="0.25s">
                                <div className="icon-box">
                                    <img src="images/icon-whyus-1.svg" alt="" />
                                </div>
                                <h3>innovation</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="why-choose-us-item wow fadeInUp" data-wow-delay="0.5s">
                                <div className="icon-box">
                                    <img src="images/icon-whyus-2.svg" alt="" />
                                </div>
                                <h3>quality-focused</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="why-choose-us-item wow fadeInUp" data-wow-delay="0.75s">
                                <div className="icon-box">
                                    <img src="images/icon-whyus-3.svg" alt="" />
                                </div>
                                <h3>value for money</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="why-us-explore-item">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="why-us-section-title">
                                            <div className="section-title">
                                                <h2 className="text-anime-style-3">Do you want to explore our outstanding work?</h2>
                                            </div>

                                            <div className="explore-item-icon">
                                                <img src="images/icon-whyus-4.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="explore-item-content wow fadeInUp" data-wow-delay="0.25s">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium , totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="explore-item-tags wow fadeInUp" data-wow-delay="0.25s">
                                            <ul>
                                                <li><a href="#" className="btn-default">dribbble</a></li>
                                                <li><a href="#" className="btn-default">linkedin</a></li>
                                                <li><a href="#" className="btn-default">contact Us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="exclusive-partners">
                <div className="container">
                    <div className="row section-row align-items-center">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">executive partners</h3>
                                <h2 className="text-anime-style-3">100+ Partners & supporters</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="0.2s">
                                <img src="images/icon-partners-1.svg" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="0.4s">
                                <img src="images/icon-partners-2.svg" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="0.6s">
                                <img src="images/icon-partners-3.svg" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="0.8s">
                                <img src="images/icon-partners-4.svg" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="1s">
                                <img src="images/icon-partners-3.svg" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="1.2s">
                                <img src="images/icon-partners-4.svg" alt="" />


                                <div className="col-lg-3 col-6">
                                    <div className="partners-logo wow fadeInUp" data-wow-delay="1.4s">
                                        <img src="images/icon-partners-1.svg" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-6">
                                    <div className="partners-logo wow fadeInUp" data-wow-delay="1.6s">
                                        <img src="images/icon-partners-2.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="clients-testimonials">
                <div className="container">
                    <div className="row section-row align-items-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">client testimonials</h3>
                                <h2 className="text-anime-style-3">Our customers love us.</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="testimonial-slider">
                                <div className="swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="testimonial-item">
                                                <div className="testimonial-rating">
                                                    <img src="images/icon-star.svg" alt="" />
                                                </div>

                                                <div className="testimonial-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                                </div>

                                                <div className="testimonial-body">
                                                    <figure className="image-anime">
                                                        <img src="images/author-1.jpg" alt="" />
                                                    </figure>
                                                    <div className="testimonial-author-title">
                                                        <h2>John Doe</h2>
                                                        <p>Acme Solutions</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial-item">
                                                <div className="testimonial-rating">
                                                    <img src="images/icon-star.svg" alt="" />
                                                </div>

                                                <div className="testimonial-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                                </div>

                                                <div className="testimonial-body">
                                                    <figure className="image-anime">
                                                        <img src="images/author-2.jpg" alt="" />
                                                    </figure>
                                                    <div className="testimonial-author-title">
                                                        <h2>Arita Banson</h2>
                                                        <p>Delta Innovation</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial-item">
                                                <div className="testimonial-rating">
                                                    <img src="images/icon-star.svg" alt="" />
                                                </div>

                                                <div className="testimonial-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                                </div>

                                                <div className="testimonial-body">
                                                    <figure className="image-anime">
                                                        <img src="images/author-3.jpg" alt="" />
                                                    </figure>
                                                    <div className="testimonial-author-title">
                                                        <h2>Banson Doe</h2>
                                                        <p>Horizon Ventures</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial-item">
                                                <div className="testimonial-rating">
                                                    <img src="images/icon-star.svg" alt="" />
                                                </div>

                                                <div className="testimonial-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                                </div>

                                                <div className="testimonial-body">
                                                    <figure className="image-anime">
                                                        <img src="images/author-2.jpg" alt="" />
                                                    </figure>
                                                    <div className="testimonial-author-title">
                                                        <h2>John Doe</h2>
                                                        <p>Omega Solutions</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="latest-news">
                <div className="container">
                    <div className="row section-row align-items-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">Latest Blog & Articles</h3>
                                <h2 className="text-anime-style-3">The latest insights you need to know</h2>
                            </div>

                        </div>

                        <div className="col-lg-6 col-md-4">
                            <div className="section-btn wow fadeInUp" data-wow-delay="0.25s">
                                <a href="#" className="btn-default">view all articles</a>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">

                            <div className="blog-item wow fadeInUp" data-wow-delay="0.25s">

                                <div className="post-featured-image">
                                    <figure className="image-anime">
                                        <a href="#"><img src="images/post-1.jpg" alt="" /></a>
                                    </figure>
                                </div>



                                <div className="post-item-body">
                                    <p><a href="#">10 April 2024</a></p>
                                    <h2><a href="#">Unlocking the Potential of AI in Business Success</a></h2>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6">

                            <div className="blog-item wow fadeInUp" data-wow-delay="0.5s">

                                <div className="post-featured-image">
                                    <figure className="image-anime">
                                        <a href="#"><img src="images/post-2.jpg" alt="" /></a>
                                    </figure>

                                    <div className="post-item-body">
                                        <p><a href="#">10 April 2024</a></p>
                                        <h2><a href="#">Strategies for Building a Successful Distributed Team</a></h2>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">

                                <div className="blog-item wow fadeInUp" data-wow-delay="0.75s">

                                    <div className="post-featured-image">
                                        <figure className="image-anime">
                                            <a href="#"><img src="images/post-3.jpg" alt="" /></a>
                                        </figure>
                                    </div>



                                    <div className="post-item-body">
                                        <p><a href="#">10 April 2024</a></p>
                                        <h2><a href="#">Empowering Citizen Developers and Accelerating Innovation</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="latest-news">
                <div className="container">
                    <div className="row section-row align-items-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">Latest Blog & Articles</h3>
                                <h2 className="text-anime-style-3">The latest insights you need to know</h2>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-4">
                            <div className="section-btn wow fadeInUp" data-wow-delay="0.25s">
                                <a href="#" className="btn-default">view all articles</a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item wow fadeInUp" data-wow-delay="0.25s">
                                <div className="post-featured-image">
                                    <figure className="image-anime">
                                        <a href="#"><img src={postImage} alt="" /></a>
                                    </figure>
                                </div>
                                <div className="post-item-body">
                                    <p><a href="#">10 April 2024</a></p>
                                    <h2><a href="#">Unlocking the Potential of AI in Business Success</a></h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item wow fadeInUp" data-wow-delay="0.5s">
                                <div className="post-featured-image">
                                    <figure className="image-anime">
                                        <a href="#"><img src={postImage} alt="" /></a>
                                    </figure>
                                </div>
                                <div className="post-item-body">
                                    <p><a href="#">10 April 2024</a></p>
                                    <h2><a href="#">Strategies for Building a Successful Distributed Team</a></h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item wow fadeInUp" data-wow-delay="0.75s">
                                <div className="post-featured-image">
                                    <figure className="image-anime">
                                        <a href="#"><img src={postImage} alt="" /></a>
                                    </figure>
                                </div>
                                <div className="post-item-body">
                                    <p><a href="#">10 April 2024</a></p>
                                    <h2><a href="#">Empowering Citizen Developers and Accelerating Innovation</a></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mega-footer">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="footer-about">
                                            <figure>
                                                <img src={logo} alt="" />
                                            </figure>
                                            <p>Creative Agency Based on Lorem Ipsum</p>
                                            <ul>
                                                <li><a href="#">info@domainname.com</a></li>
                                                <li><a href="#">(+0) 123 456 789</a></li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="col-lg-2 col-md-4">

                                        <div className="footer-links">
                                            <h2>pages</h2>
                                            <ul>
                                                <li><a href="#">Home</a></li>
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Services</a></li>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-2 col-md-4">
                                        <div className="footer-links">
                                            <h2>Socials</h2>
                                            <ul>
                                                <li><a href="#">instagram</a></li>
                                                <li><a href="#">facebook</a></li>
                                                <li><a href="#">twitter</a></li>
                                                <li><a href="#">linkedin</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-2 col-md-4">
                                        <div className="footer-links">
                                            <h2>services</h2>
                                            <ul>
                                                <li><a href="#">web development</a></li>
                                                <li><a href="#">digital marketing</a></li>
                                                <li><a href="#">game development</a></li>
                                                <li><a href="#">mobile app development</a></li>
                                                <li><a href="#">networking services</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="footer-copyright-text">
                                        <p>Copyright © 2024 weebix. All rights reserved.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="footer-policy-links">
                                        <ul>
                                            <li><a href="#">privacy policy</a></li>
                                            <li><a href="#">terms of service</a></li>
                                            <li className="highlighted"><a href="#top">go to top</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Home