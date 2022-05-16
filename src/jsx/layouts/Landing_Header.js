import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '../Pages/Login';
import Register from '../Pages/Register'
const Landing_Header = () => {

    const [loginModal, setLoginModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);


    const handleLogin = () => {
        setLoginModal(true);
    }

    const handleLoginClose = () => {
        setLoginModal(false);
    }


    const handleRegister = () => {
        setRegisterModal(true);
    }

    const handleRegisterClose = () => {
        setRegisterModal(false);
    }

    const handleReRegister = () => {
        setLoginModal(false);
        setRegisterModal(true);
    }

    const handleReLogin = () => {
        setRegisterModal(false);
        setLoginModal(true);
    }

    return (
        <Fragment>
            <Login
                activeModal={loginModal}
                setActiveModal={handleLoginClose}
                reRegister={handleReRegister}
            />

            <Register
                activeModal={registerModal}
                setActiveModal={handleRegisterClose}
                reLogin={handleReLogin}
            />
            <div className="sl-site-header">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html">
                            <img src="images/logo-new.png" alt="logo-new" className="img-fluid" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icons"></span>
                            <span className="navbar-toggler-icons"></span>
                            <span className="navbar-toggler-icons"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">How it works</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="sl-site-header-btn">
                            <a href="#" className="btn btn-outline-success" data-bs-toggle="modal" onClick={handleLogin}>Login</a>
                            <a href="#" className="btn btn-success" data-bs-toggle="modal" onClick={handleRegister}>Try for free</a>

                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default Landing_Header;