import React, { Fragment, useState, useEffect } from 'react'
import Footer from '../layouts/Footer'
import Header1 from '../layouts/Header1'
import Post_Successfull_Modal from '../Modals/Post_Successfull_Modal';
import Update_Cover_Modal from '../Modals/Update_Cover_Modal';

const Create_Post_Inside_Community = () => {

    const [errors, setErrors] = useState({});
    const [posts, setPosts] = useState({
        title: "",
        post_description: ""
    });

    const Posthandler = (e) => {
        const newPosts = { ...posts }
        newPosts[e.target.name] = e.target.value;
        setPosts(newPosts);
    }

    const validate = () => {
        let isValid = true;
        let error = {};
        let input = posts;
        if (!input['title']) {
            isValid = false;
            error['title'] = "Please Enter Title";
        }
        if (!input['post_description']) {
            isValid = false;
            error['post_description'] = "Please describe about your post"
        }
        setErrors(error);
        return isValid;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [uploadModal, setUploadModal] = useState(false);
    const [postsuccessModal, setPostsuccessModal] = useState(false);

    const handlePost = () => {
        if (validate()) {
            console.log("Success");
            setPostsuccessModal(true);
        } else {
            console.log("Fail");
        }
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
            <div class="sl-site-content">
                <section class="sl-edit-post-landing-section">
                    <div class="sl-edit-post-landing-img">
                        <img src="images/post-landing-img2.png" alt="post-landing-img2" class="img-fluid" />
                    </div>
                    <div class="sl-edit-post-landing-btn">
                        <div class="container">
                            <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#UploadCoverPhotoModal" onClick={handleUpdate}>Edit Cover Photo</a>
                        </div>
                    </div>
                </section>

                <section class="sl-edit-post-section">
                    <div class="container">
                        <div class="row">
                            <div class="col col-12 col-md-12 col-lg-10 col-xl-6">
                                <div class="sl-edit-post-form">
                                    <form class="row g-3">
                                        <div class="col-12">
                                            <label for="inputTitle" class="form-label">Title</label>
                                            <input type="text" class="form-control" id="inputTitle" onChange={Posthandler} />
                                            <div className='errors'>{errors.title}</div>
                                        </div>
                                        <div class="col-12">
                                            <label for="inputBody" class="form-label">Description</label>
                                            <textarea class="form-control" name="postText" id="textarea" rows="3" onChange={Posthandler}></textarea>
                                            <div className='errors'>{errors.post_description}</div>
                                        </div>
                                        <div class="col-12">
                                            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#postCreateSuccessModal" onClick={handlePost}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <div class="modal fade sl-light-modal" id="postCreateSuccessModal" tabindex="-1" aria-labelledby="postCreateSuccessModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="sl-modal-logo text-center">
                            <img src="images/logo.png" alt="logo" class="img-fluid"/>
                        </div>
                        <h5 class="modal-title" id="postCreateSuccessModalLabel">Your post has been successfully created.</h5>
                    </div>
                </div>
            </div>
        </div> */}
            </div>

            <Footer />
        </Fragment>
    )
}

export default Create_Post_Inside_Community