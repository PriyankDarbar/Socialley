import React, { Fragment } from 'react';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
const Acknowledgement = () => {
  return (
      <Fragment>
      <Header/>
        <div className="sl-site-content">   
            <div className="sl-acknowledgement-section">
                <div className="container">
                    <div className="sl-acknowledgement-content">
                        <div className="sl-acknowledgement-content__inner">
                            <h1 className="sl-section-title">All Set</h1>
                            <h3 className="sl-section-subtitle">Socialley.UK</h3>
                            <p className="sl-section-description">Your preference has been successfully saved</p>
                            <a href="#" className="btn btn-success">Continue</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </Fragment>
  )
}

export default Acknowledgement;