import React, { Fragment, useState } from 'react';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import { Link } from 'react-router-dom';

const Header = () => {

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
            <div className='sl-site'>
                <header class="sl-site-header">
                    <nav class="navbar navbar-expand-lg ">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="index.html">
                                <img src="images/logo.png" alt="Logo" class="img-fluid" />
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icons"></span>
                                <span class="navbar-toggler-icons"></span>
                                <span class="navbar-toggler-icons"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link " aria-current="page" href="#">Health &amp; Wellness</a>
                                        <ul class="sl-site-submenu-list">
                                            <li class="sl-site-submenu-item sl-site-hs-submenu">
                                                <a href="#" class="sl-site-submenu-link">Physical</a>
                                                <ul class="sl-site-submenu-list sl-site-submenu-list__inner">
                                                    <li class="sl-site-submenu-item">
                                                        <a href="yoga.html" class="sl-site-submenu-link">Yoga</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Massage</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Detox</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Exfoliation</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Sauna</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Relaxation</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">General body rejuvenation</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sl-site-submenu-item sl-site-hs-submenu">
                                                <a href="#" class="sl-site-submenu-link">Emotional</a>
                                                <ul class="sl-site-submenu-list sl-site-submenu-list__inner">
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Therapy</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Counselling</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Healing</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Meditation</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Coaching</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">General mind relaxation</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sl-site-submenu-item sl-site-hs-submenu">
                                                <a href="#" class="sl-site-submenu-link">Social</a>
                                                <ul class="sl-site-submenu-list sl-site-submenu-list__inner">
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Communication</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Social interation</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Improving confidence</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Community involvement</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sl-site-submenu-item sl-site-hs-submenu">
                                                <a href="#" class="sl-site-submenu-link">lntellectual</a>
                                                <ul class="sl-site-submenu-list sl-site-submenu-list__inner">
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Improving creativity</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Learing new skills</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Reading</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sl-site-submenu-item sl-site-hs-submenu">
                                                <a href="#" class="sl-site-submenu-link">Spiritual</a>
                                                <ul class="sl-site-submenu-list sl-site-submenu-list__inner">
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Inner calm</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Faith</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Beliefs</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Values</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Compassion</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Forgiveness</a>
                                                    </li>
                                                    <li class="sl-site-submenu-item">
                                                        <a href="#" class="sl-site-submenu-link">Religion &amp; Followship</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Fitness &amp; Nutrition</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Travel &amp; Sightseeing</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="sl-site-header-btn">
                                <a href="#" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#userLoginModal">Login</a>
                                <a href="#" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#userRegisterModal">Try for free</a>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </Fragment>
    )
}

export default Header