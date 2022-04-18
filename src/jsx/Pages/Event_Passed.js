import React, { Fragment } from 'react'
import Footer from '../layouts/Footer'
import Header1 from '../layouts/Header1'

const Event_Passed = () => {
    return (
        <Fragment>
            <Header1 />
            <div className="sl-site-content">
                <section className="sl-single-event-landing-section">
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-md-6 col-lg-6">
                                <div className="sl-single-event-landing-content">
                                    <span className="sl-post-passed">Passed</span>
                                    <h1 className="sl-section-title">The 70–20–10 System Will Help You Make Really Cool Stuff</h1>
                                    <ul className="sl-single-event-author-detail">
                                        <li className="sl-single-event-author-item">
                                            <label className="sl-single-event-author-title">Creator</label>
                                            <div className="sl-member-detail">
                                                <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                <span>Kattie Roberts</span>
                                            </div>
                                        </li>
                                        <li className="sl-single-event-author-item">
                                            <label className="sl-single-event-author-title">Date &amp; Time</label>
                                            <span>25 October, 10:00 GMT+3</span>
                                        </li>
                                        <li className="sl-single-event-author-item">
                                            <label className="sl-single-event-author-title">Location</label>
                                            <span>Kyiv, Ukraine</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-12 col-md-6 col-lg-6">
                                <div className="sl-single-event-landing-img">
                                    <img src="images/single-event-img.png" alt="single-event-img" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sl-event-description-section">
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-md-12 col-lg-10 col-xl-8">
                                <h2 className="sl-section-title">Event description</h2>
                                <p className="sl-section-description">Fusce elementum porta blandit. Ut tellus nisi, facilisis eu lacinia vestibulum, tempor vel ipsum. Pellentesque dictum dictum tellus at dapibus. Aliquam erat volutpat. Mauris in est dolor. Fusce fringilla erat sed nisl bibendum
                                    ultrices. Proin aliquet ex nec augue tempor, imperdiet aliquet quam imperdiet. Nunc id semper mauris. Integer blandit lacus ac velit interdum, et luctus ligula scelerisque. Cras tempor odio imperdiet, semper magna nec, rhoncus
                                    dui. Integer sollicitudin bibendum nibh, id viverra metus pretium ac. Phasellus ut felis enim.
                                </p>
                                <h3 className="sl-section-title">Particapants</h3>
                                <div className="sl-member-list-detail">
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
                                <h3 className="sl-section-title">How to join event</h3>
                                <p className="sl-section-description">Proin aliquet ex nec augue tempor, imperdiet aliquet quam imperdiet. Nunc id semper mauris. Integer blandit lacus ac velit interdum.</p>
                                <a href="#" className="btn btn-success" style={{ marginTop: "12px" }}>Add to Google Calendar</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Event_Passed