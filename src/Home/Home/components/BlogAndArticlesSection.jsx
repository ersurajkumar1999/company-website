import React from 'react'
import postImage from "./../../../assets/images/post/post.jpg";
const BlogAndArticlesSection = () => {
    return (
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
    )
}

export default BlogAndArticlesSection