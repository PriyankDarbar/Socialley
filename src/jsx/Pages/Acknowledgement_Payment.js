import React from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'

const Acknowledgement_Payment = () => {
  return (
    <>
        <Header />
        <div className="sl-site-content">
        <div className="sl-acknowledgement-section">
            <div className="container">
                <div className="sl-acknowledgement-content sl-paymentAcknowledgement-content">
                    <div className="sl-acknowledgement-content__inner">
                        <h3 className="sl-section-subtitle">Socialley.UK</h3>
                        <h1 className="sl-section-title">Your payment has been successful.</h1>
                        <a href="#" className="btn btn-success">Continue</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Acknowledgement_Payment