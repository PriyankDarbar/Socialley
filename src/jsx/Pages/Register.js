import React, { Fragment, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import db from './firebase';

const Register = (props) => {

    const [disable, setDisable] = useState(false);
    const [errors, setErrors] = useState({});
    const [users, setUsers] = useState({
        email: "",
        password: "",
        retype: ""
    });

    const registerHandler = (e) => {
        const newRegister = { ...users };
        newRegister[e.target.name] = e.target.value;
        console.log("data", newRegister)
        setUsers(newRegister);
    }

    const validate = () => {
        let isValid = true;
        let error = {};
        let input = users;
        if (!input['email']) {
            isValid = false;
            error['email'] = "Please Enter Email ID"
        }
        if (!input['password']) {
            isValid = false;
            error['password'] = "Please Enter Password"
        }
        if (!input['retype']) {
            isValid = false;
            error['retype'] = "Please Reenter Your Password"
        }
        setErrors(error);
        return isValid;
    }

    let navigate = useNavigate();
    const handlerRegister = (e) => {
        e.preventDefault();
        setDisable(true);
        if (validate()) {
            db.collection("Registered-User").add({
                email: users.email,
                password: users.password,
                retype: users.retype
            }).then((doc) => {
                localStorage.setItem('USER_EMAIL', users.email);
                localStorage.setItem('USER_ID', doc.id);
                setDisable(false);
                navigate('/email-registration-confiramation');
            })
            setDisable(false);
        } else {
            console.log('failed');
            setDisable(false);
        }
    }



    return (
        <Fragment>
            <Modal
                className='modal fade sl-light-modal'
                id='userRegisterModal'
                size='sl'
                show={props.activeModal}
                onHide={props.setActiveModal}
                backdrop="static"
                keyboard={false} >
                <Modal.Header>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.setActiveModal}></button>
                </Modal.Header>
                <Modal.Body>
                    <div className="sl-modal-logo text-center">
                        <img src="images/logo.png" alt="logo" className="img-fluid" />
                    </div>
                    <h5 className="modal-title" id="userRegisterModalLabel">Registration</h5>
                    <div className="sl-edit-profile-content">
                        <form className="row g-3" onSubmit={(e) => handlerRegister(e)}>
                            <div className="col-12">
                                <label for="inputResEmail" className="form-label">Email</label>
                                <div className="sl-forminput-group">
                                    <input type="email" className="form-control" id="email" name="email" onChange={(e) => registerHandler(e)} />
                                    <img src="images/user-icon.png" alt="user-icon" className="img-fluid" />
                                    <div className='errors'>{errors.email}</div>
                                </div>
                            </div>
                            <div className="col-12">
                                <label for="inputResPassword" className="form-label">Password</label>
                                <div className="sl-forminput-group">
                                    <input type="password" className="form-control" id="password" name="password" onChange={(e) => registerHandler(e)} />
                                    <img src="images/password-icon.png" alt="password-icon" className="img-fluid" />
                                    <div className='errors'>{errors.password}</div>

                                </div>
                            </div>
                            <div className="col-12">
                                <label for="inputResRePassword" className="form-label">Retype password</label>
                                <div className="sl-forminput-group">
                                    <input type="password" className="form-control" id="retype" name="retype" onChange={(e) => registerHandler(e)} />
                                    <img src="images/password-icon.png" alt="password-icon" className="img-fluid" />
                                    <div className='errors'>{errors.retype}</div>

                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-success d-block w-100" disabled={disable} >{disable ? 'Proccessing....' : 'Register'}</button>
                                <p className="sl-modal-description">Alredy have an account? <a href="#" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#userLoginModal" onClick={props.reLogin} >Log in</a></p>
                            </div>
                        </form>
                    </div>

                </Modal.Body>
            </Modal>
        </Fragment>
    )
}

export default Register;