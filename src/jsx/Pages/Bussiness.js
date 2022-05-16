import React, { Fragment } from 'react'
import Footer from '../layouts/Footer'
import Landing_Header from '../layouts/Landing_Header'

const Bussiness = () => {
    return (
        <Fragment>
            <Landing_Header />
            <section className="b-landing-section">
                <div className="container">
                    <div className="b-landing-content">
                        <div className="row">
                            <div className="col col-12 col-md-6 col-xl-6">
                                <div className="b-landing-title">
                                    <h2>Improve your team's morale and productivity to better transform your business</h2>
                                    <p>Reduce stress and improve engagement</p>
                                    <a href="#" className="btn btn-success">Join Waitlist</a>
                                </div>
                            </div>
                            <div className="col col-12 col-md-6 col-xl-6">
                                <div className="b-landing-img">
                                    <div className="b-landing-main-img">
                                        <img src="images/b-landing.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="b-landing-tringl-img">
                                        <img src="images/tringl.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="b-landing-dottwo-img">
                                        <img src="images/Dot 2.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="b-landing-dot-img">
                                        <img src="images/Dot 3.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="b-landing-ellipse-img">
                                        <img src="images/Ellipse.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="b-landing-squre-img">
                                        <img src="images/squre.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="nav-section">
                <div className="nav-content">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#benefit">Benefit to business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#selection">What is included</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#howit">How it works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#request">Request for early access</a>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="b-benefit-section">
                <div className="container">
                    <div className="b-benefit-content" id="benefit">
                        <div className="b-benefit-header text-center">
                            <h2 className="b-benefit-title">Benefit to your business</h2>
                            <p className="b-benefit-discription">Improve the health and well-being of your employee. Drive productivity and efficiency.</p>
                        </div>
                        <div className="b-benefit-img-list">
                            <div className="row justify-content-center">
                                <div className="col col-12 col-md-4 col-xl-4">
                                    <div className="b-benefit-img-item">
                                        <div className="b-benefit-img-link">
                                            <img src="images/benefit-1.png" alt="" className="img-fluid" />
                                            <div className="b-benefit-img-title">
                                                <p>Increased Staff Morale</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-md-4 col-xl-4">
                                    <div className="b-benefit-img-item">
                                        <div className="b-benefit-img-link">
                                            <img src="images/benefit-2.png" alt="" className="img-fluid" />
                                            <div className="b-benefit-img-title">
                                                <p>Improved Productivity</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-md-4 col-xl-4">
                                    <div className="b-benefit-img-item">
                                        <div className="b-benefit-img-link">
                                            <img src="images/benefit-3.png" alt="" className="img-fluid" />
                                            <div className="b-benefit-img-title">
                                                <p>Improved work life balance</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-md-4 col-xl-4">
                                    <div className="b-benefit-img-item">
                                        <div className="b-benefit-img-link">
                                            <img src="images/benefit-4.png" alt="" className="img-fluid" />
                                            <div className="b-benefit-img-title">
                                                <p>Better employee engagement</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-md-4 col-xl-4">
                                    <div className="b-benefit-img-item">
                                        <div className="b-benefit-img-link">
                                            <img src="images/benefit-5.png" alt="" className="img-fluid" />
                                            <div className="b-benefit-img-title">
                                                <p>Providing Local circular economy</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="b-benefin-btn">
                                <a href="#" className="btn btn-success">Join Waitlist</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="b-selection-section">
                <div className="container">
                    <div className="b-selection-content" id="selection">
                        <div className="row">
                            <div className="col col-12 col-md-6 col-xl-6">
                                <div className="b-selection-title">
                                    <h2>Employee Symptoms and Preference Selection</h2>
                                    <p>Insight and wellness content is provided based on your selected preference, giving you regular access to content of your choice</p>
                                </div>
                            </div>
                            <div className="col col-12 col-md-6 col-xl-6">
                                <div className="b-selection-img text-end">
                                    <img src="images/selection.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="trining-section" id='trining'>
                <div className="container">
                    <div className="training-content">
                        <div className="row">
                            <div className="col col-12 col-md-6 col-xl-6">
                                <div className="training-title-content">
                                    <h2 className="training-title">Employee have access to training programmes</h2>
                                    <p className="training-discription">With Socialley, your employee have access to training programs from industry experts, ranging from improving confidence to meditation</p>
                                    <p className="training-discription mb-0">Our programs are creatively designed to help you improve your well-being, and better manage some of your ongoing challenge</p>
                                </div>
                            </div>
                            <div className="col col-12 col-md-6 col-xl-6">
                                <div>
                                    <div className="row">
                                        <div className="col col-12 col-md-6 col-xl-6">
                                            <div className="training-img t-first-img text-end">
                                                <img src="images/training-1.png" alt="" className="img-fluid" />
                                            </div>
                                            <div className="training-img t-fisrt-img text-end">
                                                <img src="images/training-2.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col col-12col-md-6 col-xl-6">
                                            <div className="training-img">
                                                <img src="images/training-3.png" alt="" className="img-fluid" />
                                            </div>
                                            <div className="training-img">
                                                <img src="images/training-4.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="personal-section" id='personal'>
                <div className="container">
                    <div className="personal-content">
                        <h2 className="personal-title">Personal well-being score & insight</h2>
                        <p className="personal-discription">With your wellness score dashboard, employees have access to insights impacting their well-being, <br className="personal-br" /> along with improvement suggestions</p>
                        <div className="row">
                            <div className="col col-12 col-md-4 col-xl-4">
                                <img src="images/personal-1.png" alt="" className="img-fluid" />
                            </div>
                            <div className="col col-12 col-md-4 col-xl-4">
                                <img src="images/personal-2.png" alt="" className="img-fluid" />
                            </div>
                            <div className="col col-12 col-md-4 col-xl-4">
                                <img src="images/personal-3.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dashboard-section" id="dashboard">
                <div className="container">
                    <div className="dashboard-content">
                        <div className="row">
                            <div className="col col-12 col-md-7 col-xl-7">
                                <div className="dashboard-img">
                                    <img src="images/dashboard-img.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col col-12 col-md-5 col-xl-5">
                                <div className="dashboard-title">
                                    <h2>Employee insights & Dashboard</h2>
                                    <p>Team leader have access to useful insights which reflects the key factors affecting employees stress levels and productivity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="b-contact-section">
                <div className="container">
                    <div className="b-contact-content" id="howit">
                        <div className="b-contact-header">
                            <h2 className="b-contact-title personal-title">How it Work’s</h2>
                            <p className="b-contact-discription">Our unique technology is creatively designed and easy to use. <br className="contact-br" /> The tool covers the following areas.</p>
                        </div>
                        <div className="row">
                            <div className="col col-12 col-md-3 col-xl-3">
                                <div className="b-contact-item text-center">
                                    <div className="b-contact-img">
                                        <img src="images/tell.png" alt="" className="img-fluid" />
                                    </div>
                                    <h4>Tell us </h4>
                                    <p> your ongoing challenge</p>
                                </div>
                            </div>
                            <div className="col col-12 col-md-3 col-xl-3">
                                <div className="b-contact-item text-center">
                                    <div className="b-contact-img">
                                        <img src="images/doscover.png" alt="" className="img-fluid" />
                                    </div>
                                    <h4>Discover </h4>
                                    <p> tips for improving your well-being.</p>
                                </div>
                            </div>
                            <div className="col col-12 col-md-3 col-xl-3">
                                <div className="b-contact-item text-center">
                                    <div className="b-contact-img">
                                        <img src="images/share.png" alt="" className="img-fluid" />
                                    </div>
                                    <h4>Share</h4>
                                    <p> with your community</p>
                                </div>
                            </div>
                            <div className="col col-12 col-md-3 col-xl-3">
                                <div className="b-contact-item text-center">
                                    <div className="b-contact-img">
                                        <img src="images/connect.png" alt="" className="img-fluid" />
                                    </div>
                                    <h4>Connect</h4>
                                    <p> based on shared interest</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sl-we-provide-section b-provide-section">
                <div className="container">
                    <h2 className="sl-section-title text-center">Some of what we provide</h2>
                    <div className="row">
                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
                            <h3 className="sl-we-provide-title provide-card-title">Articles</h3>
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
                            <h3 className="sl-we-provide-title provide-card-title">Events</h3>
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
                            <h3 className="sl-we-provide-title provide-card-title">Communities</h3>
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
                            <h3 className="sl-we-provide-title provide-card-title">Focus music</h3>
                            <div className="sl-we-provide-card">
                                <div className="sl-we-provide-img">
                                    <img src="images/focus-music-img.png" alt="focus-music-img" className="img-fluid" />
                                </div>
                                <div className="sl-we-provide-body">
                                    <div className="sl-we-provide-content provide-card-text">
                                        <p className="sl-section-description">Access to a wide range of playlist, depending on your need, to help you achieve your goal.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="b-benefin-btn provide-footer-btn">
                        <a href="#" className="btn btn-success">Join Waitlist</a>
                    </div>
                </div>
            </section>


            <section className="access-section">
                <div className="container">
                    <div className="access-content">
                        <div className="row">
                            <div className="col col-12 col-md-5 col-xl-5">
                                <div className="access-title-content">
                                    <h2>Join Socialley Waiting List For Early Access</h2>
                                    <p>We are here to support you in improving the well-being of your workforce. </p>
                                    <div className="b-benefin-btn access-title-btn">
                                        <a href="#" className="btn btn-success">Join Waitlist</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-md-7 col-xl-7">
                                <div className="access-img">
                                    <img src="images/mobiles.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="access-bg-img">
                    <img src="images/box.png" alt="" className="img-fluid" />
                </div>
            </section>

            <section className="request-section">
                <div className="container">
                    <div className="request-content" id="request">
                        <h3 className="request-form-title">Request early access</h3>
                        <div className="request-form-input">
                            <label for="name">Business Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="request-form-input">
                            <label for="name">Employee Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="request-form-input">
                            <label for="name">Phone</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="request-form-input">
                            <label for="name">Message</label>
                            <textarea rows="4" className="form-control"></textarea>
                        </div>
                        <div className="b-benefin-btn mt-0">
                            <a href="#" className="btn btn-success">Join Waitlist</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </Fragment>
    )
}

export default Bussiness