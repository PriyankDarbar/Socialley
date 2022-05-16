import React, { Fragment } from 'react'
import Footer from '../layouts/Footer'
import Landing_Footer from '../layouts/Landing_Footer';
import Landing_Header from '../layouts/Landing_Header';

const Landing = () => {
    return (
        <Fragment>
            <Landing_Header />
            <div className='sl-site'>
                <div className="sl-site-content">
                    <section className="sl-latest-landing-section">
                        <img src="images/landing-img.png" alt="landing-img" className="img-fluid w-100" />
                        <div className="sl-latest-landing-content">
                            <div className="container">
                                <label className="sl-latest-landing-label">Welcome to</label>
                                <h2 className="sl-latest-landing-title">SOCIALLEY</h2>
                                <p className="sl-latest-landing-description">“ Improve your well-being, build a community “</p>
                                <a href="#" className="btn btn-success">Try for free</a>
                            </div>
                        </div>
                    </section>

                    <section className="sl-we-improve-section">
                        <div className="container">
                            <div className="sl-we-improve-content">
                                <h2 className="sl-we-improve-title">We Aim To Help You Improve Your</h2>
                                <div className="row">
                                    <div className="col col-12 col-md-4 col-lg-4">
                                        <div className="sl-we-improve-card">
                                            <div className="sl-we-improve-icon">
                                                <img src="images/yoga-pose.png" alt="yoga-pose" className="img-fluid" />
                                            </div>
                                            <div className="sl-we-improve-body">
                                                <h3 className="sl-we-improve-card-title">Physical Well-being</h3>
                                                <p className="sl-we-improve-description">Are you active enough? Are you listening to your body? Learn how to immprove and boost your physical well-being.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-4 col-lg-4">
                                        <div className="sl-we-improve-card">
                                            <div className="sl-we-improve-icon">
                                                <img src="images/yoga-1.png" alt="yoga-1" className="img-fluid" />
                                            </div>
                                            <div className="sl-we-improve-body">
                                                <h3 className="sl-we-improve-card-title">Emotional Well-being</h3>
                                                <p className="sl-we-improve-description">Are you giving out positive emotions? Are you managing negative emotions effectively? Learn how to improve your emotional well-being.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-4 col-lg-4">
                                        <div className="sl-we-improve-card">
                                            <div className="sl-we-improve-icon">
                                                <img src="images/interview.png" alt="interview" className="img-fluid" />
                                            </div>
                                            <div className="sl-we-improve-body">
                                                <h3 className="sl-we-improve-card-title">Social Well-being</h3>
                                                <p className="sl-we-improve-description">Are you suffering from social isolation or anxiety? Get access to the right tool to improve your social well-being.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="sl-buid-mental-section">
                        <div className="container">
                            <div className="row g-0">
                                <div className="col col-12 col-md-6 col-lg-8">
                                    <div className="sl-buid-mental-video">
                                        <img src="images/video-img.png" alt="video-img" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col col-12 col-md-6 col-lg-4">
                                    <div className="sl-buid-mental-content">
                                        <h2>Buid Mental Resilience with live video classNamees</h2>
                                        <p>Watch hundreds of live and on-demand classNamees to help you stress less, sleep more and feel happier.</p>

                                        <a href="#" className="btn btn-light">Experience Video ClassNamees</a>
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
                                        {/* <!-- <span className="input-group-text" >@example.com</span> --> */}
                                        <button className="btn btn-success input-group-text" data-bs-toggle="modal" data-bs-target="#userRegisterSuccessModal">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Landing_Footer />
        </Fragment>
    )
}

export default Landing;