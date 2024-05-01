import React from 'react'
import PartnersImage from "./../../../assets/images/partners/icon-partners-1.svg"
const ExclusivePartnersSection = () => {
  return (
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
                                <img src={PartnersImage} alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="0.4s">
                                <img src={PartnersImage} alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="0.6s">
                                <img src={PartnersImage} alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="0.8s">
                                <img src={PartnersImage} alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="1s">
                                <img src={PartnersImage} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="1s">
                                <img src={PartnersImage} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="1s">
                                <img src={PartnersImage} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="partners-logo wow fadeInUp" data-wow-delay="1s">
                                <img src={PartnersImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default ExclusivePartnersSection