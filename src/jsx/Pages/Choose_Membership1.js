import React, { Fragment } from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import { useNavigate } from 'react-router-dom'
import Confirm_Purchase from '../Pages/Confirm_Purchase'

const Choose_Membership1 = () => {

    const navigate = useNavigate();

    const handlePayment = () => {
        navigate('/confirm-purchase');
    }
    return (
        <Fragment>
            <Header />
            <div className="sl-site-content">
                <section className="sl-membership-section">
                    <div className="container">
                        <h1 className="text-center sl-section-title">Choose Your Membership</h1>
                        <div className="sl-membership-content">
                            <div className="row">
                                <div className="col col-12 col-md-6 col-lg-4">
                                    <div className="sl-membership-card">
                                        <div className="sl-membership-card-header">
                                            <h4 className="sl-membership-title">FREE PLAN</h4>
                                            <label className="sl-membership-price">$00</label>
                                            <p className="sl-membership-description">Perfect For beginners</p>
                                        </div>
                                        <div className="sl-membership-card-body">
                                            <ul className="sl-membership-benefits-list">
                                                <li className="sl-membership-benefits-item">Subscribe to event - Unlimited</li>
                                                <li className="sl-membership-benefits-item">Create event - Unlimited</li>
                                                <li className="sl-membership-benefits-item">Join a community - Unlimited</li>
                                                <li className="sl-membership-benefits-item">Create a community - Unlimited</li>
                                                <li className="sl-membership-benefits-item">Access focus music - 1 playlist genre per month</li>
                                                <li className="sl-membership-benefits-item">Access training programs - 20 per month</li>
                                            </ul>
                                        </div>
                                        <div className="sl-membership-card-footer">
                                            <div className="btn btn-primary" onClick={handlePayment}>Buy Now</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-md-6 col-lg-4">
                                    <div className="sl-membership-card">
                                        <div className="sl-membership-card-header">
                                            <h4 className="sl-membership-title">Silver Plan</h4>
                                            <label className="sl-membership-price">$100</label>
                                        </div>
                                        <div className="sl-membership-card-body">
                                            <ul className="sl-membership-benefits-list">
                                                <li className="sl-membership-benefits-item">View articles/blogs - Unlimited</li>
                                                <li className="sl-membership-benefits-item">Create articles/blogs - Unlimited</li>
                                                <li className="sl-membership-benefits-item">Subscribe to event - Unlimited</li>
                                                <li className="sl-membership-benefits-item">Create event - Unlimited</li>
                                                <li className="sl-membership-benefits-item">Join a community - Unlimited</li>
                                                <li className="sl-membership-benefits-item">Create a community - Unlimited</li>
                                                <li className="sl-membership-benefits-item">Access focus music - 3 playlist genre per month</li>
                                                <li className="sl-membership-benefits-item">Access training programs - Unlimited</li>
                                                <li className="sl-membership-benefits-item">Create training programs - Unlimited</li>
                                                <li className="sl-membership-benefits-item">Access wellness score</li>
                                            </ul>
                                        </div>
                                        <div className="sl-membership-card-footer">
                                            <div className="btn btn-primary" onClick={handlePayment}>Buy Now</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-md-6 col-lg-4">
                                    <div className="sl-membership-card">
                                        <div className="sl-membership-card-header">
                                            <h4 className="sl-membership-title">Gold Plan</h4>
                                            <label className="sl-membership-price">$150</label>
                                        </div>
                                        <div className="sl-membership-card-body">
                                            <ul className="sl-membership-benefits-list">
                                                <li className="sl-membership-benefits-item">View articles/blogs - Unlimited</li>
                                                <li className="sl-membership-benefits-item">Create articles/blogs - Unlimited</li>
                                                <li className="sl-membership-benefits-item">Subscribe to event - Unlimited</li>
                                                <li className="sl-membership-benefits-item">Create event - unlimited</li>
                                                <li className="sl-membership-benefits-item">Join a community - Unlimited</li>
                                                <li className="sl-membership-benefits-item">Create a community - Unlimited</li>
                                                <li className="sl-membership-benefits-item">Access focus music - Unlimited</li>
                                                <li className="sl-membership-benefits-item">View training programs - Unlimited</li>
                                                <li className="sl-membership-benefits-item">Access Wellness score</li>
                                                <li className="sl-membership-benefits-item">Access advanced wellness score</li>
                                                <li className="sl-membership-benefits-item">Connect with consultant</li>
                                            </ul>
                                        </div>
                                        <div className="sl-membership-card-footer">
                                            <div className="btn btn-primary" onClick={handlePayment}>Buy Now</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Choose_Membership1