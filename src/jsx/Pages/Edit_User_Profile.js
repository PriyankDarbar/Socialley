import React, { Fragment, useEffect, useState } from 'react';
import Footer from '../layouts/Footer';
import Header1 from '../layouts/Header1';
import EditProfileModal from '../Modals/EditProfileModal';
import db from '../Pages/firebase';
import Update_Cover_Modal from '../Modals/Update_Cover_Modal';
import Loader from 'react-loader';

const Edit_User_Profile = () => {

    const [uploadModal, setUploadModal] = useState(false);
    const [updateUser, setUpdateUser] = useState(false);
    const [loading, setLoading] = useState(true);
    const [updateData, setUpdateData] = useState({
        Name: '',
        inputHandle: '',
        inputLocation: '',
        inputPhoneNumber: ''
    })

    const handleUpdate = () => {
        setUploadModal(true);
    }

    const handleUpdateClose = () => {
        setUploadModal(false);
    }

    const handleUser = () => {
        setUpdateUser(true);
    }

    const handleUserClose = () => {
        setUpdateUser(false);
    }

    useEffect(() => {
        if (!localStorage.getItem('USER_NAME')) {
            setUpdateUser(true);
        } else {
            getData();
        }
    }, [])

    const getData = () => {
        db.collection('Registered-User').doc(localStorage.getItem('USER_ID')).get().then((doc) => {
            setUpdateData({
                Name: doc.data().Name,
                inputHandle: doc.data().Handle,
                inputLocation: doc.data().Location,
                inputPhoneNumber: doc.data().Phone
            })
        })
        setLoading(false);
    }

    return (
        <Fragment>
            <EditProfileModal
                activeModal={updateUser}
                setActiveModal={handleUserClose}
                uData={updateData}
            />

            <Update_Cover_Modal
                activeModal={uploadModal}
                setActiveModal={handleUpdateClose}
            />

            <Header1 />
            <div className="sl-site-content">
                <section className="sl-user-profile-landing-section sl-edit-user-profile-landing">
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
                                    <h2 className="sl-user-name" >{updateData.Name}
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#editProfileDataModal" style={{ marginLeft: "5px" }}>
                                            <img src="images/edit-icon.png" alt="edit-icon" className="img-fluid" onClick={handleUser} />

                                        </a>
                                    </h2>
                                    <label className="sl-user-username">{updateData.inputHandle}</label>
                                    <p className="sl-user-description">
                                        <img src="images/location.svg" alt="location" className="img-fluid" />
                                        <span>{updateData.inputLocation}</span>
                                    </p>
                                    <p className="sl-user-description">
                                        <img src="images/phone.svg" alt="phone" className="img-fluid" />
                                        <span>{updateData.inputPhoneNumber}</span>
                                    </p>
                                </div>
                                <div className="sl-user-follwer-details">
                                    <div className="text-end sl-user-follwer-btn">
                                        <a className="btn btn-primary" onClick={handleUpdate}>Edit Cover</a>
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
                {!loading ?
                    <section className="sl-yoga-section">
                        <div className="sl-yoga-content">
                            <div className="sl-yoga-tabs">
                                <div className="container">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="activity-tab" data-bs-toggle="tab" data-bs-target="#activity" type="button" role="tab" aria-controls="activity" aria-selected="true">Activity</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="myPosts-tab" data-bs-toggle="tab" data-bs-target="#myPosts" type="button" role="tab" aria-controls="myPosts" aria-selected="false">My Posts</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="myEvents-tab" data-bs-toggle="tab" data-bs-target="#myEvents" type="button" role="tab" aria-controls="myEvents" aria-selected="false">My Events</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="myCommunities-tab" data-bs-toggle="tab" data-bs-target="#myCommunities" type="button" role="tab" aria-controls="myCommunities" aria-selected="false">My Communities</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sl-yoga-tab-content">
                                <div className="container">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="activity" role="tabpanel" aria-labelledby="activity-tab">
                                            <div className="sl-yoga-tab-content__inner">
                                                <div className="sl-user-activity-content">
                                                    <div className="row">
                                                        <div className="col col-12 col-md-12 col-lg-10 col-xl-9">
                                                            <ul className="sl-user-activity-list">
                                                                <li className="sl-user-activity-item">
                                                                    <img src="images/activity-like-icon.png" alt="activity-like-icon" className="img-fluid" />
                                                                    <p>You liked a <b>“What we know abou the anxiety”</b> post by <b>Makal Radek</b></p>
                                                                </li>
                                                                <li className="sl-user-activity-item">
                                                                    <img src="images/member2.png" alt="member2" className="img-fluid" />
                                                                    <p>You followed <b><u>Martha Gratta</u></b></p>
                                                                </li>
                                                                <li className="sl-user-activity-item">
                                                                    <img src="images/file-icon.png" alt="file-icon" className="img-fluid" />
                                                                    <p>You created a post <b>“My sidehustles and how turn freelancing into full-time job”</b></p>
                                                                </li>
                                                                <li className="sl-user-activity-item">
                                                                    <img src="images/start-icon.png" alt="start-icon" className="img-fluid" />
                                                                    <p>You rated Jeremi Wide post <b>“Selfcare riuting for a single parrent”</b></p>
                                                                </li>
                                                                <li className="sl-user-activity-item">
                                                                    <img src="images/activity-like-icon.png" alt="activity-like-icon" className="img-fluid" />
                                                                    <p>You liked a <b><u>“What we know abou the anxiety”</u></b> post by <b><u>Makal Radek</u></b></p>
                                                                </li>
                                                                <li className="sl-user-activity-item">
                                                                    <img src="images/member2.png" alt="member2" className="img-fluid" />
                                                                    <p>You followed <b><u>Martha Gratta</u></b></p>
                                                                </li>
                                                                <li className="sl-user-activity-item">
                                                                    <img src="images/file-icon.png" alt="file-icon" className="img-fluid" />
                                                                    <p>You created a post <b>“My sidehustles and how turn freelancing into full-time job”</b></p>
                                                                </li>
                                                                <li className="sl-user-activity-item">
                                                                    <img src="images/start-icon.png" alt="start-icon" className="img-fluid" />
                                                                    <p>You rated Jeremi Wide post <b>“Selfcare riuting for a single parrent”</b></p>
                                                                </li>
                                                                <li className="sl-user-activity-item">
                                                                    <img src="images/activity-like-icon.png" alt="activity-like-icon" className="img-fluid" />
                                                                    <p>You liked a <b>“What we know abou the anxiety”</b> post by <b>Makal Radek</b></p>
                                                                </li>
                                                                <li className="sl-user-activity-item">
                                                                    <img src="images/member2.png" alt="member2" className="img-fluid" />
                                                                    <p>You followed <b><u>Martha Gratta</u></b></p>
                                                                </li>
                                                                <li className="sl-user-activity-item">
                                                                    <img src="images/file-icon.png" alt="file-icon" className="img-fluid" />
                                                                    <p>You created a post <b>“My sidehustles and how turn freelancing into full-time job”</b></p>
                                                                </li>
                                                                <li className="sl-user-activity-item">
                                                                    <img src="images/start-icon.png" alt="start-icon" className="img-fluid" />
                                                                    <p>You rated Jeremi Wide post <b>“Selfcare riuting for a single parrent”</b></p>
                                                                </li>
                                                                <li className="sl-user-activity-item">
                                                                    <img src="images/activity-like-icon.png" alt="activity-like-icon" className="img-fluid" />
                                                                    <p>You liked a <b><u>“What we know abou the anxiety”</u></b> post by <b><u>Makal Radek</u></b></p>
                                                                </li>
                                                                <li className="sl-user-activity-item">
                                                                    <img src="images/member2.png" alt="member2" className="img-fluid" />
                                                                    <p>You followed <b><u>Martha Gratta</u></b></p>
                                                                </li>
                                                                <li className="sl-user-activity-item">
                                                                    <img src="images/file-icon.png" alt="file-icon" className="img-fluid" />
                                                                    <p>You created a post <b>“My sidehustles and how turn freelancing into full-time job”</b></p>
                                                                </li>
                                                                <li className="sl-user-activity-item">
                                                                    <img src="images/start-icon.png" alt="start-icon" className="img-fluid" />
                                                                    <p>You rated Jeremi Wide post <b>“Selfcare riuting for a single parrent”</b></p>
                                                                </li>
                                                                <li className="sl-user-activity-item">
                                                                    <img src="images/member2.png" alt="member2" className="img-fluid" />
                                                                    <p>You followed <b><u>Martha Gratta</u></b></p>
                                                                </li>
                                                                <li className="sl-user-activity-item">
                                                                    <img src="images/file-icon.png" alt="file-icon" className="img-fluid" />
                                                                    <p>You created a post <b>“My sidehustles and how turn freelancing into full-time job”</b></p>
                                                                </li>
                                                                <li className="sl-user-activity-item">
                                                                    <img src="images/start-icon.png" alt="start-icon" className="img-fluid" />
                                                                    <p>You rated Jeremi Wide post <b>“Selfcare riuting for a single parrent”</b></p>
                                                                </li>
                                                                <li className="sl-user-activity-item">
                                                                    <img src="images/activity-like-icon.png" alt="activity-like-icon" className="img-fluid" />
                                                                    <p>You liked a <b><u>“What we know abou the anxiety”</u></b> post by <b><u>Makal Radek</u></b></p>
                                                                </li>
                                                            </ul>
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
                                        <div className="tab-pane fade" id="myPosts" role="tabpanel" aria-labelledby="myPosts-tab">
                                            <div className="sl-yoga-tab-content__inner">
                                                <div className="sl-myPosts-content sl-user-profile-myEvents-content">
                                                    <a href="create-post-inside-community.html" className=" btn btn-success">Create new Post</a>
                                                    <div className="row">
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-6 col-lg-4">
                                                            <div className="sl-communities-card">
                                                                <div className="sl-communities-card-body">
                                                                    <a href="#" className="sl-communities-title">The 70–20–10 System Will Help You Make Really Cool Stuff</a>
                                                                    <p className="sl-communities-card-description">The search for a perfect font ends here. Serifs, sans-serifs and more! The search for a perfect font ends here. Serifs, sans-serifs and ....</p>
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
                                        <div className="tab-pane fade" id="myEvents" role="tabpanel" aria-labelledby="myEvents-tab">
                                            <div className="sl-yoga-tab-content__inner">
                                                <div className="sl-yoga-events-content sl-user-profile-myEvents-content">
                                                    <a href="create-event-inside-community.html" className="btn btn-success">Create new event</a>
                                                    <div className="sl-yoga-events-upcoming">
                                                        <h4 className="sl-yoga-events-itle">Upcoming</h4>
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
                                                    <div className="sl-yoga-events-upcoming">
                                                        <h4 className="sl-yoga-events-itle">Past Events</h4>
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
                                        <div className="tab-pane fade" id="myCommunities" role="tabpanel" aria-labelledby="myCommunities-tab">
                                            <div className="sl-yoga-tab-content__inner">
                                                <div className="sl-yoga-communities-content sl-user-profile-myEvents-content">
                                                    <a href="#" className="btn btn-success">Create new community</a>
                                                    <div className="sl-yoga-events-upcoming">
                                                        <h4 className="sl-yoga-events-itle">Created by me</h4>
                                                        <div className="row">
                                                            <div className="col col-12 col-md-6 col-lg-6">
                                                                <div className="sl-communities-card">
                                                                    <div className="sl-communities-card-img">
                                                                        <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                                                    </div>
                                                                    <div className="sl-communities-card-body">
                                                                        <div className="sl-communities-card-header">
                                                                            <a href="#" className="sl-communities-title">Five Signs of a Highly Intelligent Person</a>
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
                                                            <div className="col col-12 col-md-6 col-lg-6">
                                                                <div className="sl-communities-card">
                                                                    <div className="sl-communities-card-img">
                                                                        <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                                                    </div>
                                                                    <div className="sl-communities-card-body">
                                                                        <div className="sl-communities-card-header">
                                                                            <a href="#" className="sl-communities-title">Five Signs of a Highly Intelligent Person</a>
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
                                                            <div className="col col-12 col-md-6 col-lg-6">
                                                                <div className="sl-communities-card">
                                                                    <div className="sl-communities-card-img">
                                                                        <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                                                    </div>
                                                                    <div className="sl-communities-card-body">
                                                                        <div className="sl-communities-card-header">
                                                                            <a href="#" className="sl-communities-title">Five Signs of a Highly Intelligent Person</a>
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
                                                            <div className="col col-12 col-md-6 col-lg-6">
                                                                <div className="sl-communities-card">
                                                                    <div className="sl-communities-card-img">
                                                                        <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                                                    </div>
                                                                    <div className="sl-communities-card-body">
                                                                        <div className="sl-communities-card-header">
                                                                            <a href="#" className="sl-communities-title">Five Signs of a Highly Intelligent Person</a>
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
                                                            <div className="col col-12 col-md-6 col-lg-6">
                                                                <div className="sl-communities-card">
                                                                    <div className="sl-communities-card-img">
                                                                        <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                                                    </div>
                                                                    <div className="sl-communities-card-body">
                                                                        <div className="sl-communities-card-header">
                                                                            <a href="#" className="sl-communities-title">Five Signs of a Highly Intelligent Person</a>
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
                                                            <div className="col col-12 col-md-6 col-lg-6">
                                                                <div className="sl-communities-card">
                                                                    <div className="sl-communities-card-img">
                                                                        <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                                                    </div>
                                                                    <div className="sl-communities-card-body">
                                                                        <div className="sl-communities-card-header">
                                                                            <a href="#" className="sl-communities-title">Five Signs of a Highly Intelligent Person</a>
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
                                                            <div className="col col-12 col-md-6 col-lg-6">
                                                                <div className="sl-communities-card">
                                                                    <div className="sl-communities-card-img">
                                                                        <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                                                    </div>
                                                                    <div className="sl-communities-card-body">
                                                                        <div className="sl-communities-card-header">
                                                                            <a href="#" className="sl-communities-title">Five Signs of a Highly Intelligent Person</a>
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
                                                            <div className="col col-12 col-md-6 col-lg-6">
                                                                <div className="sl-communities-card">
                                                                    <div className="sl-communities-card-img">
                                                                        <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                                                    </div>
                                                                    <div className="sl-communities-card-body">
                                                                        <div className="sl-communities-card-header">
                                                                            <a href="#" className="sl-communities-title">Five Signs of a Highly Intelligent Person</a>
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
                                                            <div className="col col-12 col-md-6 col-lg-6">
                                                                <div className="sl-communities-card">
                                                                    <div className="sl-communities-card-img">
                                                                        <img src="images/five-signs.png" alt="five-signs" className="img-fluid" />
                                                                    </div>
                                                                    <div className="sl-communities-card-body">
                                                                        <div className="sl-communities-card-header">
                                                                            <a href="#" className="sl-communities-title">Five Signs of a Highly Intelligent Person</a>
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
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/chris-hemsworth.png" alt="chris-hemsworth" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">Chris Hemsworth Is Exactly What’s Wrong With the Fitness Industry</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/five-signs.png" alt="five-signs" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">Five Signs of a Highly Intelligent Person</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/chris-hemsworth.png" alt="chris-hemsworth" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">Chris Hemsworth Is Exactly What’s Wrong With the Fitness Industry</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="sl-site-navigation mb-5">
                                                        <nav aria-label="Page navigation example">
                                                            <ul class="pagination">
                                                                <li class="page-item disabled">
                                                                    <a class="page-link" href="#" aria-label="Previous">
                                                                        <i class="fas fa-chevron-left"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">5</a></li>
                                                                <li class="page-item">...</li>
                                                                <li class="page-item"><a class="page-link" href="#">99</a></li>
                                                                <li class="page-item">
                                                                    <a class="page-link" href="#" aria-label="Next">
                                                                        <i class="fas fa-chevron-right"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                    </div>
                                                    <div class="sl-yoga-events-upcoming">
                                                        <h4 class="sl-yoga-events-itle">Communities I joined</h4>
                                                        <div class="row">
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/chris-hemsworth.png" alt="chris-hemsworth" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">Chris Hemsworth Is Exactly What’s Wrong With the Fitness Industry</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/how-to-stop.png" alt="how-to-stop" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">How to Stop Feeling Tired All the Time</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/how-did.png" alt="how-did" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">How I Did More By Doing Less</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/minutes-on-friday.png" alt="minutes-on-friday" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">10 Minutes on Friday That Will Make Your Monday 10 Times Easier</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/chris-hemsworth.png" alt="chris-hemsworth" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">Chris Hemsworth Is Exactly What’s Wrong With the Fitness Industry</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/how-to-stop.png" alt="how-to-stop" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">How to Stop Feeling Tired All the Time</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/how-did.png" alt="how-did" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">How I Did More By Doing Less</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/minutes-on-friday.png" alt="minutes-on-friday" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">10 Minutes on Friday That Will Make Your Monday 10 Times Easier</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/chris-hemsworth.png" alt="chris-hemsworth" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">Chris Hemsworth Is Exactly What’s Wrong With the Fitness Industry</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/how-to-stop.png" alt="how-to-stop" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">How to Stop Feeling Tired All the Time</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/how-did.png" alt="how-did" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">How I Did More By Doing Less</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/minutes-on-friday.png" alt="minutes-on-friday" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">10 Minutes on Friday That Will Make Your Monday 10 Times Easier</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/chris-hemsworth.png" alt="chris-hemsworth" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">Chris Hemsworth Is Exactly What’s Wrong With the Fitness Industry</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/how-to-stop.png" alt="how-to-stop" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">How to Stop Feeling Tired All the Time</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/how-did.png" alt="how-did" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">How I Did More By Doing Less</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/minutes-on-friday.png" alt="minutes-on-friday" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">10 Minutes on Friday That Will Make Your Monday 10 Times Easier</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/chris-hemsworth.png" alt="chris-hemsworth" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">Chris Hemsworth Is Exactly What’s Wrong With the Fitness Industry</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/how-to-stop.png" alt="how-to-stop" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">How to Stop Feeling Tired All the Time</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/how-did.png" alt="how-did" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">How I Did More By Doing Less</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col col-12 col-md-6 col-lg-6">
                                                                <div class="sl-communities-card">
                                                                    <div class="sl-communities-card-img">
                                                                        <img src="images/minutes-on-friday.png" alt="minutes-on-friday" class="img-fluid" />
                                                                    </div>
                                                                    <div class="sl-communities-card-body">
                                                                        <div class="sl-communities-card-header">
                                                                            <a href="#" class="sl-communities-title">10 Minutes on Friday That Will Make Your Monday 10 Times Easier</a>
                                                                            <label class="sl-communities-location">Kyiv, Ukraine</label>
                                                                        </div>
                                                                        <p class="sl-communities-card-description">Quisque viverra ante ac arcu efficitur tempus. Cras at sem a massa iaculis commodo nec quis nisi. Quisque ultricies...</p>
                                                                    </div>
                                                                    <div class="sl-communities-card-footer">
                                                                        <ul class="sl-member-list">
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member1.png" alt="member1" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member2.png" alt="member2" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member3.png" alt="member3" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member4.png" alt="member4" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member5.png" alt="member5" class="img-fluid" />
                                                                            </li>
                                                                            <li class="sl-member-item">
                                                                                <img src="images/member6.png" alt="member6" class="img-fluid" />
                                                                            </li>
                                                                        </ul>
                                                                        <label class="sl-member-count">10 members</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="sl-site-navigation">
                                                        <nav aria-label="Page navigation example">
                                                            <ul class="pagination">
                                                                <li class="page-item disabled">
                                                                    <a class="page-link" href="#" aria-label="Previous">
                                                                        <i class="fas fa-chevron-left"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">5</a></li>
                                                                <li class="page-item">...</li>
                                                                <li class="page-item"><a class="page-link" href="#">99</a></li>
                                                                <li class="page-item">
                                                                    <a class="page-link" href="#" aria-label="Next">
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
                    : <Loader
                        loaded={!loading}
                        lines={12}
                        length={10}
                        width={5}
                        radius={20}
                        corners={1}
                        rotate={0}
                        direction={1}
                        color="#8BD8BD"
                        speed={1}
                        trail={60}
                        shadow={true}
                        hwaccel={true}
                        className="spinner"
                        zIndex={2e9}
                        top="50%"
                        left="50%"
                        scale={1.0}
                        loadedClassName="loadedContent"
                    />}
            </div>
            <Footer />
        </Fragment>
    )
}

export default Edit_User_Profile;