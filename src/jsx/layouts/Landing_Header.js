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

            <header className="sl-site-header sl-site-header-light">
                <div className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/home">
                            <img src="images/logo.png" alt="Logo" className="img-fluid" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icons"></span>
                            <span className="navbar-toggler-icons"></span>
                            <span className="navbar-toggler-icons"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Health &amp; Wellness</a>
                                    <ul className="sl-site-submenu-list">
                                        <li className="sl-site-submenu-item sl-site-hs-submenu">
                                            <a href="#" className="sl-site-submenu-link">Physical</a>
                                            <ul className="sl-site-submenu-list sl-site-submenu-list__inner">
                                                <li className="sl-site-submenu-item">
                                                    <Link to='/yoga' className="sl-site-submenu-link">Yoga</Link>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Massage</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Detox</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Exfoliation</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Sauna</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Relaxation</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">General body rejuvenation</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sl-site-submenu-item sl-site-hs-submenu">
                                            <a href="#" className="sl-site-submenu-link">Emotional</a>
                                            <ul className="sl-site-submenu-list sl-site-submenu-list__inner">
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Therapy</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Counselling</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Healing</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Meditation</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Coaching</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">General mind relaxation</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sl-site-submenu-item sl-site-hs-submenu">
                                            <a href="#" className="sl-site-submenu-link">Social</a>
                                            <ul className="sl-site-submenu-list sl-site-submenu-list__inner">
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Communication</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Social interation</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Improving confidence</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Community involvement</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sl-site-submenu-item sl-site-hs-submenu">
                                            <a href="#" className="sl-site-submenu-link">lntellectual</a>
                                            <ul className="sl-site-submenu-list sl-site-submenu-list__inner">
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Improving creativity</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Learing new skills</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Reading</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sl-site-submenu-item sl-site-hs-submenu">
                                            <a href="#" className="sl-site-submenu-link">Spiritual</a>
                                            <ul className="sl-site-submenu-list sl-site-submenu-list__inner">
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Inner calm</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Faith</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Beliefs</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Values</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Compassion</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Forgiveness</a>
                                                </li>
                                                <li className="sl-site-submenu-item">
                                                    <a href="#" className="sl-site-submenu-link">Religion &amp; Followship</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Business Account</a>
                                </li>
                            </ul>
                        </div>
                        <div className="sl-site-header-btn">
                            <a href="#" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#userLoginModal" onClick={handleLogin}>Login</a>
                            <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#userRegisterModal" onClick={handleRegister} >Try for free</a>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Landing_Header;