import React, { Fragment } from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'

const Post_Details = () => {
    return (
        <Fragment>
            <Header />
            <div className="sl-site-content">
                <section className="sl-single-post-landing-section">
                    <div className="container">
                        <div className="sl-single-post-landing-img">
                            <img src="images/post-landing-img.png" alt="post-landing-img" className="img-fluid" />
                        </div>
                        <div className="row">
                            <div className="col col-12 col-md-12 col-lg-12 col-xl-8">
                                <div className="sl-single-post-content">
                                    <div className="sl-single-post-header">
                                        <div className="sl-member-detail">
                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                            <span>Kattie Roberts</span>
                                        </div>
                                        <div className="sl-post-rating">
                                            <span className="sl-post-rating-text">
                                                <span>4.5</span>
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <a href="#" className="sl-post-copy-link">
                                                <img src="images/copy-icon.svg" alt="copy-icon" className="img-fluid" />
                                                <span>Copy</span>
                                            </a>
                                        </div>
                                    </div>
                                    <h1 className="sl-section-title">The 70–20–10 System Will Help You Make Really Cool Stuff</h1>
                                    <div className="sl-single-post-content__inner">
                                        <label>Nunc ac urna et enim dictum vulputate ac sit amet augue. </label>
                                        <p>Fusce elementum porta blandit. Ut tellus nisi, facilisis eu lacinia vestibulum, tempor vel ipsum. Pellentesque dictum dictum tellus at dapibus. Aliquam erat volutpat. Mauris in est dolor. Fusce fringilla erat sed nisl bibendum
                                            ultrices. Proin aliquet ex nec augue tempor, imperdiet aliquet quam imperdiet. Nunc id semper mauris. Integer blandit lacus ac velit interdum, et luctus ligula scelerisque. Cras tempor odio imperdiet, semper magna nec,
                                            rhoncus dui. Integer sollicitudin bibendum nibh, id viverra metus pretium ac. Phasellus ut felis enim.</p>
                                        <label>Vestibulum vestibulum lobortis suscipit.</label>
                                        <p>Donec vitae quam a magna blandit vehicula. Etiam neque nibh, malesuada quis lorem eu, tristique tincidunt urna. Etiam tempus augue nec augue maximus, nec elementum nunc luctus. Vestibulum finibus, massa et lobortis scelerisque,
                                            justo ex sagittis nisi, eu semper lectus ante nec velit. Fusce et placerat leo. Nunc suscipit tempus metus non hendrerit. Fusce mattis lorem non nisi dapibus, eget tincidunt elit tincidunt.<br /> Nam eu accumsan enim.
                                            Duis mollis, felis nec auctor cursus, justo leo vulputate mi, scelerisque vehicula velit magna et magna. Duis faucibus eros mi, ut fringilla lorem viverra eu. Cras ultricies quis tortor at pharetra. Nulla id eros ut
                                            arcu maximus consequat nec et magna. Fusce dictum fermentum dolor eget mattis. </p>
                                        <label>Donec lacinia leo volutpat, finibus orci vel, laoreet eros. </label>
                                        <p>Morbi tristique quis mauris in mollis. Ut pellentesque metus in semper fringilla. Vivamus blandit, arcu nec imperdiet bibendum, massa mi euismod ipsum, et condimentum orci nisl eget elit. Maecenas ac iaculis sem. Ut eget
                                            est porta, elementum sem in, bibendum lorem. Ut vestibulum condimentum eros id accumsan. Aliquam in dolor nec ipsum sagittis tincidunt nec vel sem. Donec vitae quam a magna blandit vehicula. Etiam neque nibh, malesuada
                                            quis lorem eu, tristique tincidunt urna. Etiam tempus augue nec augue maximus, nec elementum nunc luctus. Vestibulum finibus, massa et lobortis scelerisque, justo ex sagittis nisi, eu semper lectus ante nec velit. Fusce
                                            et placerat leo. Nunc suscipit tempus metus non hendrerit. Fusce mattis lorem non nisi dapibus, eget tincidunt elit tincidunt.<br /> Nam eu accumsan enim. Duis mollis, felis nec auctor cursus, justo leo vulputate mi,
                                            scelerisque vehicula velit magna et magna. Duis faucibus eros mi, ut fringilla lorem viverra eu. Cras ultricies quis tortor at pharetra. Nulla id eros ut arcu maximus consequat nec et magna. </p>
                                        <label>Etiam neque nibh, malesuada quis lorem eu, tristique tincidunt urna.</label>
                                        <p>Etiam tempus augue nec augue maximus, nec elementum nunc luctus. Vestibulum finibus, massa et lobortis scelerisque, justo ex sagittis nisi, eu semper lectus ante nec velit. Fusce et placerat leo. Nunc suscipit tempus metus
                                            non hendrerit. Fusce mattis lorem non nisi dapibus, eget tincidunt elit tincidunt.<br />Nam eu accumsan enim. Duis mollis, felis nec auctor cursus, justo leo vulputate mi, scelerisque vehicula velit magna et magna. Duis
                                            faucibus eros mi, ut fringilla lorem viverra eu. Cras ultricies quis tortor at pharetra. Nulla id eros ut arcu maximus consequat nec et magna. </p>
                                    </div>
                                    <div className="sl-single-post-footer">
                                        <div className="sl-single-post-like-btn">
                                            <div className="sl-single-post-like-btn__inner">
                                                <div className="sl-post-rating-content">
                                                    <label className="sl-post-rating-label">Please rate the post</label>
                                                    <ul className="sl-post-rating-list">
                                                        <li className="sl-post-rating-item">
                                                            <i className="far fa-star"></i>
                                                        </li>
                                                        <li className="sl-post-rating-item">
                                                            <i className="far fa-star"></i>
                                                        </li>
                                                        <li className="sl-post-rating-item">
                                                            <i className="far fa-star"></i>
                                                        </li>
                                                        <li className="sl-post-rating-item">
                                                            <i className="far fa-star"></i>
                                                        </li>
                                                        <li className="sl-post-rating-item">
                                                            <i className="far fa-star"></i>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <img src="images/activity-liked-icon.png" alt="activity-liked-icon" className="img-fluid" />
                                            </div>
                                            <span className="sl-post-like-count">1456</span>
                                            <p className="sl-post-rated-description">You liked this post</p>
                                        </div>
                                        <div className="sl-single-post-share-btn-list">
                                            <a href="#">
                                                <img src="images/twitter-img.png" alt="twitter-img" className="img-fluid" />
                                            </a>
                                            <a href="#">
                                                <img src="images/facebook-icon.png" alt="facebook-icon" className="img-fluid" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-md-12 col-lg-12 col-xl-4">
                                <div className="sl-similar-post-content">
                                    <h3 className="sl-section-subtitle">Similar Posts</h3>
                                    <div className="row justify-content-center">
                                        <div className="col col-12 col-md-6 col-lg-4 col-xl-12">
                                            <div className="sl-communities-card">
                                                <div className="sl-communities-card-img">
                                                    <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                                </div>
                                                <div className="sl-communities-card-body">
                                                    <div className="sl-communities-card-header">
                                                        <div className="sl-member-detail">
                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                            <span>Kattie Roberts</span>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-12 col-md-6 col-lg-4 col-xl-12">
                                            <div className="sl-communities-card">
                                                <div className="sl-communities-card-img">
                                                    <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                                </div>
                                                <div className="sl-communities-card-body">
                                                    <div className="sl-communities-card-header">
                                                        <div className="sl-member-detail">
                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                            <span>Kattie Roberts</span>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-12 col-md-6 col-lg-4 col-xl-12">
                                            <div className="sl-communities-card">
                                                <div className="sl-communities-card-img">
                                                    <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                                </div>
                                                <div className="sl-communities-card-body">
                                                    <div className="sl-communities-card-header">
                                                        <div className="sl-member-detail">
                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                            <span>Kattie Roberts</span>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Post_Details