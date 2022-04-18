import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../layouts/Footer'
import Header1 from '../layouts/Header1'
import Delete_Confirm_Modal from '../Modals/Delete_Confirm_Modal';

const Topics_Posts_Details = () => {

    const [deleteModal, setDeleteModal] = useState(false);

    const handleDelete = () => {
        setDeleteModal(true);
    }

    const handleDeleteClose = () => {
        setDeleteModal(false);
    }

    return (
        <Fragment>
            <Delete_Confirm_Modal
                activeModal={deleteModal}
                setActiveModal={handleDeleteClose}
            />
            <Header1 />
            <div className="sl-site-content">
                <section className="sl-single-post-landing-section">
                    <div className="container">
                        <div className="sl-topic-post-header text-end">
                            <a href="#" className="sl-post-copy-link">
                                <span>Edit</span>
                                <span></span>
                                <img src="images/edit-icon.svg" alt="edit-icon" className="img-fluid" />
                            </a>
                            <a className="sl-post-copy-link" data-bs-toggle="modal" data-bs-target="#deleteConfrimModal" onClick={handleDelete} style={{ cursor: "pointer" }}>
                                <span>Delete</span>
                                <span></span>
                                <img src="images/delete-icon.svg" alt="delete-icon" className="img-fluid" style={{ cursor: "pointer" }} />
                            </a>
                        </div>
                        <div className="sl-single-post-landing-img">
                            <img src="images/post-landing-img.png" alt="post-landing-img" className="img-fluid" />
                        </div>
                        <div className="row">
                            <div className="col col-12 col-md-12 col-lg-12 col-xl-8">
                                <div className="sl-single-post-content">
                                    <div className="sl-single-post-header">
                                        <div className="sl-member-detail">
                                            <img src="images/member1.png" alt="member1" className="img-fluid" />
                                            <span>Kattie Roberts</span>
                                        </div>
                                        <div className="sl-post-rating">
                                            <span className="sl-post-rating-text">
                                                <span>4.5</span>
                                                <i className="fas fa-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <h1 className="sl-section-title">The 70–20–10 System Will Help You Make Really Cool Stuff</h1>
                                    <div className="sl-single-post-content__inner">
                                        <label>Nunc ac urna et enim dictum vulputate ac sit amet augue. </label>
                                        <p>Fusce elementum porta blandit. Ut tellus nisi, facilisis eu lacinia vestibulum, tempor vel ipsum. Pellentesque dictum dictum tellus at dapibus. Aliquam erat volutpat. Mauris in est dolor. Fusce fringilla erat sed nisl bibendum
                                            ultrices. Proin aliquet ex nec augue tempor, imperdiet aliquet quam imperdiet. Nunc id semper mauris. Integer blandit lacus ac velit interdum, et luctus ligula scelerisque. Cras tempor odio imperdiet, semper magna nec,
                                            rhoncus dui. Integer sollicitudin bibendum nibh, id viverra metus pretium ac. Phasellus ut felis enim.</p>
                                        <label>Vestibulum vestibulum lobortis suscipit.</label>
                                        <p>Donec vitae quam a magna blandit vehicula. Etiam neque nibh, malesuada quis lorem eu, tristique tincidunt urna. Etiam tempus augue nec augue maximus, nec elementum nunc luctus. Vestibulum finibus, massa et lobortis scelerisque,
                                            justo ex sagittis nisi, eu semper lectus ante nec velit. Fusce et placerat leo. Nunc suscipit tempus metus non hendrerit. Fusce mattis lorem non nisi dapibus, eget tincidunt elit tincidunt.<br /> Nam eu accumsan enim.
                                            Duis mollis, felis nec auctor cursus, justo leo vulputate mi, scelerisque vehicula velit magna et magna. Duis faucibus eros mi, ut fringilla lorem viverra eu. Cras ultricies quis tortor at pharetra. Nulla id eros ut
                                            arcu maximus consequat nec et magna. Fusce dictum fermentum dolor eget mattis. </p>
                                        <label>Donec lacinia leo volutpat, finibus orci vel, laoreet eros. </label>
                                        <p>Morbi tristique quis mauris in mollis. Ut pellentesque metus in semper fringilla. Vivamus blandit, arcu nec imperdiet bibendum, massa mi euismod ipsum, et condimentum orci nisl eget elit. Maecenas ac iaculis sem. Ut eget
                                            est porta, elementum sem in, bibendum lorem. Ut vestibulum condimentum eros id accumsan. Aliquam in dolor nec ipsum sagittis tincidunt nec vel sem. Donec vitae quam a magna blandit vehicula. Etiam neque nibh, malesuada
                                            quis lorem eu, tristique tincidunt urna. Etiam tempus augue nec augue maximus, nec elementum nunc luctus. Vestibulum finibus, massa et lobortis scelerisque, justo ex sagittis nisi, eu semper lectus ante nec velit. Fusce
                                            et placerat leo. Nunc suscipit tempus metus non hendrerit. Fusce mattis lorem non nisi dapibus, eget tincidunt elit tincidunt.<br /> Nam eu accumsan enim. Duis mollis, felis nec auctor cursus, justo leo vulputate mi,
                                            scelerisque vehicula velit magna et magna. Duis faucibus eros mi, ut fringilla lorem viverra eu. Cras ultricies quis tortor at pharetra. Nulla id eros ut arcu maximus consequat nec et magna. </p>
                                        <label>Etiam neque nibh, malesuada quis lorem eu, tristique tincidunt urna.</label>
                                        <p>Etiam tempus augue nec augue maximus, nec elementum nunc luctus. Vestibulum finibus, massa et lobortis scelerisque, justo ex sagittis nisi, eu semper lectus ante nec velit. Fusce et placerat leo. Nunc suscipit tempus metus
                                            non hendrerit. Fusce mattis lorem non nisi dapibus, eget tincidunt elit tincidunt.<br />Nam eu accumsan enim. Duis mollis, felis nec auctor cursus, justo leo vulputate mi, scelerisque vehicula velit magna et magna. Duis
                                            faucibus eros mi, ut fringilla lorem viverra eu. Cras ultricies quis tortor at pharetra. Nulla id eros ut arcu maximus consequat nec et magna. </p>
                                    </div>
                                    <div className="sl-single-post-footer">
                                        <div className="sl-single-post-like-btn">
                                            <img src="images/like-icon.svg" alt="like-icon" className="img-fluid" />
                                            <span className="sl-post-like-count">1456</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <div className="modal fade sl-delete-confrim-modal" id="deleteConfrimModal" tabindex="-1" aria-labelledby="deleteConfrimModalLabel" aria-hidden="true" style={{ display: "none" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center">
                                <h5 className="modal-title" id="deleteConfrimModalLabel">Are you sure you want to delete<br /> an post?</h5>
                                <div className="sl-confrim-delete-btn">
                                    <button type="button" className="btn btn-success">Yes</button>
                                    <button type="button" className="btn btn-light">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            <Footer />
        </Fragment>
    )
}

export default Topics_Posts_Details;