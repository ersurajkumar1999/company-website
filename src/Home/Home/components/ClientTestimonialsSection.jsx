import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import authorImage from "./../../../assets/images/testimonial/author-1.jpg";
import { CiStar } from "react-icons/ci";

const ClientTestimonialsSection = () => {
    const testimonials = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    return (
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
                                    <Swiper
                                        spaceBetween={50}
                                        slidesPerView={3}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        loop={true}
                                        // autoplay={{
                                        //     delay: 500,
                                        //     disableOnInteraction: false
                                        // }}
                                        autoplay={true}
                                    >
                                        {
                                            testimonials.map((testimonials) => (
                                                <SwiperSlide key={testimonials}>
                                                    <div className="swiper-slide">
                                                        <div className="testimonial-item">
                                                            <div className="testimonial-rating">
                                                                <CiStar />
                                                                <CiStar />
                                                                <CiStar />
                                                                <CiStar />
                                                                <CiStar />
                                                                {/* <img src={"images/icon-star.svg"} alt="" /> */}
                                                            </div>

                                                            <div className="testimonial-content">
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                                            </div>

                                                            <div className="testimonial-body">
                                                                <figure className="image-anime">
                                                                    <img src={authorImage} alt="" />
                                                                </figure>
                                                                <div className="testimonial-author-title">
                                                                    <h2>John Doe</h2>
                                                                    <p>Acme Solutions</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </div>
                                {/* <div className="swiper-wrapper">
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
                                </div> */}
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientTestimonialsSection