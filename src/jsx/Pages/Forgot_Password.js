import React, { Fragment, useState } from 'react';
import { Modal } from 'react-bootstrap';

const Forgot_Password = (props) => {

    const [errors, setErrors] = useState({});
    const [users, setUsers] = useState({
        email: ""
    })

    const ForgotHandler = (e) => {
        const newPassword = { ...users };
        newPassword[e.target.name] = e.target.value;
        setUsers(newPassword);
    }

    const validate = () => {
        let isValid = true;
        let error = {};
        let input = users;

        if (!input['email']) {
            isValid = false;
            error['email'] = "Please Enter Your Email ID"
        }
        setErrors(error);
        return isValid;
    }

    const HandleSent = () => {
        if (validate()) {
            <p className="sl-modal-description">Link for password genarating wil be sent to your email</p>
        } else {
            console.log("Failed to Reset");
        }
    }

    return (
        <Fragment>
            <Modal
                className='modal fade sl-light-modal'
                id='forgotPasswordModal'
                size='lg'
                show={props.activeModal}
                onHide={props.setActiveModal}
                backdrop="static"
                keyboard={false}>
                <Modal.Header>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.setActiveModal}></button>

                </Modal.Header>
                <Modal.Body>
                    <h5 className="modal-title" id="forgotPasswordModalLabel">Forgot password</h5>
                    <div className="sl-edit-profile-content">
                        <form className="row g-3">
                            <div className="col-12">
                                <label for="inputEmail" className="form-label">Email</label>
                                <div className="sl-forminput-group">
                                    <input type="email" className="form-control" id="inputEmail" onChange={(e) => ForgotHandler(e)} />
                                    <img src="images/user-icon.png" alt="user-icon" className="img-fluid" />
                                    <div className='errors'>{errors.email}</div>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="button" className="btn btn-success d-block w-100" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#forgotPassSuccessModal" onClick={HandleSent}>SENT</button>

                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </Fragment>
    )
}

export default Forgot_Password;


