import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../layouts/Footer';
import Header1 from '../layouts/Header1';

const Health_Wellness_Preferences = () => {

    const [errors, setErrors] = useState({});
    const [category, setCateory] = useState([]);
    const [mood, setMood] = useState([]);
    const [content, setContent] = useState([]);
    const [notification, setNotification] = useState([]);

    const validate = () => {
        let isValid = true;
        let error = {};
        if (category.length === 0) {
            isValid = false;
            error['category_err'] = "Please select atleast one category"
        }
        if (mood.length === 0) {
            isValid = false;
            error['mood_err'] = "Please select atleast one mood"
        }
        if (content.length === 0) {
            isValid = false;
            error['content_err'] = "Please select atleast one content"
        }
        if (notification.length === 0) {
            isValid = false;
            error['notification_err'] = "Please select atleast one notification"
        }
        setErrors(error);
        return isValid;
    }

    const HandleCategory = (e) => {
        if (e.target.checked) {
            let cat = [...category];
            cat.push(e.target.value);
            setCateory(cat);
        } else {
            let cat = [...category];
            let index = cat.indexOf(e.target.value);
            cat.splice(index, 1);
            setCateory(cat);
        }
    }

    const HandleMood = (e) => {
        if (e.target.checked) {
            let mod = [...mood];
            mod.push(e.target.value);
            setMood(mod);
        } else {
            let mod = [...mood];
            let index = mod.indexOf(e.target.value);
            mod.splice(index, 1);
            setMood(mod);
        }
    }

    const HandleContent = (e) => {
        if (e.target.checked) {
            let con = [...content];
            con.push(e.target.value);
            setContent(con);
        } else {
            let con = [...content];
            let index = con.indexOf(e.target.value);
            con.splice(index, 1);
            setContent(con);
        }
    }

    const HandleNotification = (e) => {
        if (e.target.checked) {
            let notf = [...notification];
            notf.push(e.target.value);
            setNotification(notf);
        } else {
            let notf = [...notification];
            let index = notf.indexOf(e.target.value);
            notf.splice(index, 1);
            setNotification(notf);
        }
    }

    let nav = useNavigate();
    const HandleConfirm = () => {
        if (validate()) {
            let selected = [category, mood, content, notification];
            localStorage.setItem("health-preferences", JSON.stringify(selected));
            nav('/review-page');
        }
    }

    return (
        <Fragment>
            <Header1 />
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
                                                    <div className="sl-preferences-form-content">
                                                        <div className="sl-preferences-form-header">
                                                            <div className="sl-preferences-form-icon">
                                                                <img src="images/category-icon.png" alt="category-icon" className="img-fluid" />
                                                            </div>
                                                            <label className="sl-preferences-header-label">Categories</label>
                                                        </div>
                                                        <div className="sl-preferences-form-body">
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="checkbox" id="CategoriCheckbox1" value="option1" onChange={HandleCategory} checked={category.includes("option1")} />
                                                                <label className="form-check-label" for="CategoriCheckbox1">Physical Well-being </label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="checkbox" id="CategoriCheckbox2" value="option2" onChange={HandleCategory} checked={category.includes("option2")} />
                                                                <label className="form-check-label" for="CategoriCheckbox2">Emotional Well-being</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="checkbox" id="CategoriCheckbox2" value="option3" onChange={HandleCategory} checked={category.includes("option3")} />
                                                                <label className="form-check-label" for="CategoriCheckbox2">Social Well-being</label>
                                                            </div>
                                                        </div>
                                                        <div className='errors'>{errors.category_err}</div>
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
                                                                <input className="form-check-input" type="checkbox" id="moodCheckbox1" value="option1" onChange={HandleMood} checked={mood.includes("option1")} />
                                                                <label className="form-check-label" for="moodCheckbox1">Focus</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="checkbox" id="moodCheckbox2" value="option2" onChange={HandleMood} checked={mood.includes("option2")} />
                                                                <label className="form-check-label" for="moodCheckbox2">Sleep</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="checkbox" id="moodCheckbox3" value="option3" onChange={HandleMood} checked={mood.includes("option3")} />
                                                                <label className="form-check-label" for="moodCheckbox3">Relaxation</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="checkbox" id="moodCheckbox4" value="option4" onChange={HandleMood} checked={mood.includes("option4")} />
                                                                <label className="form-check-label" for="moodCheckbox4">Stress &amp; Anxiety</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="checkbox" id="moodCheckbox5" value="option5" onChange={HandleMood} checked={mood.includes("option5")} />
                                                                <label className="form-check-label" for="moodCheckbox5">Inner Calm</label>
                                                            </div>
                                                        </div>
                                                        <div className='errors'>{errors.mood_err}</div>
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
                                                                <input className="form-check-input" type="checkbox" id="contentCheckbox1" value="option1" onChange={HandleContent} checked={content.includes("option1")} />
                                                                <label className="form-check-label" for="contentCheckbox1">Event</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="checkbox" id="contentCheckbox2" value="option2" onChange={HandleContent} checked={content.includes("option2")} />
                                                                <label className="form-check-label" for="contentCheckbox2">Blogs/Articles</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="checkbox" id="contentCheckbox3" value="option3" onChange={HandleContent} checked={content.includes("option3")} />
                                                                <label className="form-check-label" for="contentCheckbox3">Communities</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="checkbox" id="contentCheckbox4" value="option4" onChange={HandleContent} checked={content.includes("option4")} />
                                                                <label className="form-check-label" for="contentCheckbox4">Focus Music</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="checkbox" id="contentCheckbox5" value="option5" onChange={HandleContent} checked={content.includes("option5")} />
                                                                <label className="form-check-label" for="contentCheckbox5">Training Programs</label>
                                                            </div>
                                                        </div>
                                                        <div className='errors'>{errors.content_err}</div>
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
                                                                <input className="form-check-input" type="checkbox" id="notificationCheckbox1" value="option1" onChange={HandleNotification} checked={notification.includes("option1")} />
                                                                <label className="form-check-label" for="notificationCheckbox1">Daily  </label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="checkbox" id="notificationCheckbox2" value="option2" onChange={HandleNotification} checked={notification.includes("option2")} />
                                                                <label className="form-check-label" for="notificationCheckbox2">Weekly</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="checkbox" id="notificationCheckbox3" value="option3" onChange={HandleNotification} checked={notification.includes("option3")} />
                                                                <label className="form-check-label" for="notificationCheckbox3">Monthly</label>
                                                            </div>
                                                        </div>
                                                        <div className='errors'>{errors.notification_err}</div>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <a className="btn btn-success" onClick={HandleConfirm}>Confirm</a>
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

export default Health_Wellness_Preferences