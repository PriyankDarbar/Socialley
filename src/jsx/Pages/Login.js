import React, { Fragment, useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Forgot_Password from './Forgot_Password';
import db from './firebase';

const Login = (props) => {

    const [forgotModal, setForgotModal] = useState(false);
    const [err, setErr] = useState('');
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);


    let navigate = useNavigate();

    const handleForgot = () => {
        props.setActiveModal();
        setForgotModal(true);
    }

    const handleForgotClose = () => {
        setForgotModal(false);
    }


    const loginHandler = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    const HandleCheck = (e) => {
        if (e.target.checked) {
            console.log("Checked");
            setChecked(true);
        } else {
            console.log("Notchecked");
            setChecked(false);
        }
    }

    const validate = () => {
        let isValid = true;
        let error = {};

        if (!email) {
            isValid = false;
            error['email'] = "Please Enter Email ID"
        }
        if (!password) {
            isValid = false;
            error['password'] = "Please Enter Password"
        }
        setErrors(error);
        return isValid;
    }

    const HandleLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            db.collection("Registered-User").where('email', '==', email).get().then((snapshot) => {
                if (snapshot.docs.length > 0) {
                    snapshot.forEach((doc) => {
                        if (doc.data().password === password) {
                            localStorage.setItem('USER_EMAIL', email);
                            localStorage.setItem('USER_ID', doc.id);
                            localStorage.setItem('USER_PASSWORD', password);
                            if (checked === true) {
                                localStorage.setItem('REMEMBER_ME', 'Enabled');
                            } else {
                                localStorage.setItem('REMEMBER_ME', 'Disabled');
                            }
                            navigate('/edit-user-profile');
                        } else {
                            setErr(" Incorrect Password")
                        }
                    })
                } else {
                    setErr('Email doesnt Exists')
                }
            })
        } else {
            console.log("failed");
        }
    }

    const handleClose = () => {
        props.setActiveModal();
        setErr('');
        setErrors({});
    }

    useEffect(() => {
        if (localStorage.getItem('REMEMBER_ME') === 'Enabled') {
            console.log("Enabled");
            setEmail(localStorage.getItem('USER_EMAIL'));
            setPassword(localStorage.getItem('USER_PASSWORD'));
            setChecked(true);
        } else {
            console.log("Disabled")
        }
    }, [])
    return (
        <Fragment>
            <Forgot_Password
                activeModal={forgotModal}
                setActiveModal={handleForgotClose}
            />


            <Modal
                className='modal fade sl-light-modal'
                id='userLoginModal'
                size='sl'
                show={props.activeModal}
                onHide={props.setActiveModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                </Modal.Header>
                <Modal.Body>
                    <div className="sl-modal-logo text-center">
                        <img src="images/logo.png" alt="logo" className="img-fluid" />
                    </div>
                    <h5 className="modal-title" id="userLoginLabel">You must be login to interact with site</h5>
                    <div className="sl-edit-profile-content">
                        <form className="row g-3">
                            <div className="col-12">
                                <label for="inputEmail" className="form-label">Email</label>
                                <div className="sl-forminput-group">
                                    <input type="email" className="form-control" id="inputEmail" name="email" onChange={(e) => loginHandler(e)} value={email} />
                                    <img src="images/user-icon.png" alt="user-icon" className="img-fluid" />
                                    <div className="errors">{errors.email}</div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="sl-forgot-pass-content">
                                    <label for="inputPassword" className="form-label">Password</label>
                                    <a href="#" className="sl-section-link" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#forgotPasswordModal" onClick={handleForgot}>Forgot password?</a>
                                </div>
                                <div className="sl-forminput-group">
                                    <input type="password" className="form-control" id="inputPassword" name="inputPassword" onChange={(e) => loginHandler(e)} value={password} />
                                    <img src="images/password-icon.png" alt="password-icon" className="img-fluid" />
                                    <div className='errors'>{errors.password}</div>
                                </div>
                            </div>

                            <div className='check-remember'>
                                <label>
                                    <input type="checkbox" checked={checked} name="remember_me" id="remember_me" onChange={HandleCheck} style={{ marginRight: "6px" }} />
                                    Remember Me
                                </label>
                            </div>

                            <div className='errors'>{err}</div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-success d-block w-100" onClick={(e) => HandleLogin(e)}>LOGIN</button>
                                <p className="sl-modal-description">Don’t have an account yet? <a href="#" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#userRegisterModal" onClick={props.reRegister} >Register</a></p>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal >
        </Fragment >
    )
}

export default Login;