import React, { Fragment, useState } from 'react';
import Header1 from '../layouts/Header1';
import Footer from '../layouts/Footer';
import Update_Cover_Modal from '../Modals/Update_Cover_Modal';
import Post_Successfull_Modal from '../Modals/Post_Successfull_Modal';

const Edit_Post = () => {

    const [uploadModal, setUploadModal] = useState(false);

    const [postsuccessModal, setPostsuccessModal] = useState(false);

    const handlePost = () => {
        setPostsuccessModal(true);
    }

    const handlePostClose = () => {
        setPostsuccessModal(false);
    }

    const handleUpdate = () => {
        setUploadModal(true);
    }

    const handleUpdateClose = () => {
        setUploadModal(false);
    }

    return (
        <Fragment>
            <Update_Cover_Modal
                activeModal={uploadModal}
                setActiveModal={handleUpdateClose}
            />
            <Post_Successfull_Modal
                activeModal={postsuccessModal}
                setActiveModal={handlePostClose}
            />
            <Header1 />
            <div className="sl-site-content">
                <section className="sl-edit-post-landing-section">
                    <div className="sl-edit-post-landing-img">
                        <img src="images/post-landing-img2.png" alt="post-landing-img2" className="img-fluid" />
                    </div>
                    <div className="sl-edit-post-landing-btn">
                        <div className="container">
                            <a className="btn btn-success" onClick={handleUpdate}>Edit Cover Photo</a>
                        </div>
                    </div>
                </section>

                <section className="sl-edit-post-section">
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-md-12 col-lg-10 col-xl-8">
                                <div className="sl-edit-post-form">
                                    <form className="row g-3">
                                        <div className="col-md-10">
                                            <label for="inputTitle" className="form-label">Title</label>
                                            <input type="text" className="form-control" id="inputTitle" value="The 70–20–10 System Will Help You Make Really Cool Stuff" />
                                        </div>
                                        <div className="col-md-10">
                                            <label for="inputMainCategory" className="form-label">Main Category</label>
                                            <select id="inputState" className="form-select">
                                                <option selected="">Health &amp; Wellness</option>
                                                <option>Health &amp; Wellness1</option>
                                                <option>Health &amp; Wellness2</option>
                                            </select>
                                        </div>
                                        <div className="col-md-5">
                                            <label for="inputSubcategory" className="form-label">Subcategory</label>
                                            <select id="inputState" className="form-select">
                                                <option selected="">Physics</option>
                                                <option> Physical Well-being</option>
                                                <option>Emotional Well-being</option>
                                                <option>Social Well-being</option>
                                            </select>
                                        </div>
                                        <div className="col-md-5">
                                            <label for="inputType" className="form-label">Type</label>
                                            <select id="inputState" className="form-select">
                                                <option selected="">Yoga</option>
                                                <option>Massage</option>
                                                <option>Detox</option>
                                                <option>Therapy </option>
                                                <option>Counselling </option>
                                                <option>Meditation </option>
                                                <option>Mindfulness </option>
                                                <option>Coaching </option>
                                                <option>Communication </option>
                                                <option>Social interaction</option>
                                                <option>Improving confidence</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12">
                                            <label for="inputBody" className="form-label">Description</label>
                                            <textarea className="form-control" name="postText" id="textarea" rows="3">
                                            </textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#postCreateSuccessModal" onClick={handlePost}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- <div className="modal fade" id="UploadCoverPhotoModal" tabindex="-1" aria-labelledby="UploadCoverPhotoModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body sl-choose-file-modal-body">
                        <h5 className="modal-title" id="UploadCoverPhotoModalLabel">Upload cover photo</h5>
                        <div className="sl-choose-file-content">
                            <div className="sl-choose-file-content__inner">
                                <span>Drag photo here</span>
                                <img src="images/drag-file-icon.png" alt="drag-file-icon" className="img-fluid" />
                                <span>or select from computer</span>
                                <input type="file" className="form-control" id="slSelectOtherFile" />
                            </div>
                            <button className="btn btn-outline-success">Set Random Photo</button>
                            <button className="btn btn-success">Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> --> */}

                {/* <!-- <div className="modal fade" id="UploadCoverPhotoModal" tabindex="-1" aria-labelledby="UploadCoverPhotoModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body sl-choose-file-modal-body">
                        <h5 className="modal-title" id="UploadCoverPhotoModalLabel">Upload cover photo</h5>
                        <div className="sl-choose-file-content sl-selected-file-content">
                            <div className="sl-selected-file-content__inner">
                                <div className="sl-selected-file-preview">
                                    <img src="images/cover-img.png" alt="cover-img" className="img-fluid sl-selected-file-view" />
                                    <span className="sl-selected-file-name">myphoto.png</span>
                                    <span className="sl-remove-icon">
                                        <img src="images/close-icon.png" alt="close-icon" className="img-fluid" />
                                    </span>
                                </div>
                                <div className="sl-select-other-file-content">
                                    <span>Select other photo</span>
                                    <input type="file" className="form-control" id="slSelectOtherFile">
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-outline-success">Set Random Photo</button>
                        <button className="btn btn-success">Upload</button>
                    </div>
                </div>
            </div>
        </div> --> */}

                {/* <div className="modal fade" id="UploadCoverPhotoModal" tabindex="-1" aria-labelledby="UploadCoverPhotoModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered sl-uploded-img-modal">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body sl-choose-file-modal-body">
                                <h5 className="modal-title" id="UploadCoverPhotoModalLabel">Upload cover photo</h5>
                                <div className="sl-choose-file-content sl-selecte-uploded-img">
                                    <ul className="sl-selecte-uploded-img-list">
                                        <li className="sl-selecte-uploded-img-item">
                                            <img src="images/cover-img1.png" alt="cover-img1" className="img-fluid" />
                                        </li>
                                        <li className="sl-selecte-uploded-img-item">
                                            <img src="images/cover-img2.png" alt="cover-img2" className="img-fluid" />
                                        </li>
                                        <li className="sl-selecte-uploded-img-item">
                                            <img src="images/cover-img3.png" alt="cover-img3" className="img-fluid" />
                                        </li>
                                        <li className="sl-selecte-uploded-img-item">
                                            <img src="images/cover-img4.png" alt="cover-img4" className="img-fluid" />
                                        </li>
                                        <li className="sl-selecte-uploded-img-item">
                                            <img src="images/cover-img5.png" alt="cover-img5" className="img-fluid" />
                                        </li>
                                        <li className="sl-selecte-uploded-img-item">
                                            <img src="images/cover-img6.png" alt="cover-img6" className="img-fluid" />
                                        </li>
                                        <li className="sl-selecte-uploded-img-item">
                                            <img src="images/cover-img7.png" alt="cover-img7" className="img-fluid" />
                                        </li>
                                        <li className="sl-selecte-uploded-img-item">
                                            <img src="images/cover-img8.png" alt="cover-img8" className="img-fluid" />
                                        </li>
                                        <li className="sl-selecte-uploded-img-item">
                                            <img src="images/cover-img9.png" alt="cover-img9" className="img-fluid" />
                                        </li>
                                    </ul>
                                </div>
                                <button className="btn btn-success">Upload</button>
                                <div className="sl-select-other-file-content">
                                    <span>Upload photo from my PC</span>
                                    <input type="file" className="form-control" id="slSelectOtherFile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div className="modal fade sl-light-modal" id="postCreateSuccessModal" tabindex="-1" aria-labelledby="postCreateSuccessModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="sl-modal-logo text-center">
                                    <img src="images/logo.png" alt="logo" className="img-fluid" />
                                </div>
                                <h5 className="modal-title" id="postCreateSuccessModalLabel">Your post has been successfully created.</h5>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <Footer />
        </Fragment>
    )
}

export default Edit_Post;