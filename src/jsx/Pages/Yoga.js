import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'

const Yoga = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Fragment>
            <Header />
            <div className="sl-site-content">
                <section className="sl-yoga-section">
                    <div className="container">
                        <div className="sl-yoga-header">
                            <h1 className="sl-section-title">Yoga</h1>
                            <div className="sl-yoga-header-btn">
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-plus"></i>    Create an interest
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><Link className="dropdown-item" to={'/create-post-inside-community'}>Create post</Link></li>
                                        <li><Link className="dropdown-item" to={'/create-event-inside-community'}>Create event</Link></li>
                                    </ul>
                                </div>
                                <a href="#" className="btn btn-outline-darkblue dropdown-toggle"><i className="fas fa-plus"></i> Create a community</a>
                            </div>
                        </div>
                    </div>
                    <div className="sl-yoga-content">
                        <div className="sl-yoga-tabs">
                            <div className="container">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="posts-tab" data-bs-toggle="tab" data-bs-target="#posts" type="button" role="tab" aria-controls="posts" aria-selected="true">Posts</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="events-tab" data-bs-toggle="tab" data-bs-target="#events" type="button" role="tab" aria-controls="events" aria-selected="false">Events</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="communities-tab" data-bs-toggle="tab" data-bs-target="#communities" type="button" role="tab" aria-controls="communities" aria-selected="false">Communities</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="sl-yoga-tab-content">
                            <div className="container">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade active show" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                                        <div className="sl-yoga-tab-content__inner">
                                            <div className="sl-yoga-events-content sl-user-profile-myEvents-content">
                                                <a href="create-post-inside-community.html" className=" btn btn-success">Create new Post</a>
                                                <div className="sl-yoga-events-upcoming sl-yoga-popular-post">
                                                    <h4 className="sl-yoga-events-itle">Most popular today</h4>
                                                    <div className="row">
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-popular-post-card">
                                                                <div className="sl-popular-post-img">
                                                                    <img src="images/post-img.png" alt="post-img" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-8">
                                                            <div className="row">
                                                                <div className="col col-12 col-md-12 col-lg-6">
                                                                    <div className="sl-communities-card">
                                                                        <div className="sl-communities-card-body">
                                                                            <div className="sl-communities-card-header">
                                                                                <div className="sl-member-detail">
                                                                                    <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                                    <span>Kattie Roberts</span>
                                                                                </div>
                                                                            </div>
                                                                            <a href="post-details.html" className="sl-communities-title">What is good to eat? Myths and facts about our health</a>
                                                                            <p className="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col col-12 col-md-12 col-lg-6">
                                                                    <div className="sl-communities-card">
                                                                        <div className="sl-communities-card-body">
                                                                            <div className="sl-communities-card-header">
                                                                                <div className="sl-member-detail">
                                                                                    <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                                    <span>Kattie Roberts</span>
                                                                                </div>
                                                                            </div>
                                                                            <a href="post-details.html" className="sl-communities-title">What is good to eat? Myths and facts about our health</a>
                                                                            <p className="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col col-12 col-md-12 col-lg-6">
                                                                    <div className="sl-communities-card">
                                                                        <div className="sl-communities-card-body">
                                                                            <div className="sl-communities-card-header">
                                                                                <div className="sl-member-detail">
                                                                                    <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                                    <span>Kattie Roberts</span>
                                                                                </div>
                                                                            </div>
                                                                            <a href="post-details.html" className="sl-communities-title">What is good to eat? Myths and facts about our health</a>
                                                                            <p className="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col col-12 col-md-12 col-lg-6">
                                                                    <div className="sl-communities-card">
                                                                        <div className="sl-communities-card-body">
                                                                            <div className="sl-communities-card-header">
                                                                                <div className="sl-member-detail">
                                                                                    <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                                    <span>Kattie Roberts</span>
                                                                                </div>
                                                                            </div>
                                                                            <a href="post-details.html" className="sl-communities-title">What is good to eat? Myths and facts about our health</a>
                                                                            <p className="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sl-yoga-events-upcoming sl-yoga-related-post">
                                                    <h4 className="sl-yoga-events-itle">Other post</h4>
                                                    <div className="row">
                                                        <div className="col col-12 col-md-6 col-lg-4">
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
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/how-did.png" alt="how-did" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/how-to-stop.png" alt="how-to-stop" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/chris-hemsworth.png" alt="chris-hemsworth" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/understanding.png" alt="understanding" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/white-people.png" alt="white-people" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/minutes-on-friday.png" alt="minutes-on-friday" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/how-to-stop.png" alt="how-to-stop" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/chris-hemsworth.png" alt="chris-hemsworth" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
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
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/how-did.png" alt="how-did" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/how-to-stop.png" alt="how-to-stop" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/chris-hemsworth.png" alt="chris-hemsworth" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/understanding.png" alt="understanding" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/white-people.png" alt="white-people" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/minutes-on-friday.png" alt="minutes-on-friday" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/how-to-stop.png" alt="how-to-stop" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/chris-hemsworth.png" alt="chris-hemsworth" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/how-to-stop.png" alt="how-to-stop" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/chris-hemsworth.png" alt="chris-hemsworth" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sl-site-navigation mb-5">
                                                    <nav aria-label="Page navigation example">
                                                        <ul className="pagination">
                                                            <li className="page-item disabled">
                                                                <a className="page-link" href="#" aria-label="Previous">
                                                                    <i className="fas fa-chevron-left"></i>
                                                                </a>
                                                            </li>
                                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                                                            <li className="page-item">...</li>
                                                            <li className="page-item"><a className="page-link" href="#">99</a></li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="#" aria-label="Next">
                                                                    <i className="fas fa-chevron-right"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                                <div className="sl-yoga-events-upcoming sl-yoga-related-post">
                                                    <h4 className="sl-yoga-events-itle">Related post</h4>
                                                    <div className="row">
                                                        <div className="col col-12 col-md-6 col-lg-4">
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
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/how-did.png" alt="how-did" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/how-to-stop.png" alt="how-to-stop" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/chris-hemsworth.png" alt="chris-hemsworth" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/understanding.png" alt="understanding" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/white-people.png" alt="white-people" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/minutes-on-friday.png" alt="minutes-on-friday" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/how-to-stop.png" alt="how-to-stop" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/chris-hemsworth.png" alt="chris-hemsworth" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
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
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/how-did.png" alt="how-did" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/how-to-stop.png" alt="how-to-stop" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/chris-hemsworth.png" alt="chris-hemsworth" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/understanding.png" alt="understanding" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/white-people.png" alt="white-people" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/minutes-on-friday.png" alt="minutes-on-friday" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/how-to-stop.png" alt="how-to-stop" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/chris-hemsworth.png" alt="chris-hemsworth" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/how-to-stop.png" alt="how-to-stop" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-img">
                                                                    <img src="images/chris-hemsworth.png" alt="chris-hemsworth" className="img-fluid" />
                                                                </div>
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="post-details.html" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sl-site-navigation">
                                                    <nav aria-label="Page navigation example">
                                                        <ul className="pagination">
                                                            <li className="page-item disabled">
                                                                <a className="page-link" href="#" aria-label="Previous">
                                                                    <i className="fas fa-chevron-left"></i>
                                                                </a>
                                                            </li>
                                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                                                            <li className="page-item">...</li>
                                                            <li className="page-item"><a className="page-link" href="#">99</a></li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="#" aria-label="Next">
                                                                    <i className="fas fa-chevron-right"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="events" role="tabpanel" aria-labelledby="events-tab">
                                        <div className="sl-yoga-tab-content__inner">
                                            <div className="sl-yoga-events-content sl-user-profile-myEvents-content">
                                                <a href="create-event-inside-community.html" className="btn btn-success">Create new event</a>
                                                <div className="sl-yoga-events-upcoming">
                                                    <h4 className="sl-yoga-events-itle">Upcoming this week</h4>
                                                    <div className="row">
                                                        <div className="col col-12 col-md-6 col-lg-6">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                        <label className="sl-communities-location">25 October, 10:00 GMT+3</label>
                                                                    </div>
                                                                    <a href="event.html" className="sl-communities-title">What is good to eat? Myths and facts about our health</a>
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
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-6">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                        <label className="sl-communities-location">25 October, 10:00 GMT+3</label>
                                                                    </div>
                                                                    <a href="event.html" className="sl-communities-title">What is good to eat? Myths and facts about our health</a>
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
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-6">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                        <label className="sl-communities-location">25 October, 10:00 GMT+3</label>
                                                                    </div>
                                                                    <a href="event.html" className="sl-communities-title">What is good to eat? Myths and facts about our health</a>
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
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-6">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                        <label className="sl-communities-location">25 October, 10:00 GMT+3</label>
                                                                    </div>
                                                                    <a href="event.html" className="sl-communities-title">What is good to eat? Myths and facts about our health</a>
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
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sl-yoga-events-upcoming">
                                                    <h4 className="sl-yoga-events-itle">Future Events</h4>
                                                    <div className="row">
                                                        <div className="col col-12 col-md-6 col-lg-6">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                        <label className="sl-communities-location">25 October, 10:00 GMT+3</label>
                                                                    </div>
                                                                    <a href="event.html" className="sl-communities-title">What is good to eat? Myths and facts about our health</a>
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
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-6">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                        <label className="sl-communities-location">25 October, 10:00 GMT+3</label>
                                                                    </div>
                                                                    <a href="event.html" className="sl-communities-title">What is good to eat? Myths and facts about our health</a>
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
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-6">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                        <label className="sl-communities-location">25 October, 10:00 GMT+3</label>
                                                                    </div>
                                                                    <a href="event.html" className="sl-communities-title">What is good to eat? Myths and facts about our health</a>
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
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-6">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                        <label className="sl-communities-location">25 October, 10:00 GMT+3</label>
                                                                    </div>
                                                                    <a href="event.html" className="sl-communities-title">What is good to eat? Myths and facts about our health</a>
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
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-6">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                        <label className="sl-communities-location">25 October, 10:00 GMT+3</label>
                                                                    </div>
                                                                    <a href="event.html" className="sl-communities-title">What is good to eat? Myths and facts about our health</a>
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
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-6">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                        <label className="sl-communities-location">25 October, 10:00 GMT+3</label>
                                                                    </div>
                                                                    <a href="event.html" className="sl-communities-title">What is good to eat? Myths and facts about our health</a>
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
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-6">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                        <label className="sl-communities-location">25 October, 10:00 GMT+3</label>
                                                                    </div>
                                                                    <a href="event.html" className="sl-communities-title">What is good to eat? Myths and facts about our health</a>
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
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-6">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <div className="sl-communities-card-header">
                                                                        <div className="sl-member-detail">
                                                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                                                            <span>Kattie Roberts</span>
                                                                        </div>
                                                                        <label className="sl-communities-location">25 October, 10:00 GMT+3</label>
                                                                    </div>
                                                                    <a href="event.html" className="sl-communities-title">What is good to eat? Myths and facts about our health</a>
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
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sl-site-navigation">
                                                    <nav aria-label="Page navigation example">
                                                        <ul className="pagination">
                                                            <li className="page-item disabled">
                                                                <a className="page-link" href="#" aria-label="Previous">
                                                                    <i className="fas fa-chevron-left"></i>
                                                                </a>
                                                            </li>
                                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                                                            <li className="page-item">...</li>
                                                            <li className="page-item"><a className="page-link" href="#">99</a></li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="#" aria-label="Next">
                                                                    <i className="fas fa-chevron-right"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="communities" role="tabpanel" aria-labelledby="communities-tab">
                                        <div className="sl-yoga-tab-content__inner">
                                            <div className="sl-yoga-events-content sl-user-profile-myEvents-content">
                                                <a href="#" className="btn btn-success">Create new community</a>
                                                <div className="row">
                                                    <div className="col col-12 col-md-6 col-lg-6">
                                                        <div className="sl-communities-card">
                                                            <div className="sl-communities-card-img">
                                                                <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                                            </div>
                                                            <div className="sl-communities-card-body">
                                                                <div className="sl-communities-card-header">
                                                                    <a href="community-details.html" className="sl-communities-title">Five Signs of a Highly Intelligent Person</a>
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
                                                    </div>
                                                    <div className="col col-12 col-md-6 col-lg-6">
                                                        <div className="sl-communities-card">
                                                            <div className="sl-communities-card-img">
                                                                <img src="images/chris-hemsworth.png" alt="chris-hemsworth" className="img-fluid" />
                                                            </div>
                                                            <div className="sl-communities-card-body">
                                                                <div className="sl-communities-card-header">
                                                                    <a href="community-details.html" className="sl-communities-title">Chris Hemsworth Is Exactly What’s Wrong With the Fitness Industry</a>
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
                                                    </div>
                                                    <div className="col col-12 col-md-6 col-lg-6">
                                                        <div className="sl-communities-card">
                                                            <div className="sl-communities-card-img">
                                                                <img src="images/chris-hemsworth.png" alt="chris-hemsworth" className="img-fluid" />
                                                            </div>
                                                            <div className="sl-communities-card-body">
                                                                <div className="sl-communities-card-header">
                                                                    <a href="community-details.html" className="sl-communities-title">Chris Hemsworth Is Exactly What’s Wrong With the Fitness Industry</a>
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
                                                    </div>
                                                    <div className="col col-12 col-md-6 col-lg-6">
                                                        <div className="sl-communities-card">
                                                            <div className="sl-communities-card-img">
                                                                <img src="images/how-to-stop.png" alt="how-to-stop" className="img-fluid" />
                                                            </div>
                                                            <div className="sl-communities-card-body">
                                                                <div className="sl-communities-card-header">
                                                                    <a href="community-details.html" className="sl-communities-title">How to Stop Feeling Tired All the Time</a>
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
                                                    </div>
                                                    <div className="col col-12 col-md-6 col-lg-6">
                                                        <div className="sl-communities-card">
                                                            <div className="sl-communities-card-img">
                                                                <img src="images/how-did.png" alt="how-did" className="img-fluid" />
                                                            </div>
                                                            <div className="sl-communities-card-body">
                                                                <div className="sl-communities-card-header">
                                                                    <a href="community-details.html" className="sl-communities-title">How I Did More By Doing Less</a>
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
                                                    </div>
                                                    <div className="col col-12 col-md-6 col-lg-6">
                                                        <div className="sl-communities-card">
                                                            <div className="sl-communities-card-img">
                                                                <img src="images/minutes-on-friday.png" alt="minutes-on-friday" className="img-fluid" />
                                                            </div>
                                                            <div className="sl-communities-card-body">
                                                                <div className="sl-communities-card-header">
                                                                    <a href="community-details.html" className="sl-communities-title">10 Minutes on Friday That Will Make Your Monday 10 Times Easier</a>
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
                                                    </div>
                                                    <div className="col col-12 col-md-6 col-lg-6">
                                                        <div className="sl-communities-card">
                                                            <div className="sl-communities-card-img">
                                                                <img src="images/understanding.png" alt="understanding" className="img-fluid" />
                                                            </div>
                                                            <div className="sl-communities-card-body">
                                                                <div className="sl-communities-card-header">
                                                                    <a href="community-details.html" className="sl-communities-title">Understanding Why People Buy $4000 Shoes Will Change Your Marketing Strategy</a>
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
                                                    </div>
                                                    <div className="col col-12 col-md-6 col-lg-6">
                                                        <div className="sl-communities-card">
                                                            <div className="sl-communities-card-img">
                                                                <img src="images/white-people.png" alt="white-people" className="img-fluid" />
                                                            </div>
                                                            <div className="sl-communities-card-body">
                                                                <div className="sl-communities-card-header">
                                                                    <a href="community-details.html" className="sl-communities-title">The White People in the Comments</a>
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
                                                    </div>
                                                </div>
                                                <div className="sl-site-navigation">
                                                    <nav aria-label="Page navigation example">
                                                        <ul className="pagination">
                                                            <li className="page-item disabled">
                                                                <a className="page-link" href="#" aria-label="Previous">
                                                                    <i className="fas fa-chevron-left"></i>
                                                                </a>
                                                            </li>
                                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                                                            <li className="page-item">...</li>
                                                            <li className="page-item"><a className="page-link" href="#">99</a></li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="#" aria-label="Next">
                                                                    <i className="fas fa-chevron-right"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </nav>
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

export default Yoga