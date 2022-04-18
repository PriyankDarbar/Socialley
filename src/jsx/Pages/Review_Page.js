import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';

const Review_Page = () => {
    return (
        <Fragment>
            <Header />
            <div className="sl-site-content">
                <section className="sl-preferences-section">
                    <div className="container">
                        <div className="text-center">
                            <h1 className="sl-section-title">Your Well-being Preferences</h1>
                        </div>
                        <div className="sl-preferences-content">
                            <div className="sl-preferences-tabs">
                                <div className="container">
                                    <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="HealthWellness-tab" data-bs-toggle="tab" data-bs-target="#HealthWellness" type="button" role="tab" aria-controls="HealthWellness" aria-selected="true">1. Health &amp; Wellness</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sl-yoga-tab-content">
                                <div className="container">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="HealthWellness" role="tabpanel" aria-labelledby="HealthWellness-tab">
                                            <div className="sl-preferences-tab-content__inner">
                                                <div className="sl-preferences-content">
                                                    <h2 className="sl-review-preference-title">Review Your Selected Preference</h2>
                                                    <div className="sl-preferences-edit-form-header">
                                                        <label className="sl-preferences-edit-form-label">1. Health &amp; Wellness</label>
                                                        <a href="health-wellness-preferences.html" className="sl-preferences-edit-form-link">
                                                            <img src="images/edit-icon.png" alt="edit-icon" className="img-fluid" />
                                                        </a>
                                                    </div>
                                                    <div className="sl-preferences-form-content">
                                                        <div className="sl-preferences-form-header">
                                                            <div className="sl-preferences-form-icon">
                                                                <img src="images/category-icon.png" alt="category-icon" className="img-fluid" />
                                                            </div>
                                                            <label className="sl-preferences-header-label">Categories</label>
                                                        </div>
                                                        <div className="sl-preferences-form-body">
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="checkbox" id="CategoriCheckbox1" value="option1" />
                                                                <label className="form-check-label" for="CategoriCheckbox1">Physical Well-being </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sl-preferences-form-content">
                                                        <div className="sl-preferences-form-header">
                                                            <div className="sl-preferences-form-icon">
                                                                <img src="images/mood-icon.png" alt="mood-icon" className="img-fluid" />
                                                            </div>
                                                            <label className="sl-preferences-header-label">Mood</label>
                                                        </div>
                                                        <div className="sl-preferences-form-body">
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="checkbox" id="moodCheckbox1" value="option1" />
                                                                <label className="form-check-label" for="moodCheckbox1">Focus</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="checkbox" id="moodCheckbox3" value="option2" />
                                                                <label className="form-check-label" for="moodCheckbox3">Relaxation</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sl-preferences-form-content">
                                                        <div className="sl-preferences-form-header">
                                                            <div className="sl-preferences-form-icon">
                                                                <img src="images/content-icon.png" alt="content-icon" className="img-fluid" />
                                                            </div>
                                                            <label className="sl-preferences-header-label">Content</label>
                                                        </div>
                                                        <div className="sl-preferences-form-body">
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="checkbox" id="contentCheckbox1" value="option1" />
                                                                <label className="form-check-label" for="contentCheckbox1">Event</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sl-preferences-form-content">
                                                        <div className="sl-preferences-form-header">
                                                            <div className="sl-preferences-form-icon">
                                                                <img src="images/notification-frequency-icon.png" alt="notification-frequency-icon" className="img-fluid" />
                                                            </div>
                                                            <label className="sl-preferences-header-label">Notification Frequency</label>
                                                        </div>
                                                        <div className="sl-preferences-form-body">
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="checkbox" id="notificationCheckbox1" value="option1" />
                                                                <label className="form-check-label" for="notificationCheckbox1">Daily  </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <Link to={'/acknowledgement'} className="btn btn-success">Confirm</Link>
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

export default Review_Page;