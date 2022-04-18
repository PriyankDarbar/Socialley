import React, { Fragment } from 'react'
import Footer from '../layouts/Footer'
import Landing_Header from '../layouts/Landing_Header';

const Landing = () => {
    return (
        <Fragment>
            <Landing_Header />
            <div className="sl-site-content">
                <section className="sl-landing-section sl-home-landing-section">
                    <div className="container">
                        <div className="sl-landing-section__inner">
                            <div className="row">
                                <div className="col col-12 col-md-6 col-lg-7">
                                    <div className="sl-landing-section-content">
                                        <div className="sl-count-down-content">
                                            <div className="sl-count-down-content__inner" id="clockdiv">
                                                <span className="sl-count-down-line-left"></span>
                                                <span className="sl-count-down-line-right"></span>
                                                <div className="sl-count-days">
                                                    <h2 className="sl-count-days-number days">81</h2>
                                                    <span className="sl-count-days-label">Days</span>
                                                </div>
                                                <div className="sl-count-hours">
                                                    <p className="sl-count-hours__inner"><label className="hours">23</label><span>H</span></p>
                                                    <p className="sl-count-hours__inner"><label className="minutes">54</label><span>MN</span></p>
                                                    <p className="sl-count-hours__inner"><label className="seconds">04</label><span>S</span></p>
                                                </div>
                                            </div>

                                            <label className="sl-count-title">Before we launch our <span>New Website</span></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-md-6 col-lg-5">
                                    <div className="sl-landing-section-content sl-home-landing-content">
                                        <h1 className="sl-section-title"><span>Welcome to</span> <br />SOCIALLEY</h1>
                                        <p className="sl-section-description">“ Improve your well-being, build a community “</p>
                                        <div className="sl-home-landing-form">
                                            <form>
                                                <div className="sl-home-landing-form__inner mb-3">
                                                    <label for="slInputemail" className="form-label">Request for early access here</label>
                                                    <div className="sl-home-landing-form-input">
                                                        <input type="email" id="slInputemail" className="form-control" placeholder="Enter your Email" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sl-home-landing-img">
                        <img src="images/new-home-landing-img.png" alt="new-home-landing-img" className="img-fluid" />
                    </div>
                </section>

                <section className="sl-new-launched-web-section">
                    <div className="sl-new-launched-web-img">
                        <img src="images/coming-web-img.png" alt="coming-web-img" className="img-fluid w-100" />
                    </div>
                    <div className="sl-new-launched-web-vector">
                        <img src="images/coming-web-vector.png" alt="coming-web-vector" className="img-fluid w-100" />
                    </div>
                </section>

                <section className="sl-improve-you-section">
                    <div className="container">
                        <h2 className="sl-section-title">We Aim To Help You Improve Your</h2>
                        <div className="row justify-content-center">
                            <div className="col col-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="sl-improve-card">
                                    <div className="sl-improve-icon">
                                        <img src="images/physical-well-being-icon.png" alt="physical-well-being-icon" className="img-fluid" />
                                    </div>
                                    <div className="sl-improve-card-body">
                                        <h3 className="sl-improve-title">Physical Well-being</h3>
                                        <p className="sl-improve-description">Are you active enough? Are you listening to your body? Learn how to immprove and boost your physical well-being</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="sl-improve-card">
                                    <div className="sl-improve-icon">
                                        <img src="images/emotional-well-being-icon.png" alt="emotional-well-being-icon" className="img-fluid" />
                                    </div>
                                    <div className="sl-improve-card-body">
                                        <h3 className="sl-improve-title">Emotional Well-being</h3>
                                        <p className="sl-improve-description">Are you giving out positive emotions? Are you managing negative emotions effectively? Learn how to improve your emotional well-being.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="sl-improve-card">
                                    <div className="sl-improve-icon">
                                        <img src="images/social-well-being-icon.png" alt="social-well-being-icon" className="img-fluid" />
                                    </div>
                                    <div className="sl-improve-card-body">
                                        <h3 className="sl-improve-title">Social Well-being</h3>
                                        <p className="sl-improve-description">Are you suffering from social isolation or anxiety? Get access to the right tool to improve your social well-being.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sl-how-work-section">
                    <div className="container">
                        <div className="sl-section-heading text-center">
                            <h2 className="sl-section-title">How it Work’s</h2>
                            <p className="sl-section-description">Our unique technology is creatively designed and easy to use. The tool covers the following areas.</p>
                        </div>
                        <div className="row">
                            <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="sl-how-work-content">
                                    <div className="sl-how-work-list">
                                        <div className="sl-how-work-item">
                                            <a href="#" className="sl-how-work-card">
                                                <span className="sl-how-work-icon">
                                                    <img src="images/tell-us-icon.png" alt="tell-us-icon" className="img-fluid" />
                                                </span>
                                                <label><span>Tell us</span>  your ongoing challenge</label>
                                            </a>
                                        </div>
                                        <div className="sl-how-work-item">
                                            <a href="#" className="sl-how-work-card">
                                                <span className="sl-how-work-icon">
                                                    <img src="images/discover-icon.png" alt="tell-us-icon" className="img-fluid" />
                                                </span>
                                                <label><span>Discover</span>  tips for improving your well-being.</label>
                                            </a>
                                        </div>
                                        <div className="sl-how-work-item">
                                            <a href="#" className="sl-how-work-card">
                                                <span className="sl-how-work-icon">
                                                    <img src="images/share-icon.png" alt="tell-us-icon" className="img-fluid" />
                                                </span>
                                                <label><span>Share</span> with your community</label>
                                            </a>
                                        </div>
                                        <div className="sl-how-work-item">
                                            <a href="#" className="sl-how-work-card">
                                                <span className="sl-how-work-icon">
                                                    <img src="images/connect-icon.png" alt="tell-us-icon" className="img-fluid" />
                                                </span>
                                                <label><span>Connect</span> based on shared interest</label>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="sl-how-work-img">
                                    <img src="images/how-work-img.png" alt="how-work-img" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sl-we-provide-section">
                    <div className="container">
                        <h2 className="sl-section-title text-center">Some of what we provide</h2>
                        <div className="row">
                            <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
                                <h3 className="sl-we-provide-title">Articles</h3>
                                <div className="sl-we-provide-card">
                                    <div className="sl-we-provide-img">
                                        <img src="images/articles-img.png" alt="articles-img" className="img-fluid" />
                                    </div>
                                    <div className="sl-we-provide-body">
                                        <div className="sl-we-provide-content">
                                            <p className="sl-section-description">Access to insightful articles and blogs, created by our experts with years of experience in Health, Fitness and Wellness.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
                                <h3 className="sl-we-provide-title">Events</h3>
                                <div className="sl-we-provide-card">
                                    <div className="sl-we-provide-img">
                                        <img src="images/events-img.png" alt="events-img" className="img-fluid" />
                                    </div>
                                    <div className="sl-we-provide-body">
                                        <div className="sl-we-provide-content">
                                            <p className="sl-section-description">Access to local and regional events, including online virtual className relevant to your preference or ongoing challenge.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
                                <h3 className="sl-we-provide-title">Communities</h3>
                                <div className="sl-we-provide-card">
                                    <div className="sl-we-provide-img">
                                        <img src="images/communities-img.png" alt="communities-img" className="img-fluid" />
                                    </div>
                                    <div className="sl-we-provide-body">
                                        <div className="sl-we-provide-content">
                                            <p className="sl-section-description">Local and regional communities, relevant to your preference and ongoing challenge, to connect and build a community.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
                                <h3 className="sl-we-provide-title">Focus music</h3>
                                <div className="sl-we-provide-card">
                                    <div className="sl-we-provide-img">
                                        <img src="images/focus-music-img.png" alt="focus-music-img" className="img-fluid" />
                                    </div>
                                    <div className="sl-we-provide-body">
                                        <div className="sl-we-provide-content">
                                            <p className="sl-section-description">Access to a wide range of playlist, depending on your need, to help you achieve your goal.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sl-our-community-section">
                    <div className="container">
                        <h2 className="sl-section-title text-center">Our Communities</h2>
                    </div>
                    <div className="sl-our-community-slider slick-initialized slick-slider"><button className="slick-prev slick-arrow" aria-label="Previous" type="button">Previous</button>




                        <div className="slick-list draggable" style={{ padding: "0px 180px" }}>
                            <div className="slick-track" style={{ opacity: "1", width: "4070px", transform: "translate3d (-814px, 0px, 0px)" }}>
                                <div className="sl-our-community-slide slick-slide slick-cloned" style={{ width: "407px", dataSlickIndex: "-2", ariaHidden: "true", tabindex: "-1" }}>
                                    <div className="sl-communities-card">
                                        <div className="sl-communities-card-img">
                                            <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                        </div>
                                        <div className="sl-communities-card-body">
                                            <div className="sl-communities-card-header">
                                                <a href="#" className="sl-communities-title" tabindex="-1">Five Signs of a Highly Intelligent Person</a>
                                                <label className="sl-communities-location">Kyiv, Ukraine</label>
                                            </div>
                                            <p className="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                        </div>
                                        <div className="sl-communities-card-footer">
                                            <ul className="sl-member-list">
                                                <li className="sl-member-item">
                                                    <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member2.png" alt="member2" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member3.png" alt="member3" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member4.png" alt="member4" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member5.png" alt="member5" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member6.png" alt="member6" className="img-fluid" />
                                                </li>
                                            </ul>
                                            <label className="sl-member-count">10 members</label>
                                        </div>
                                    </div>
                                </div><div className="sl-our-community-slide slick-slide slick-cloned" style={{ width: "407px", dataSlickIndex: "-1", ariaHidden: "true", tabindex: "-1" }}>
                                    <div className="sl-communities-card">
                                        <div className="sl-communities-card-img">
                                            <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                        </div>
                                        <div className="sl-communities-card-body">
                                            <div className="sl-communities-card-header">
                                                <a href="#" className="sl-communities-title" tabindex="-1">Five Signs of a Highly Intelligent Person</a>
                                                <label className="sl-communities-location">Kyiv, Ukraine</label>
                                            </div>
                                            <p className="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                        </div>
                                        <div className="sl-communities-card-footer">
                                            <ul className="sl-member-list">
                                                <li className="sl-member-item">
                                                    <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member2.png" alt="member2" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member3.png" alt="member3" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member4.png" alt="member4" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member5.png" alt="member5" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member6.png" alt="member6" className="img-fluid" />
                                                </li>
                                            </ul>
                                            <label className="sl-member-count">10 members</label>
                                        </div>
                                    </div>
                                </div><div className="sl-our-community-slide slick-slide slick-current slick-active slick-center" style={{ width: "407px", dataSlickIndex: "0", ariaHidden: "false", tabindex: "0" }}>
                                    <div className="sl-communities-card">
                                        <div className="sl-communities-card-img">
                                            <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                        </div>
                                        <div className="sl-communities-card-body">
                                            <div className="sl-communities-card-header">
                                                <a href="#" className="sl-communities-title" tabindex="0">Five Signs of a Highly Intelligent Person</a>
                                                <label className="sl-communities-location">Kyiv, Ukraine</label>
                                            </div>
                                            <p className="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                        </div>
                                        <div className="sl-communities-card-footer">
                                            <ul className="sl-member-list">
                                                <li className="sl-member-item">
                                                    <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member2.png" alt="member2" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member3.png" alt="member3" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member4.png" alt="member4" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member5.png" alt="member5" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member6.png" alt="member6" className="img-fluid" />
                                                </li>
                                            </ul>
                                            <label className="sl-member-count">10 members</label>
                                        </div>
                                    </div>
                                </div><div className="sl-our-community-slide slick-slide" style={{ width: "407px", dataSlickIndex: "1", ariaHidden: "true", tabindex: "-1" }}>
                                    <div className="sl-communities-card">
                                        <div className="sl-communities-card-img">
                                            <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                        </div>
                                        <div className="sl-communities-card-body">
                                            <div className="sl-communities-card-header">
                                                <a href="#" className="sl-communities-title" tabindex="-1">Five Signs of a Highly Intelligent Person</a>
                                                <label className="sl-communities-location">Kyiv, Ukraine</label>
                                            </div>
                                            <p className="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                        </div>
                                        <div className="sl-communities-card-footer">
                                            <ul className="sl-member-list">
                                                <li className="sl-member-item">
                                                    <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member2.png" alt="member2" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member3.png" alt="member3" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member4.png" alt="member4" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member5.png" alt="member5" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member6.png" alt="member6" className="img-fluid" />
                                                </li>
                                            </ul>
                                            <label className="sl-member-count">10 members</label>
                                        </div>
                                    </div>
                                </div><div className="sl-our-community-slide slick-slide" style={{ width: "407px", dataSlickIndex: "2", ariaHidden: "true", tabindex: "-1" }}>
                                    <div className="sl-communities-card">
                                        <div className="sl-communities-card-img">
                                            <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                        </div>
                                        <div className="sl-communities-card-body">
                                            <div className="sl-communities-card-header">
                                                <a href="#" className="sl-communities-title" tabindex="-1">Five Signs of a Highly Intelligent Person</a>
                                                <label className="sl-communities-location">Kyiv, Ukraine</label>
                                            </div>
                                            <p className="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                        </div>
                                        <div className="sl-communities-card-footer">
                                            <ul className="sl-member-list">
                                                <li className="sl-member-item">
                                                    <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member2.png" alt="member2" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member3.png" alt="member3" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member4.png" alt="member4" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member5.png" alt="member5" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member6.png" alt="member6" className="img-fluid" />
                                                </li>
                                            </ul>
                                            <label className="sl-member-count">10 members</label>
                                        </div>
                                    </div>
                                </div><div className="sl-our-community-slide slick-slide" style={{ width: "407px", dataSlickIndex: "3", ariaHidden: "true", tabindex: "-1" }}>
                                    <div className="sl-communities-card">
                                        <div className="sl-communities-card-img">
                                            <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                        </div>
                                        <div className="sl-communities-card-body">
                                            <div className="sl-communities-card-header">
                                                <a href="#" className="sl-communities-title" tabindex="-1">Five Signs of a Highly Intelligent Person</a>
                                                <label className="sl-communities-location">Kyiv, Ukraine</label>
                                            </div>
                                            <p className="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                        </div>
                                        <div className="sl-communities-card-footer">
                                            <ul className="sl-member-list">
                                                <li className="sl-member-item">
                                                    <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member2.png" alt="member2" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member3.png" alt="member3" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member4.png" alt="member4" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member5.png" alt="member5" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member6.png" alt="member6" className="img-fluid" />
                                                </li>
                                            </ul>
                                            <label className="sl-member-count">10 members</label>
                                        </div>
                                    </div>
                                </div><div className="sl-our-community-slide slick-slide slick-cloned" style={{ width: "407px", dataSlickIndex: "4", ariaHidden: "true", tabindex: "-1" }}>
                                    <div className="sl-communities-card">
                                        <div className="sl-communities-card-img">
                                            <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                        </div>
                                        <div className="sl-communities-card-body">
                                            <div className="sl-communities-card-header">
                                                <a href="#" className="sl-communities-title" tabindex="-1">Five Signs of a Highly Intelligent Person</a>
                                                <label className="sl-communities-location">Kyiv, Ukraine</label>
                                            </div>
                                            <p className="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                        </div>
                                        <div className="sl-communities-card-footer">
                                            <ul className="sl-member-list">
                                                <li className="sl-member-item">
                                                    <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member2.png" alt="member2" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member3.png" alt="member3" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member4.png" alt="member4" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member5.png" alt="member5" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member6.png" alt="member6" className="img-fluid" />
                                                </li>
                                            </ul>
                                            <label className="sl-member-count">10 members</label>
                                        </div>
                                    </div>
                                </div><div className="sl-our-community-slide slick-slide slick-cloned" style={{ width: "407px", dataSlickIndex: "5", ariaHidden: "true", tabindex: "-1" }}>
                                    <div className="sl-communities-card">
                                        <div className="sl-communities-card-img">
                                            <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                        </div>
                                        <div className="sl-communities-card-body">
                                            <div className="sl-communities-card-header">
                                                <a href="#" className="sl-communities-title" tabindex="-1">Five Signs of a Highly Intelligent Person</a>
                                                <label className="sl-communities-location">Kyiv, Ukraine</label>
                                            </div>
                                            <p className="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                        </div>
                                        <div className="sl-communities-card-footer">
                                            <ul className="sl-member-list">
                                                <li className="sl-member-item">
                                                    <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member2.png" alt="member2" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member3.png" alt="member3" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member4.png" alt="member4" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member5.png" alt="member5" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member6.png" alt="member6" className="img-fluid" />
                                                </li>
                                            </ul>
                                            <label className="sl-member-count">10 members</label>
                                        </div>
                                    </div>
                                </div><div className="sl-our-community-slide slick-slide slick-cloned slick-center" style={{ width: "407px", dataSlickIndex: "6", ariaHidden: "true", tabindex: "-1" }}>
                                    <div className="sl-communities-card">
                                        <div className="sl-communities-card-img">
                                            <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                        </div>
                                        <div className="sl-communities-card-body">
                                            <div className="sl-communities-card-header">
                                                <a href="#" className="sl-communities-title" tabindex="-1">Five Signs of a Highly Intelligent Person</a>
                                                <label className="sl-communities-location">Kyiv, Ukraine</label>
                                            </div>
                                            <p className="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                        </div>
                                        <div className="sl-communities-card-footer">
                                            <ul className="sl-member-list">
                                                <li className="sl-member-item">
                                                    <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member2.png" alt="member2" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member3.png" alt="member3" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member4.png" alt="member4" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member5.png" alt="member5" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member6.png" alt="member6" className="img-fluid" />
                                                </li>
                                            </ul>
                                            <label className="sl-member-count">10 members</label>
                                        </div>
                                    </div>
                                </div><div className="sl-our-community-slide slick-slide slick-cloned" style={{ width: "407px", dataSlickIndex: "7", ariaHidden: "true", tabindex: "-1" }}>
                                    <div className="sl-communities-card">
                                        <div className="sl-communities-card-img">
                                            <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                        </div>
                                        <div className="sl-communities-card-body">
                                            <div className="sl-communities-card-header">
                                                <a href="#" className="sl-communities-title" tabindex="-1">Five Signs of a Highly Intelligent Person</a>
                                                <label className="sl-communities-location">Kyiv, Ukraine</label>
                                            </div>
                                            <p className="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                        </div>
                                        <div className="sl-communities-card-footer">
                                            <ul className="sl-member-list">
                                                <li className="sl-member-item">
                                                    <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member2.png" alt="member2" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member3.png" alt="member3" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member4.png" alt="member4" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member5.png" alt="member5" className="img-fluid" />
                                                </li>
                                                <li className="sl-member-item">
                                                    <img src="images/member6.png" alt="member6" className="img-fluid" />
                                                </li>
                                            </ul>
                                            <label className="sl-member-count">10 members</label>
                                        </div>
                                    </div>
                                </div></div></div><button className="slick-next slick-arrow" aria-label="Next" type="button">Next</button></div>
                </section>

                <hr className="sl-devider" />

                <section className="sl-sound-like-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col col-12 col-md-6 cool-lg-6">
                                <div className="sl-sound-like-img">
                                    <img src="images/sound-like-img.png" alt="sound-like-img" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col col-12 col-md-6 cool-lg-6">
                                <div className="sl-sound-like-content">
                                    <div className="sl-sound-like-heading">
                                        <label className="sl-section-label">Hmm....</label>
                                        <h2 className="sl-section-title">Does this Sound Like You?</h2>
                                    </div>

                                    <div className="sl-sound-like-list">
                                        <a href="#" className="sl-sound-like-item">
                                            <h3 className="sl-sound-like-title">Feeling Anxious</h3>
                                            <p className="sl-sound-like-description">Feeling anxious about the current climate, meeting someone new or having a fear of public speaking?</p>
                                        </a>
                                        <a href="#" className="sl-sound-like-item">
                                            <h3 className="sl-sound-like-title">Keen to improve your well-being</h3>
                                            <p className="sl-sound-like-description">Feeling anxious about the current climate, meeting someone new or having a fear of public speaking?</p>
                                        </a>
                                        <a href="#" className="sl-sound-like-item">
                                            <h3 className="sl-sound-like-title">Struggling to stay focus</h3>
                                            <p className="sl-sound-like-description">Feeling anxious about the current climate, meeting someone new or having a fear of public speaking?</p>
                                        </a>
                                    </div>
                                    <a href="#" className="btn btn-success">Let’s do something about it!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sl-why-us-section">
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-md-6 col-lg-4">
                                <div className="sl-why-us-content">
                                    <h2 className="sl-section-title">Why US ?</h2>
                                    <div className="sl-why-us-list">
                                        <div className="sl-why-us-card">
                                            <h3 className="sl-why-us-title">01</h3>
                                            <p className="sl-why-us-description"><span>Our aim</span> is to support you in making an healthy choice the right choice. </p>
                                        </div>
                                        <div className="sl-why-us-card">
                                            <h3 className="sl-why-us-title">02</h3>
                                            <p className="sl-why-us-description"><span>Our mission</span> is to give you the power to create a community of likeminded individuals you share the same passion and interest with </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-md-6 col-lg-4">
                                <div className="sl-why-us-img">
                                    <img src="images/why-us-img.png" alt="why-us-img" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col col-12 col-md-12 col-lg-4">
                                <div className="sl-why-us-content">
                                    <div className="sl-why-us-list">
                                        <div className="sl-why-us-card">
                                            <h3 className="sl-why-us-title">03</h3>
                                            <p className="sl-why-us-description"><span>Our articles</span> are created and vetted by industry experts, within the health and fitness domain </p>
                                        </div>
                                        <div className="sl-why-us-card">
                                            <h3 className="sl-why-us-title">04</h3>
                                            <p className="sl-why-us-description"><span>Improving</span> your overall well-being is out outmost priority</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sl-why-us-particles-img">
                        <img src="images/why-us-particles-img.png" alt="why-us-particles-img" className="img-fluid" />
                    </div>
                </section>


                <section className="sl-call-action-section sl-improve-well-section">
                    <div className="container">
                        <div className="sl-call-action-content sl-improve-well-content">
                            <h2 className="sl-section-title">Improve your well-being, build a community.</h2>
                            <p className="sl-section-description"> The Socialley app gives you access to events, workout sessions, communities, articles and other wellness services, to help you improve your overall wellbeing. Request for early access by entering your email. </p>
                            <div className="sl-improve-well-form">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter your email" />
                                    <button className="btn btn-success input-group-text" data-bs-toggle="modal" data-bs-target="#userRegisterSuccessModal">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <div className="modal fade sl-light-modal" id="userLoginModal" tabindex="-1" aria-labelledby="userLoginLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="sl-modal-logo text-center">
                                    <img src="images/logo.png" alt="logo" className="img-fluid" />
                                </div>
                                <h5 className="modal-title" id="userLoginLabel">You must be login to interact with site</h5>
                                <div className="sl-edit-profile-content">
                                    <form className="row g-3">
                                        <div className="col-12">
                                            <label for="inputEmail" className="form-label">Email</label>
                                            <div className="sl-forminput-group">
                                                <input type="email" className="form-control" id="inputEmail" />
                                                <img src="images/user-icon.png" alt="user-icon" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="sl-forgot-pass-content">
                                                <label for="inputPassword" className="form-label">Password</label>
                                                <a href="#" className="sl-section-link" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#forgotPasswordModal">Forgot password?</a>
                                            </div>
                                            <div className="sl-forminput-group">
                                                <input type="password" className="form-control" id="inputPassword" />
                                                <img src="images/password-icon.png" alt="password-icon" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-success d-block w-100">LOGIN</button>
                                            <p className="sl-modal-description">Don’t have an account yet? <a href="#" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#userRegisterModal">Register</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div className="modal fade sl-light-modal" id="forgotPasswordModal" tabindex="-1" aria-labelledby="forgotPasswordModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h5 className="modal-title" id="forgotPasswordModalLabel">Forgot password</h5>
                                <div className="sl-edit-profile-content">
                                    <form className="row g-3">
                                        <div className="col-12">
                                            <label for="inputEmail" className="form-label">Email</label>
                                            <div className="sl-forminput-group">
                                                <input type="email" className="form-control" id="inputEmail" />
                                                <img src="images/user-icon.png" alt="user-icon" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="button" className="btn btn-success d-block w-100" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#forgotPassSuccessModal">SENT</button>
                                            <p className="sl-modal-description">Link for password genarating wil be sent to your email</p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div className="modal fade sl-light-modal" id="forgotPassSuccessModal" tabindex="-1" aria-labelledby="forgotPassSuccessModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="sl-modal-logo text-center">
                                    <img src="images/logo.png" alt="logo" className="img-fluid" />
                                </div>
                                <h5 className="modal-title" id="forgotPassSuccessModalLabel">Link is already in your inbox</h5>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* 
                <div className="modal fade sl-light-modal" id="userRegisterModal" tabindex="-1" aria-labelledby="userRegisterModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="sl-modal-logo text-center">
                                    <img src="images/logo.png" alt="logo" className="img-fluid" />
                                </div>
                                <h5 className="modal-title" id="userRegisterModalLabel">Registration</h5>
                                <div className="sl-edit-profile-content">
                                    <form className="row g-3">
                                        <div className="col-12">
                                            <label for="inputResEmail" className="form-label">Email</label>
                                            <div className="sl-forminput-group">
                                                <input type="email" className="form-control" id="inputResEmail" />
                                                <img src="images/user-icon.png" alt="user-icon" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label for="inputResPassword" className="form-label">Password</label>
                                            <div className="sl-forminput-group">
                                                <input type="password" className="form-control" id="inputResPassword" />
                                                <img src="images/password-icon.png" alt="password-icon" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label for="inputResRePassword" className="form-label">Retype password</label>
                                            <div className="sl-forminput-group">
                                                <input type="password" className="form-control" id="inputResRePassword" />
                                                <img src="images/password-icon.png" alt="password-icon" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-success d-block w-100">REGISTER</button>
                                            <p className="sl-modal-description">Alredy have an account? <a href="#" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#userLoginModal">Log in</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="modal fade sl-light-modal" id="userRegisterSuccessModal" tabindex="-1" aria-labelledby="userRegisterSuccessModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="sl-modal-logo text-center">
                                    <img src="images/logo.png" alt="logo" className="img-fluid" />
                                </div>
                                <h5 className="modal-title" id="userRegisterSuccessModalLabel">Registration SuccessFully!</h5>
                                <p className="sl-section-description mb-5 text-center">We will keep you up to date on the latest developments!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Landing;