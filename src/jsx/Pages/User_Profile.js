import React, { Fragment } from 'react'
import Footer from '../layouts/Footer'
import Header1 from '../layouts/Header1'

const User_Profile = () => {
    return (
        <Fragment>
            <Header1 />
            <div className="sl-site-content">
                <section className="sl-user-profile-landing-section">
                    <div className="sl-user-profile-banner">
                        <img src="images/user-profile-banner.png" alt="user-profile-banner" />
                    </div>
                    <div className="sl-user-profile-landing-content">
                        <div className="container">
                            <div className="sl-profile-landing-content__inner">
                                <div className="sl-user-personal-details">
                                    <div className="sl-user-profile-img">
                                        <img src="images/user-profile.png" alt="user-profile" className="user-profile" />
                                    </div>
                                    <h2 className="sl-user-name">Melany Jakobs</h2>
                                    <label className="sl-user-username">@MelanyJakobs</label>
                                    <p className="sl-user-description">
                                        <img src="images/location.svg" alt="location" className="img-fluid" />
                                        <span>Kyiv, Ukraine</span>
                                    </p>
                                    <p className="sl-user-description">
                                        <img src="images/phone.svg" alt="phone" className="img-fluid" />
                                        <span>+38067 67 43 886</span>
                                    </p>
                                </div>
                                <div className="sl-user-follwer-details">
                                    <div className="text-end">
                                        <a href="#" className="btn btn-success">Follow</a>
                                    </div>
                                    <div className="sl-user-follower">
                                        <div className="sl-user-follower__inner" data-bs-toggle="modal" data-bs-target="#membersFollowerModal">
                                            <label className="sl-user-follower-label">Followers</label>
                                            <span className="sl-user-follower-count">123</span>
                                        </div>
                                        <div className="sl-user-follower__inner" data-bs-toggle="modal" data-bs-target="#membersFollowingModal">
                                            <label className="sl-user-follower-label">Following</label>
                                            <span className="sl-user-follower-count">43</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sl-user-post-section">
                    <div className="container">
                        <div className="sl-yoga-events-upcoming">
                            <h4 className="sl-yoga-events-itle">Posts</h4>
                            <div className="row">
                                <div className="col col-12 col-md-6 col-lg-4">
                                    <div className="sl-communities-card">
                                        <div className="sl-communities-card-body">
                                            <a href="#" className="sl-communities-title">What is good to eat? Myths and facts about our health</a>
                                            <p className="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-md-6 col-lg-4">
                                    <div className="sl-communities-card">
                                        <div className="sl-communities-card-body">
                                            <a href="#" className="sl-communities-title">What is good to eat? Myths and facts about our health</a>
                                            <p className="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-md-6 col-lg-4">
                                    <div className="sl-communities-card">
                                        <div className="sl-communities-card-body">
                                            <a href="#" className="sl-communities-title">What is good to eat? Myths and facts about our health</a>
                                            <p className="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sl-yoga-events-upcoming">
                            <h4 className="sl-yoga-events-itle">Events</h4>
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
                                            <a href="#" className="sl-communities-title">What is good to eat? Myths and facts about our health</a>
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
                            <h4 className="sl-yoga-events-itle">Communities</h4>
                            <div className="row">
                                <div className="col col-12 col-md-6 col-lg-6">
                                    <div className="sl-communities-card">
                                        <div className="sl-communities-card-img">
                                            <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                        </div>
                                        <div className="sl-communities-card-body">
                                            <div className="sl-communities-card-header">
                                                <a href="#" className="sl-communities-title">Understanding Why People Buy $4000 Shoes Will Change Your Marketing Strategy</a>
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
                                                <a href="#" className="sl-communities-title">The White People in the Comments</a>
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
                        </div>
                    </div>
                </section>

                <div className="modal fade" id="membersFollowerModal" tabindex="-1" aria-labelledby="membersFollowerModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h5 className="modal-title" id="membersFollowerModalLabel">Followers (123)</h5>
                                <div className="sl-all-members-content" data-scrollbar="true" tabindex="-1" style={{ overflow: "hidden", outline: "none" }}><div className="scroll-content">
                                    <ul className="sl-user-follower-list">
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member1.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member2.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member3.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member4.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member5.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member6.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member7.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member8.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member9.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member10.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member11.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member12.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div><div className="scrollbar-track scrollbar-track-x" style={{ display: "none" }}><div className="scrollbar-thumb scrollbar-thumb-x"></div></div><div className="scrollbar-track scrollbar-track-y" style={{ display: "none" }}><div className="scrollbar-thumb scrollbar-thumb-y"></div></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="membersFollowingModal" tabindex="-1" aria-labelledby="membersFollowingModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h5 className="modal-title" id="membersFollowingModalLabel">Following (123)</h5>
                                <div className="sl-all-members-content" data-scrollbar="true" tabindex="-1" style={{ overflow: "hidden", outline: "none" }}><div className="scroll-content">
                                    <ul className="sl-user-follower-list">
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member1.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member2.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member3.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member4.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member5.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member6.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member7.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member8.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member9.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member10.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member11.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                        <li className="sl-user-follower-item">
                                            <a href="#" className="sl-user-follower-link">
                                                <img src="images/member12.png" alt="Member" className="img-fluid" />
                                                <span>Katti Warner</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div><div className="scrollbar-track scrollbar-track-x" style={{ display: "none" }}><div className="scrollbar-thumb scrollbar-thumb-x"></div></div><div className="scrollbar-track scrollbar-track-y" style={{ display: "none" }}><div className="scrollbar-thumb scrollbar-thumb-y"></div></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default User_Profile