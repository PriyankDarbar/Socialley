import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Header1 = () => {
    return (
        <Fragment>
            <div className="sl-site-header">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src="images/logo.png" alt="Logo" className="img-fluid" />
                        </a>
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
                                                    <Link to="/yoga" className="sl-site-submenu-link">Yoga</Link>
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
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health-wellness-preferences">Health Wellness Preferences</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="sl-site-header-btn">
                            <a href="#" className="sl-logedin-user">
                                <img src="images/member1.png" alt="User Image" className="img-fluid" />
                                <span>Melany Jakobs</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default Header1