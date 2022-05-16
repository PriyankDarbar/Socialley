import React, { Fragment } from 'react'

const Landing_Footer = () => {
    return (
        <Fragment>
            <div className="sl-site-footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col col-6 col-md-3 col-lg-2">
                            <div className="sl-footer-content">
                                <div className="sl-footer-logo">
                                    <a href="index.html">
                                        <img src="images/logo.png" alt="Logo" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col col-6 col-md-3 col-lg-2">
                            <div className="sl-footer-content">
                                {/* <!-- <h4 className="sl-footer-menu-title">About Us</h4>--> */}
                                <ul className="sl-footer-menu-list">
                                    <li className="sl-footer-menu-item">
                                        <a href="#" className="sl-footer-menu-link">Health &amp; Wellness</a>
                                    </li>
                                    {/* <!-- <li className="sl-footer-menu-item">
                                <a href="#" className="sl-footer-menu-link">Fitness & Nutrition</a>
                            </li> -->
                            <!-- <li className="sl-footer-menu-item">
                                <a href="#" className="sl-footer-menu-link">Travel & Sightseeing</a>
                            </li> --> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-12 col-md-4 col-lg-5">
                            <div className="sl-footer-content">
                                <div className="sl-site-info">
                                    <h4 className="sl-site-info-title">About SOCIALLY.UK</h4>
                                    <p className="sl-site-info-description">Our technology enable communities to collaborate on shared interest, to create activity, build a community and improve their well-being.</p>
                                    <a href="#" className="sl-site-info-link">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-md-4 col-lg-3">
                            <div className="sl-footer-content">
                                <div className="sl-site-info">
                                    <h4 className="sl-site-info-title">Follow us on</h4>
                                    <ul className="sl-social-media-list">
                                        <li className="sl-social-media-item">
                                            <a target="_blank" href="https://twitter.com/socialleyo" className="sl-social-media-link">
                                                <img src="images/twitter.png" alt="Twitter" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-social-media-item">
                                            <a target="_blank" href="#" className="sl-social-media-link">
                                                <img src="images/loop.png" alt="Twitter" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-social-media-item">
                                            <a target="_blank" href="https://www.instagram.com/socialley_official/" className="sl-social-media-link">
                                                <img src="images/instagram.png" alt="instagram" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-social-media-item">
                                            <a target="_blank" href="#" className="sl-social-media-link">
                                                <img src="images/youtube-icon.png" alt="youtube-icon" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-social-media-item">
                                            <a target="_blank" href="https://www.linkedin.com/company/socialley-uk/about/?viewAsMember=true" className="sl-social-media-link">
                                                <img src="images/linkedin.png" alt="linkedin" className="img-fluid" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sl-copyright-content">
                    <div className="container">
                        <p className="sl-copyright-text">© copyright 2022 I-Tran Digital</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Landing_Footer