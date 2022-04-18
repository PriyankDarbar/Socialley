import React, { Fragment, useState } from 'react';
import Footer from '../layouts/Footer';
import Header1 from '../layouts/Header1';
import Event_Successfull_Modal from '../Modals/Event_Successfull_Modal';
import Update_Cover_Modal from '../Modals/Update_Cover_Modal';

const Create_Event_Inside_Community = () => {
  const [errors, setErrors] = useState({})
  const [events, setEvents] = useState({
    title: "",
    main_category: "",
    subcategory: "",
    type: "",
    event_description: "",
    date_time: "",
    location: "",
    join_event: "",
    virtual_location: "",
    venue: ""
  });
  const [successfullModal, setSuccessfullModal] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);

  const handleSuccessful = () => {
    setSuccessfullModal(true);
    // if (validate()) {
    //   console.log("Successfully Created a Event");
    // } else {
    //   console.log("Failed to Create Event");
    // }
  };

  const handleSuccessfulClose = () => {
    setSuccessfullModal(false);
  }

  const handleUpdate = () => {
    setUploadModal(true);
  }

  const handleUpdateClose = () => {
    setUploadModal(false);
  }

  const eventHandler = (e) => {
    const newEvent = { ...events };
    newEvent[e.target.name] = e.target.value;
    setEvents(newEvent);
  };

  const validate = () => {
    let isValid = true;
    let error = {};
    let input = events;
    if (!input['title']) {
      isValid = false;
      error['title'] = "Please Enter Title";
    }
    if (!input['join_event']) {
      isValid = false;
      error['join_event'] = "Please Join Event"
    }
    if (!input['virtual_location']) {
      isValid = false;
      error['virtual_location'] = "Please Enter Your Virtual Location"
    }
    if (!input['venue']) {
      isValid = false;
      error['venue'] = "Please Enter Venue"
    }
    if (!input['event_description']) {
      isValid = false;
      error['event_description'] = "Please Enter Event Description"
    }
    if (!input['location']) {
      isValid = false;
      error['location'] = "Please Enter Location"
    }
    if (!input['type']) {
      isValid = false;
      error['type'] = "Please Select Type"
    }
    if (!input['main_category']) {
      isValid = false;
      error['main_category'] = "Please Select Main Category "
    }
    if (!input['subcategory']) {
      isValid = false;
      error['subcategory'] = "Please Select Subcategory"
    }
    if (!input['date_time']) {
      isValid = false;
      error['date_time'] = "Please Enter Date And Time"
    }
    setErrors(error);
    return isValid;
  }

  return (
    <Fragment>
      <Update_Cover_Modal
        activeModal={uploadModal}
        setActiveModal={handleUpdateClose}
      />

      <Event_Successfull_Modal
        activeModal={successfullModal}
        setActiveModal={handleSuccessfulClose}
      />

      <Header1 />
      <div class="sl-site-content">
        <section class="sl-edit-post-landing-section">
          <div class="sl-edit-post-landing-img">
            <img src="images/post-landing-img2.png" alt="post-landing-img2" class="img-fluid" />
          </div>
          <div class="sl-edit-post-landing-btn">
            <div className="container">
              <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#UploadCoverPhotoModal" onClick={handleUpdate}>Edit Cover Photo</a>
            </div>
          </div>
        </section>

        <section className="sl-edit-post-section">
          <div className="container">
            <div className="row">
              <div className="col col-12 col-md-12 col-lg-10 col-xl-6">
                <div className="sl-edit-post-form">
                  <form className="row g-3">
                    <div className="col-12">
                      <label for="inputTitle" className="form-label">Title</label>
                      <input type="text" className="form-control" id="inputTitle" onChange={(e) => eventHandler(e)} />
                      <div className='errors'>{errors.title}</div>
                    </div>
                    <div className="col-md-12">
                      <label for="inputMainCategory" className="form-label">Main Category</label>
                      <select id="inputState" className="form-select" onChange={(e) => eventHandler(e)}>
                        <option selected="" disabled=""></option>
                        <option>Health &amp; Wellness</option>
                        <option>Health &amp; Wellness1</option>
                        <option>Health &amp; Wellness2</option>
                      </select>
                      <div className='errors'>{errors.main_category}</div>
                    </div>
                    <div className="col-md-6">
                      <label for="inputSubcategory" className="form-label">Subcategory</label>
                      <select id="inputState" className="form-select" onChange={(e) => eventHandler(e)}>
                        <option selected="" disabled=""></option>
                        <option> Physical Well-being</option>
                        <option>Emotional Well-being</option>
                        <option>Social Well-being</option>
                      </select>
                      <div className='errors'>{errors.subcategory}</div>
                    </div>
                    <div className="col-md-6">
                      <label for="inputType" className="form-label">Type</label>
                      <select id="inputState" className="form-select" onChange={(e) => eventHandler(e)}>
                        <option selected="" disabled=""></option>
                        <option>Yoga</option>
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
                      <div className='errors'>{errors.type}</div>
                    </div>
                    <div className="col-md-12">
                      <label for="inputBody" className="form-label">Event description</label>"
                      <textarea className="form-control" name="postText" id="textarea" rows="3" onChange={(e) => eventHandler(e)}></textarea>
                      <div className='errors'>{errors.event_description}</div>
                    </div>
                    <div className="col-md-12">
                      <label for="inputDateTime" className="form-label">Date &amp; Time</label>
                      <input type="text" className="form-control" id="inputDateTime" placeholder="When the event will be occuring?" onChange={(e) => eventHandler(e)} />
                      <div className='errors'>{errors.date_time}</div>
                    </div>
                    <div className="col-md-12">
                      <label for="inputLocation" className="form-label">Location</label>
                      <input type="text" className="form-control" id="inputLocation" placeholder="Where the event will be occuring?" onChange={(e) => eventHandler(e)} />
                      <div className='errors'>{errors.location}</div>
                    </div>
                    <div className="col-md-12">
                      <label for="inputjoinEvent" className="form-label">How to join event</label>
                      <input type="text" className="form-control" id="inputjoinEvent" placeholder="Provide people with info how they can join the even" onChange={(e) => eventHandler(e)} />
                      <div className='errors'>{errors.join_event}</div>
                    </div>
                    <div className="col-md-12">
                      <label for="inputGoogleMeet" className="form-label">Virtual location link (if it is an online event)</label>
                      <input type="text" className="form-control" id="inputGoogleMeet" placeholder="Put link here" onChange={(e) => eventHandler(e)} />
                      <div className='errors'>{errors.virtual_location}</div>
                    </div>
                    <div className="col-md-12">
                      <label for="inputBody" className="form-label">Venue</label>
                      <textarea className="form-control" name="postText" id="textarea1" rows="3" onChange={(e) => eventHandler(e)}></textarea>
                      <div className='errors'>{errors.venue}</div>
                    </div>
                    <div className="col-md-12">
                      <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#eventCreateSuccessModal" onClick={handleSuccessful}>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="modal fade sl-light-modal" id="eventCreateSuccessModal" tabindex="-1" aria-labelledby="eventCreateSuccessModalLabel" aria-hidden="true" style={{ display: "none" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="sl-modal-logo text-center">
                  <img src="images/logo.png" alt="logo" className="img-fluid" />
                </div>
                <h5 className="modal-title" id="eventCreateSuccessModalLabel">Your event has been successfully created.</h5>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <Footer />
    </Fragment>
  )
}

export default Create_Event_Inside_Community;
