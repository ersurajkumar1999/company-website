import React from 'react'
import logo from "./assets/images/logo/logo.svg";
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
                                        <li className="nav-item submenu"><a className="nav-link" href="#">pages</a>
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

        </>
    )
}

export default Home