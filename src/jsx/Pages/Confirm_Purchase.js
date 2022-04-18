import React, { Fragment } from 'react';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import { Link, useNavigate } from 'react-router-dom';

const Confirm_Purchase = () => {

    return (
        <Fragment>
            <Header />
            <div className="sl-site-content">
                <section className="sl-purchase-section">
                    <div className="container">
                        <h1 className="text-center sl-section-title">Confirm Purchase</h1>
                        <div className="sl-purchase-content">
                            <div className="row">
                                <div className="col col-12 col-md-5 col-lg-5">
                                    <div className="sl-purchase-content__inner">
                                        <div className="sl-puirchase-payment-content">
                                            <h3 className="sl-puirchase-payment-label">Payment with</h3>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="paymentRadios" id="paymentRadios1" value="credit" checked="true" />
                                                <label className="form-check-label" for="paymentRadios1">
                                                    Credit Card
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="paymentRadios" id="paymentRadios2" value="debit" />
                                                <label className="form-check-label" for="paymentRadios2">
                                                    Debit Card
                                                </label>
                                            </div>
                                        </div>
                                        <div className="sl-purchase-paypal-content">
                                            <p>Pay with
                                                <Link to="/paypal">
                                                    <img src="images/paypal-logo.png" alt="paypal-logo" className="img-fluid" /></Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-md-7 col-lg-7">
                                    <div className="sl-purchase-content__inner">
                                        <div className="sl-purchase-card-info-content">
                                            <div className="sl-purchase-card-info__inner" id="slCreditCard">
                                                <form className="row g-3">
                                                    <div className="col-md-12">
                                                        <label for="inputName" className="form-label">Name on card</label>
                                                        <div className="sl-forminput-group">
                                                            <input type="text" className="form-control" id="inputName" placeholder="Kristin Watson" />
                                                            <img src="images/card-holder-icon.png" alt="card-holder-icon" className=" /img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <label for="inputCardNumber" className="form-label">Card number</label>
                                                        <div className="sl-forminput-group">
                                                            <input type="number" className="form-control" id="inputCardNumber" placeholder="4361 - 5652 - 8599 - 1254" />
                                                            <img src="images/card-icon.png" alt="card-icon" className="img-fluid" />
                                                            /                                                  <img src="images/visa-icon.png" alt="visa-icon" className="img-fluid sl-v /isa-icon" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputExpiryMonth" className="form-label">Expiry date</label>
                                                        <div className="sl-formselect-group">
                                                            <select id="inputExpiryMonth" className="form-select">
                                                                <option selected="">01</option>
                                                                <option>02</option>
                                                                <option>03</option>
                                                                <option>04</option>
                                                                <option>05</option>
                                                                <option>06</option>
                                                                <option>07</option>
                                                                <option>08</option>
                                                                <option>09</option>
                                                                <option>10</option>
                                                                <option>11</option>
                                                                <option>12</option>
                                                            </select>
                                                            <img src="images/dropdwon-arrow.png" alt="dropdwon-arrow" className="img- /fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputExpiryYear" className="form-label">Expiry date</label>
                                                        <div className="sl-formselect-group">
                                                            <select id="inputExpiryYear" className="form-select">
                                                                <option selected="">2022</option>
                                                                <option>2023</option>
                                                                <option>2024</option>
                                                                <option>2025</option>
                                                                <option>2026</option>
                                                                <option>2027</option>
                                                            </select>
                                                            <img src="images/dropdwon-arrow.png" alt="dropdwon-arrow" className="img- /fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="sl-forgot-pass-content">
                                                            <label for="inputCVV" className="form-label">CVV</label>
                                                            <span data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Enter CVV that showing behinde of your cards." aria-label="Enter CVV that showing behinde of your cards.">
                                                                <img src="images/cvv-info-icon.png" alt="cvv-info-icon" className="img-fl /uid" /></span>
                                                        </div>
                                                        <input type="text" className="form-control" id="inputCVV" />
                                                    </div>
                                                    <div className="col-12">
                                                        <button type="submit" className="btn btn-success">Pay</button>
                                                    </div>
                                                </form>
                                            </div>

                                            <div className="sl-purchase-card-info__inner" id="slDebittCard" style={{ display: "none" }}>
                                                <form className="row g-3">
                                                    <div className="col-md-12">
                                                        <label for="inputName" className="form-label">Name on card</label>
                                                        <div className="sl-forminput-group">
                                                            <input type="text" className="form-control" id="inputName" placeholder="Kristin Watson" />
                                                            <img src="images/card-holder-icon.png" alt="card-holder-icon" className=" /img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <label for="inputCardNumber" className="form-label">Card number</label>
                                                        <div className="sl-forminput-group">
                                                            <input type="number" className="form-control" id="inputCardNumber" placeholder="2365 - 5652 - 9863 - 1254" />
                                                            <img src="images/card-icon.png" alt="card-icon" className="img-fluid" />
                                                            /                                                  <img src="images/visa-icon.png" alt="visa-icon" className="img-fluid sl-v /isa-icon" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputExpiryMonth" className="form-label">Expiry date</label>
                                                        <div className="sl-formselect-group">
                                                            <select id="inputExpiryMonth" className="form-select">
                                                                <option selected="">01</option>
                                                                <option>02</option>
                                                                <option>03</option>
                                                                <option>04</option>
                                                                <option>05</option>
                                                                <option>06</option>
                                                                <option>07</option>
                                                                <option>08</option>
                                                                <option>09</option>
                                                                <option>10</option>
                                                                <option>11</option>
                                                                <option>12</option>
                                                            </select>
                                                            <img src="images/dropdwon-arrow.png" alt="dropdwon-arrow" className="img- /fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputExpiryYear" className="form-label">Expiry date</label>
                                                        <div className="sl-formselect-group">
                                                            <select id="inputExpiryYear" className="form-select">
                                                                <option selected="">2022</option>
                                                                <option>2023</option>
                                                                <option>2024</option>
                                                                <option>2025</option>
                                                                <option>2026</option>
                                                                <option>2027</option>
                                                            </select>
                                                            <img src="images/dropdwon-arrow.png" alt="dropdwon-arrow" className="img- /fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="sl-forgot-pass-content">
                                                            <label for="inputCVV" className="form-label">CVV</label>
                                                            <span data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Enter CVV that showing behinde of your cards." aria-label="Enter CVV that showing behinde of your cards.">
                                                                <img src="images/cvv-info-icon.png" alt="cvv-info-icon" className="img-fl /uid" /></span>
                                                        </div>
                                                        <input type="text" className="form-control" id="inputCVV" />
                                                    </div>
                                                    <div className="col-12">
                                                        <button type="submit" className="btn btn-success">Pay</button>
                                                    </div>
                                                </form>
                                            </div>
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

export default Confirm_Purchase;