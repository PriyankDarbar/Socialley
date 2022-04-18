import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../layouts/Footer'
import Header1 from '../layouts/Header1'

const Community_Empty = () => {
    return (
        <Fragment>
            <Header1 />

            <div className="sl-site-content">
                <section className="sl-landing-section sl-single-community-landing sl-admin-community-landing" style={{ backgroundImage: "url(images/post-landing-img2.png)" }}>
                    <div className="container">
                        <div className="sl-landing-section__inner">
                            <div className="row align-items-center">
                                <div className="col col-12 col-md-12 col-lg-12">
                                    <div className="sl-landing-section-content text-center">
                                        <h1 className="sl-section-title">Community Name</h1>
                                        <p className="sl-section-description">Fusce elementum porta blandit. Ut tellus nisi, facilisis eu lacinia vestibulum, tempor vel ipsum. Pellentesque dictum dictum tellus at dapibus. Aliquam erat volutpat. Mauris in est dolor. Fusce fringilla erat sed nisl bibendum
                                            ultrices. Proin aliquet ex nec augue tempor, imperdiet aliquet quam imperdiet. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sl-landing-btn">
                        <div className="container">
                            <a href="#" className="btn btn-success">Edit </a>
                        </div>
                    </div>
                </section>

                <section className="sl-empty-community-section">
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
                                <Link to={'/create-event-inside-community'} className="sl-empty-community-card">
                                    <div className="sl-community-event-header">
                                        <h3 className="sl-community-event-title">Community Events</h3>
                                        <a href="#">
                                            <img src="images/add-icon.png" alt="add-icon" className="img-fluid" />
                                        </a>
                                    </div>
                                    <div className="sl-empty-community-card-body">
                                        <div className="sl-empty-community-card-img">
                                            <img src="images/files-icon.png" alt="files-icon" className="img-fluid" />
                                        </div>
                                        <label className="sl-empty-community-label">Your community have no events yet</label>
                                        <p className="sl-empty-community-description">Click “+” to create one</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="sl-empty-community-card">
                                    <div className="sl-community-event-header">
                                        <h3 className="sl-community-event-title">Members</h3>
                                    </div>
                                    <div className="sl-empty-community-card-body">
                                        <div className="sl-empty-community-card-img">
                                            <img src="images/files-icon.png" alt="files-icon" className="img-fluid" />
                                        </div>
                                        <label className="sl-empty-community-label">Your community have no members yet</label>
                                        <p className="sl-empty-community-description">Send to community link to your friends, so they can join</p>
                                    </div>
                                </div>
                            </div>
                            <Link to={'/create-post-inside-community'} className="col col-12 col-md-6 col-lg-6 col-xl-6" >
                                <div className="sl-empty-community-card">
                                    <div className="sl-community-event-header">
                                        <h3 className="sl-community-event-title">Community Posts</h3>
                                        <a href="#">
                                            <img src="images/add-icon.png" alt="add-icon" className="img-fluid" />
                                        </a>
                                    </div>
                                    <div className="sl-empty-community-card-body">
                                        <div className="sl-empty-community-card-img">
                                            <img src="images/files-icon.png" alt="files-icon" className="img-fluid" />
                                        </div>
                                        <label className="sl-empty-community-label">Your community have no posts yet</label>
                                        <p className="sl-empty-community-description">Click “+” to create one</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </Fragment>
    )
}

export default Community_Empty