import React, { Fragment, useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import db from '../Pages/firebase';
import Loader from 'react-loader';

const Forgot_Password = (props) => {

    const [errors, setErrors] = useState({});
    const [users, setUsers] = useState({
        email: ""
    })
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(true);
    let nav = useNavigate();

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

    const HandleEmail = () => {
        if (validate()) {
            db.collection('Registered-User').where('email', '==', users.email).get().then((snapshot) => {
                if (snapshot.docs.length > 0) {
                    setErrors({});
                    setErr("Email Exist");
                    props.setActiveModal();
                    nav('/email-change-pwd');
                } else {
                    setErr("Email Doesn't Exist")
                }
            })
        } else {
            console.log("failed");
        }
    }

    useEffect(() => {
        setLoading(false);
    }, [])

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
                                    <input type="email" className="form-control" id="inputEmail" name='email' onChange={ForgotHandler} />
                                    <img src="images/user-icon.png" alt="user-icon" className="img-fluid" />
                                    <div className='errors'>{errors.email}</div>
                                </div>
                            </div>
                            <div className='errors'>{err}</div>
                            <div className="col-12">
                                <button type="button" className="btn btn-success d-block w-100" onClick={HandleEmail}>SENT</button>
                            </div>
                        </form>
                    </div>
                    <Loader
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
                    />
                </Modal.Body>
            </Modal>
        </Fragment>
    )
}

export default Forgot_Password;


