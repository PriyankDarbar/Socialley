import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Loader from 'react-loader';
import db from '../Pages/firebase';
import { ToastContainer, toast } from 'react-toastify';

const Review_Page = () => {

    let nav = useNavigate();

    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState([]);

    const HandleReview = () => {
        db.collection('Registered-User').doc(localStorage.getItem('USER_ID')).collection('Health_Preferences').add({
            category: selected[0],
            mood: selected[1],
            content: selected[2],
            notification: selected[3]
        }).then(() => {
            toast.success("The data is successfully inserted to the firebase");
            console.log("Selected");
            // nav('/acknowledgement');
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        let rData = localStorage.getItem("health-preferences");
        setSelected(JSON.parse(rData));
        setLoading(false);
    }, []);

    console.log("Hi there", selected);

    return (
        <Fragment>
            <ToastContainer />
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
                                                {!loading ?
                                                    <div className="sl-preferences-content">
                                                        <h2 className="sl-review-preference-title">Review Your Selected Preference</h2>

                                                        <div className="sl-preferences-edit-form-header">
                                                            <label className="sl-preferences-edit-form-label">1. Health &amp; Wellness</label>
                                                            <Link to="/health-wellness-preferences" className="sl-preferences-edit-form-link">
                                                                <img src="images/edit-icon.png" alt="edit-icon" className="img-fluid" />
                                                            </Link>
                                                        </div>

                                                        <div className="sl-preferences-form-content">
                                                            <div className="sl-preferences-form-header">
                                                                <div className="sl-preferences-form-icon">
                                                                    <img src="images/category-icon.png" alt="category-icon" className="img-fluid" />
                                                                </div>
                                                                <label className="sl-preferences-header-label">Categories</label>
                                                            </div>
                                                            <div className="sl-preferences-form-body">
                                                                {selected[0].includes("option1") ?
                                                                    <div className="form-check form-check-inline">
                                                                        <input className="form-check-input" type="checkbox" id="CategoriCheckbox1" value="option1" checked={true} disabled={true} />
                                                                        <label className="form-check-label" for="CategoriCheckbox1">Physical Well-being </label>
                                                                    </div>
                                                                    : ''}
                                                                {selected[0].includes("option2") ?
                                                                    <div className="form-check form-check-inline">
                                                                        <input className="form-check-input" type="checkbox" id="CategoriCheckbox2" value="option2" checked={true} disabled={true} />
                                                                        <label className="form-check-label" for="CategoriCheckbox2">Emotional Well-being</label>
                                                                    </div>
                                                                    : ''}
                                                                {selected[0].includes("option3") ?
                                                                    <div className="form-check form-check-inline">
                                                                        <input className="form-check-input" type="checkbox" id="CategoriCheckbox2" value="option3" checked={true} disabled={true} />
                                                                        <label className="form-check-label" for="CategoriCheckbox2">Social Well-being</label>
                                                                    </div>
                                                                    : ''}
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
                                                                {selected[1].includes("option1") ?
                                                                    <div className="form-check form-check-inline">
                                                                        <input className="form-check-input" type="checkbox" id="moodCheckbox1" value="option1" checked={true} disabled={true} />
                                                                        <label className="form-check-label" for="moodCheckbox1">Focus</label>
                                                                    </div>
                                                                    : ""}
                                                                {selected[1].includes("option2") ?
                                                                    <div className="form-check form-check-inline">
                                                                        <input className="form-check-input" type="checkbox" id="moodCheckbox2" value="option2" checked={true} disabled={true} />
                                                                        <label className="form-check-label" for="moodCheckbox2">Sleep</label>
                                                                    </div>
                                                                    : ""}
                                                                {selected[1].includes("option3") ?
                                                                    <div className="form-check form-check-inline">
                                                                        <input className="form-check-input" type="checkbox" id="moodCheckbox3" value="option3" checked={true} disabled={true} />
                                                                        <label className="form-check-label" for="moodCheckbox3">Relaxation</label>
                                                                    </div>
                                                                    : ""}
                                                                {selected[1].includes("option4") ?
                                                                    <div className="form-check form-check-inline">
                                                                        <input className="form-check-input" type="checkbox" id="moodCheckbox4" value="option4" checked={true} disabled={true} />
                                                                        <label className="form-check-label" for="moodCheckbox4">Stress &amp; Anxiety</label>
                                                                    </div>
                                                                    : ""}
                                                                {selected[1].includes("option5") ?
                                                                    <div className="form-check form-check-inline">
                                                                        <input className="form-check-input" type="checkbox" id="moodCheckbox5" value="option5" checked={true} disabled={true} />
                                                                        <label className="form-check-label" for="moodCheckbox5">Inner Calm</label>
                                                                    </div>
                                                                    : ""}
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
                                                                {selected[2].includes("option1") ?
                                                                    <div className="form-check form-check-inline">
                                                                        <input className="form-check-input" type="checkbox" id="contentCheckbox1" value="option1" checked={true} disabled={true} />
                                                                        <label className="form-check-label" for="contentCheckbox1">Event</label>
                                                                    </div>
                                                                    : ""}
                                                                {selected[2].includes("option2") ?
                                                                    <div className="form-check form-check-inline">
                                                                        <input className="form-check-input" type="checkbox" id="contentCheckbox2" value="option2" checked={true} disabled={true} />
                                                                        <label className="form-check-label" for="contentCheckbox2">Blogs/Articles</label>
                                                                    </div>
                                                                    : ""}
                                                                {selected[2].includes("option3") ?
                                                                    <div className="form-check form-check-inline">
                                                                        <input className="form-check-input" type="checkbox" id="contentCheckbox3" value="option3" checked={true} disabled={true} />
                                                                        <label className="form-check-label" for="contentCheckbox3">Communities</label>
                                                                    </div>
                                                                    : ""}
                                                                {selected[2].includes("option4") ?
                                                                    <div className="form-check form-check-inline">
                                                                        <input className="form-check-input" type="checkbox" id="contentCheckbox4" value="option4" checked={true} disabled={true} />
                                                                        <label className="form-check-label" for="contentCheckbox4">Focus Music</label>
                                                                    </div>
                                                                    : ""}
                                                                {selected[2].includes("option5") ?
                                                                    <div className="form-check form-check-inline">
                                                                        <input className="form-check-input" type="checkbox" id="contentCheckbox5" value="option5" checked={true} disabled={true} />
                                                                        <label className="form-check-label" for="contentCheckbox5">Training Programs</label>
                                                                    </div>
                                                                    : ""}
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
                                                                {selected[3].includes("option1") ?
                                                                    <div className="form-check form-check-inline">
                                                                        <input className="form-check-input" type="checkbox" id="notificationCheckbox1" value="option1" checked={true} disabled={true} />
                                                                        <label className="form-check-label" for="notificationCheckbox1">Daily  </label>
                                                                    </div>
                                                                    : ""}
                                                                {selected[3].includes("option2") ?
                                                                    <div className="form-check form-check-inline">
                                                                        <input className="form-check-input" type="checkbox" id="notificationCheckbox2" value="option2" checked={true} disabled={true} />
                                                                        <label className="form-check-label" for="notificationCheckbox2">Weekly</label>
                                                                    </div>
                                                                    : ""}
                                                                {selected[3].includes("option3") ?
                                                                    <div className="form-check form-check-inline">
                                                                        <input className="form-check-input" type="checkbox" id="notificationCheckbox3" value="option3" checked={true} disabled={true} />
                                                                        <label className="form-check-label" for="notificationCheckbox3">Monthly</label>
                                                                    </div>
                                                                    : ""}
                                                            </div>
                                                        </div>
                                                    </div>
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
                                                <div className="text-end">
                                                    <a className="btn btn-success" onClick={HandleReview}>Confirm</a>
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