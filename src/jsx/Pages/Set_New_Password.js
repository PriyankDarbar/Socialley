import React, { Fragment } from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const Set_New_Password = () => {
    return (
        <Fragment>
            <Header />
            <div className="sl-site-content">
                <section className="sl-landing-section">
                    <div className="container">
                        <div className="sl-landing-section__inner">
                            <div className="sl-set-new-pass-content" tabindex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="sl-modal-logo text-center">
                                                <img src="images/logo.png" alt="logo" className="img-fluid" />
                                            </div>
                                            <h5 className="modal-title" id="userRegisterModalLabel">Set a new password</h5>
                                            <div className="sl-edit-profile-content">
                                                <form className="row g-3">
                                                    <div className="col-12">
                                                        <label for="inputResPassword" className="form-label">Password</label>
                                                        <div className="sl-forminput-group">
                                                            <input type="password" className="form-control" id="inputResPassword" />
                                                            <img src="images/password-icon.png" alt="password-icon" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label for="inputResRePassword" className="form-label">Retype password</label>
                                                        <div className="sl-forminput-group">
                                                            <input type="password" className="form-control" id="inputResRePassword" />
                                                            <img src="images/password-icon.png" alt="password-icon" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <button type="submit" className="btn btn-success d-block w-100">Save</button>
                                                    </div>
                                                </form>
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

export default Set_New_Password