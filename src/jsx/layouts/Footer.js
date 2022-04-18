import React from 'react'

const Footer = () => {
  return (
    <div className="sl-site-footer">
        <div className="container">
            <div className="row">
                <div className="col col-6 col-md-3 col-lg-2">
                    <div className="sl-footer-content">
                        <div className="sl-footer-logo">
                            <a href="index.html">
                                <img src="images/logo.png" alt="Logo" className="img-fluid"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col col-6 col-md-2 col-lg-2">
                    <div className="sl-footer-content">
                        <a href="#" className="sl-footer-menu-title">About Us</a>
                    </div>
                </div>
                <div className="col col-6 col-md-3 col-lg-3">
                    <div className="sl-footer-content">
                        <h4 className="sl-footer-menu-title">About Us</h4>
                        <ul className="sl-footer-menu-list">
                            <li className="sl-footer-menu-item">
                                <a href="#" className="sl-footer-menu-link">Health &amp; Wellness</a>
                            </li>
                            <li className="sl-footer-menu-item">
                                <a href="#" className="sl-footer-menu-link">Fitness &amp; Nutrition</a>
                            </li>
                            <li className="sl-footer-menu-item">
                                <a href="#" className="sl-footer-menu-link">Travel &amp; Sightseeing</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col col-12 col-md-4 col-lg-5">
                    <div className="sl-footer-content">
                        <div className="sl-site-info">
                            <h4 className="sl-site-info-title">About SOCIALLY.UK</h4>
                            <p className="sl-site-info-description">A few sentences about the portal here. ClassName aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus quis eleifend urna.</p>
                            <a href="#" className="sl-site-info-link">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer