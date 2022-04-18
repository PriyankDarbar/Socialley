import React, { Fragment } from 'react';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';

const Community_Details = () => {



    return (
        <Fragment>
            <Header />
            <div className="sl-site-content">
                <section className="sl-landing-section sl-single-community-landing" style={{ backgroundImage: "url(images/community-img.png)" }}>
                    <div className="container">
                        <div className="sl-landing-section__inner">
                            <div className="row align-items-center">
                                <div className="col col-12 col-md-12 col-lg-12">
                                    <div className="sl-landing-section-content text-center">
                                        <h1 className="sl-section-title">Community Name</h1>
                                        <p className="sl-section-description">Fusce elementum porta blandit. Ut tellus nisi, facilisis eu lacinia vestibulum, tempor vel ipsum. Pellentesque dictum dictum tellus at dapibus. Aliquam erat volutpat. Mauris in est dolor. Fusce fringilla erat sed nisl bibendum
                                            ultrices. Proin aliquet ex nec augue tempor, imperdiet aliquet quam imperdiet. </p>
                                        <p className="sl-single-community-text">
                                            <span>Kyiv, Ukraine</span>
                                            <span>43 members</span>
                                        </p>
                                        <div className="sl-landing-btn sl-join-Community-content">
                                            <a href="#" className="btn btn-success">Join</a>
                                            <p className="sl-join-Community-text">You have joined this Community.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sl-community-event-section">
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-md-6 col-lg-6">
                                <div className="sl-community-event-content">
                                    <h3 className="sl-community-event-title">Community Events (2)</h3>
                                    <div className="row">
                                        <div className="col col-12 col-md-12 col-lg-12">
                                            <div className="sl-communities-card">
                                                <div className="sl-communities-card-img">
                                                    <img src="images/chris-hemsworth.png" alt="chris-hemsworth" className="img-fluid" />
                                                </div>
                                                <div className="sl-communities-card-body">
                                                    <div className="sl-communities-card-header">
                                                        <a href="#" className="sl-communities-title">Chris Hemsworth Is Exactly What’s Wrong With the Fitness Industry</a>
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
                                        <div className="col col-12 col-md-12 col-lg-12">
                                            <div className="sl-communities-card">
                                                <div className="sl-communities-card-img">
                                                    <img src="images/chris-hemsworth.png" alt="chris-hemsworth" className="img-fluid" />
                                                </div>
                                                <div className="sl-communities-card-body">
                                                    <div className="sl-communities-card-header">
                                                        <a href="#" className="sl-communities-title">Chris Hemsworth Is Exactly What’s Wrong With the Fitness Industry</a>
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
                                        <div className="text-center">
                                            <a href="#" className="sl-section-link">View all events</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-md-6 col-lg-6 col-xl-5 ms-auto">
                                <div className="sl-community-event-content">
                                    <h3 className="sl-community-event-title">Members (132)</h3>
                                    <ul className="sl-community-member-list">
                                        <li className="sl-community-member-item">
                                            <a href="#">
                                                <img src="images/member1.png" alt="Member" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-community-member-item">
                                            <a href="#">
                                                <img src="images/member2.png" alt="Member" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-community-member-item">
                                            <a href="#">
                                                <img src="images/member3.png" alt="Member" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-community-member-item">
                                            <a href="#">
                                                <img src="images/member4.png" alt="Member" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-community-member-item">
                                            <a href="#">
                                                <img src="images/member5.png" alt="Member" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-community-member-item">
                                            <a href="#">
                                                <img src="images/member6.png" alt="Member" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-community-member-item">
                                            <a href="#">
                                                <img src="images/member7.png" alt="Member" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-community-member-item">
                                            <a href="#">
                                                <img src="images/member8.png" alt="Member" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-community-member-item">
                                            <a href="#">
                                                <img src="images/member9.png" alt="Member" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-community-member-item">
                                            <a href="#">
                                                <img src="images/member10.png" alt="Member" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-community-member-item">
                                            <a href="#">
                                                <img src="images/member11.png" alt="Member" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-community-member-item">
                                            <a href="#">
                                                <img src="images/member12.png" alt="Member" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-community-member-item">
                                            <a href="#">
                                                <img src="images/member13.png" alt="Member" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-community-member-item">
                                            <a href="#">
                                                <img src="images/member14.png" alt="Member" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-community-member-item">
                                            <a href="#">
                                                <img src="images/member15.png" alt="Member" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-community-member-item">
                                            <a href="#">
                                                <img src="images/member16.png" alt="Member" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-community-member-item">
                                            <a href="#">
                                                <img src="images/member17.png" alt="Member" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-community-member-item">
                                            <a href="#">
                                                <img src="images/member18.png" alt="Member" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-community-member-item">
                                            <a href="#">
                                                <img src="images/member19.png" alt="Member" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li className="sl-community-member-item">
                                            <a href="#">
                                                <img src="images/member20.png" alt="Member" className="img-fluid" />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="text-center">
                                        <button type="button" className="btn sl-section-link" data-bs-toggle="modal" data-bs-target="#allMembersModal"> View all members </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sl-community-posts-section">
                    <div className="container">
                        <div className="sl-community-event-content">
                            <h3 className="sl-community-event-title">Community Posts (6)</h3>
                            <div className="row">
                                <div className="col col-12 col-md-6 col-lg-6">
                                    <div className="sl-communities-card">
                                        <div className="sl-communities-card-img">
                                            <img src="images/community-posts1.png" alt="community-posts1" className="img-fluid" />
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
                                <div className="col col-12 col-md-6 col-lg-6">
                                    <div className="sl-communities-card">
                                        <div className="sl-communities-card-img">
                                            <img src="images/community-posts2.png" alt="community-posts2" className="img-fluid" />
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
                                <div className="col col-12 col-md-6 col-lg-6">
                                    <div className="sl-communities-card">
                                        <div className="sl-communities-card-img">
                                            <img src="images/community-posts3.png" alt="community-posts3" className="img-fluid" />
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
                                <div className="col col-12 col-md-6 col-lg-6">
                                    <div className="sl-communities-card">
                                        <div className="sl-communities-card-img">
                                            <img src="images/community-posts4.png" alt="community-posts4" className="img-fluid" />
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
                                <div className="text-center">
                                    <a href="#" className="sl-section-link">View all posts</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="modal fade" id="allMembersModal" tabindex="-1" aria-labelledby="allMembersModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h5 className="modal-title" id="allMembersModalLabel">All members (132)</h5>
                                <div className="sl-all-members-content" data-scrollbar="true" tabindex="-1" style={{ overflow: "hidden", outline: "none" }}>
                                    <div className="scroll-content">
                                        <ul className="sl-community-member-list">
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member1.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member2.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member3.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member4.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member5.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member6.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member7.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member8.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member9.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member10.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member11.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member12.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member13.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member14.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member15.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member16.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member17.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member18.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member19.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member20.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member1.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member2.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member3.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member4.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member5.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member6.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member7.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member8.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member9.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member10.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member11.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member12.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member13.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member14.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member15.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member16.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member17.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member18.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member19.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li className="sl-community-member-item">
                                                <a href="#">
                                                    <img src="images/member20.png" alt="Member" className="img-fluid" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div><div className="scrollbar-track scrollbar-track-x" style={{ display: "none" }}>
                                        <div className="scrollbar-thumb scrollbar-thumb-x">
                                        </div>
                                    </div>
                                    <div className="scrollbar-track scrollbar-track-y" style={{ display: "none" }}>
                                        <div className="scrollbar-thumb scrollbar-thumb-y">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  <div className="modal fade" id="joinCommunityModal" tabindex="-1" aria-labelledby="joinCommunityModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h5 className="modal-title" id="joinCommunityModalLabel">LOGO</h5>
                        <p className="text-center mb-5"><b>Congradulations!</b> <br/>You joined the “Community Name” community</p>
                        <a href="#" className="btn btn-secondary d-block w-100 mb-5">Go to community page</a>
                    </div>
                </div>
            </div>
        </div> */}
            </div>
            <Footer />
        </Fragment>
    )
}

export default Community_Details;