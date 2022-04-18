import React, { Fragment, useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import db from '../Pages/firebase';

const EditProfileModal = (props) => {

    const [errors, setErrors] = useState({});

    const HandleSave = (e) => {
        e.preventDefault();
        if (validate()) {
            db.collection('Registered-User').doc(localStorage.getItem('USER_ID')).update({
                Name: UserData.full_name,
                Handle: UserData.inputHandle,
                Location: UserData.inputLocation,
                Phone: UserData.inputPhoneNumber
            });
            props.setActiveModal();
            localStorage.setItem('USER_NAME', UserData.full_name);
        } else {
            console.log("Failed to save");
        }
    }

    useEffect(() => {
        if (props.uData) {
            setUserData({
                full_name: props.uData.Name,
                inputHandle: props.uData.inputHandle,
                inputLocation: props.uData.inputLocation,
                inputPhoneNumber: props.uData.inputPhoneNumber
            })
        }
    }, []);

    const [UserData, setUserData] = useState({
        full_name: '',
        inputHandle: '',
        inputLocation: '',
        inputPhoneNumber: ''
    });


    const handleData = (e) => {
        const newData = { ...UserData };
        newData[e.target.name] = e.target.value;
        setUserData(newData)
    }

    const validate = () => {
        let isValid = true;
        let error = {};
        let input = UserData;
        if (!input['full_name']) {
            isValid = false;
            error['full_name'] = "Please Enter Name"
        }
        if (!input['inputHandle']) {
            isValid = false;
            error['inputHandle'] = "Please Enter inputHandle"
        }
        if (!input['inputLocation']) {
            isValid = false;
            error['inputLocation'] = "Please Enter Your Current Location"
        }
        if (!input['inputPhoneNumber']) {
            isValid = false;
            error['inputPhoneNumber'] = "Please Enter Your Phone Number"
        }
        setErrors(error);
        return isValid;
    }

    return (
        <Fragment>
            <Modal
                className='modal fade'
                id='editProfileDataModal'
                show={props.activeModal}
                onHide={props.setActiveModal}
                backdrop="static"
                size="lg"
                keyboard={false}>

                <Modal.Header>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.setActiveModal}></button>
                </Modal.Header>
                <Modal.Body>

                    <h5 className="modal-title" id="editProfileDataModalLabel">Edit Profile data</h5>
                    <div className="sl-edit-profile-content">
                        <form className="row g-3" onSubmit={(e) => HandleSave(e)}>
                            <div className="col-12">
                                <label htmlFor="inputName" className="form-label">Name</label>
                                <div className="sl-forminput-group">
                                    <input type="text" className="form-control" id="name" name="full_name" value={UserData.full_name} onChange={(e) => handleData(e)} />
                                    <img src="images/user-icon.png" alt="user-icon" className="img-fluid" />
                                    <div className='errors'>{errors.full_name}</div>
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputHandle" className="form-label">Handle</label>
                                <div className="sl-forminput-group">
                                    <input type="text" className="form-control" id="inputHandle" name="inputHandle" value={UserData.inputHandle} onChange={(e) => handleData(e)} />
                                    <img src="images/username-icon.png" alt="username-icon" className="img-fluid" />
                                    <div className='errors'>{errors.inputHandle}</div>
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputLocation" className="form-label">Location</label>
                                <div className="sl-forminput-group">
                                    <input type="text" className="form-control" id="inputLocation" name="inputLocation" value={UserData.inputLocation} onChange={(e) => handleData(e)} />
                                    <img src="images/location-icon.png" alt="location-icon" className="img-fluid" />
                                    <div className='errors'>{errors.inputLocation}</div>
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputPhoneNumber" className="form-label">Phone number</label>
                                <div className="sl-forminput-group">
                                    <input type="text" className="form-control" id="inputPhoneNumber" name="inputPhoneNumber" value={UserData.inputPhoneNumber} onChange={(e) => handleData(e)} />
                                    <img src="images/phone-icon.png" alt="phone-icon" className="img-fluid" />
                                    <div className='errors'>{errors.inputPhoneNumber}</div>
                                </div>
                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-success d-block w-100"> Save </button>
                            </div>
                        </form>
                    </div>

                </Modal.Body>

            </Modal>
        </Fragment>
    )
}

export default EditProfileModal;