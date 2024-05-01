import React from 'react'

const HeroSection = () => {
    return (
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
    )
}

export default HeroSection