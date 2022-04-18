import React from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'

const Home = () => {
    return (
        <>
            <Header />
            <div cvlass="sl-site-content">
                <section class="sl-landing-section">
                    <div class="container">
                        <div class="sl-landing-section__inner">
                            <div class="row align-items-center">
                                <div class="col col-12 col-md-6 col-lg-7">
                                    <div class="sl-landing-section-content">
                                        <h1 class="sl-section-title">Welcome to SOCIALLEY.UK</h1>
                                        <p class="sl-section-description">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus quis eleifend urna. Integer vulputate convallis nunc eget tristique. Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Nullam egestas metus tortor, ut suscipit mi sodales a.</p>
                                        <div class="sl-landing-btn" style={{ marginTop: "20px" }}>
                                            <a href="#" class="btn btn-success">Join</a>
                                            <a href="#" class="btn btn-outline-success">Find out more</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-12 col-md-6 col-lg-5">
                                    <div class="sl-landing-section-content">
                                        <img src="images/home-landing-img.png" alt="home-landing-img" class="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="sl-our-goal-section">
                    <div class="container">
                        <div class="sl-our-goal-section__inner">
                            <div class="sl-our-goal-content">
                                <div class="sl-our-goal-content__inner">
                                    <h2 class="sl-section-title">Our goal</h2>
                                    <p class="sl-section-description">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus quis eleifend urna. Integer vulputate convallis nunc eget tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam egestas metus tortor, ut suscipit mi sodales a.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="sl-join-today-section">
                    <div class="container">
                        <h2 class="sl-section-title text-center">Why you should join us today</h2>
                        <div class="sl-join-today-content">
                            <div class="row">
                                <div class="col col-12 col-md-6 col-lg-5">
                                    <div class="sl-join-today-card">
                                        <div class="sl-join-today-card-img">
                                            <img src="images/join-today-img1.png" alt="join-today-img" class="img-fluid" />
                                        </div>
                                        <div class="sl-join-today-card-body">
                                            <h3 class="sl-join-today-card-title">Vivamus blandit tincidunt arcu nulla ullamcorper pulvinar!</h3>
                                            <p class="sl-join-today-card-description">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus quis eleifend urna. Integer vulputate convallis.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-12 col-md-6 col-lg-5">
                                    <div class="sl-join-today-card">
                                        <div class="sl-join-today-card-img">
                                            <img src="images/join-today-img2.png" alt="join-today-img" class="img-fluid" />
                                        </div>
                                        <div class="sl-join-today-card-body">
                                            <h3 class="sl-join-today-card-title">Vivamus blandit tincidunt arcu nulla ullamcorper pulvinar!</h3>
                                            <p class="sl-join-today-card-description">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus quis eleifend urna. Integer vulputate convallis.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-12 col-md-6 col-lg-5">
                                    <div class="sl-join-today-card">
                                        <div class="sl-join-today-card-img">
                                            <img src="images/join-today-img3.png" alt="join-today-img" class="img-fluid" />
                                        </div>
                                        <div class="sl-join-today-card-body">
                                            <h3 class="sl-join-today-card-title">Vivamus blandit tincidunt arcu nulla ullamcorper pulvinar!</h3>
                                            <p class="sl-join-today-card-description">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus quis eleifend urna. Integer vulputate convallis.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-12 col-md-6 col-lg-5">
                                    <div class="sl-join-today-card">
                                        <div class="sl-join-today-card-img">
                                            <img src="images/join-today-img4.png" alt="join-today-img" class="img-fluid" />
                                        </div>
                                        <div class="sl-join-today-card-body">
                                            <h3 class="sl-join-today-card-title">Vivamus blandit tincidunt arcu nulla ullamcorper pulvinar!</h3>
                                            <p class="sl-join-today-card-description">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus quis eleifend urna. Integer vulputate convallis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="sl-features-section">
                    <div class="container">
                        <h2 class="sl-section-title text-center">TOP features of service</h2>
                        <div class="sl-features-content">
                            <div class="sl-features-content__inner">
                                <div class="row g-0">
                                    <div class="col col-12 col-md-6 col-lg-6">
                                        <div class="sl-features-img">
                                            <img src="images/features-img1.png" alt="features-img1" class="img-fluid" />
                                        </div>
                                    </div>
                                    <div class="col col-12 col-md-6 col-lg-6">
                                        <div class="sl-features-body">
                                            <h3 class="sl-features-title">Vivamus blandit tincidunt arcu nulla ullamcorper pulvinar!</h3>
                                            <p class="sl-features-description">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus quis eleifend urna. Integer vulputate convallis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sl-features-content__inner">
                                <div class="row g-0">
                                    <div class="col col-12 col-md-6 col-lg-6">
                                        <div class="sl-features-img">
                                            <img src="images/features-img2.png" alt="features-img2" class="img-fluid" />
                                        </div>
                                    </div>
                                    <div class="col col-12 col-md-6 col-lg-6">
                                        <div class="sl-features-body">
                                            <h3 class="sl-features-title">Vivamus blandit tincidunt arcu nulla ullamcorper pulvinar!</h3>
                                            <p class="sl-features-description">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus quis eleifend urna. Integer vulputate convallis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sl-features-content__inner">
                                <div class="row g-0">
                                    <div class="col col-12 col-md-6 col-lg-6">
                                        <div class="sl-features-img">
                                            <img src="images/features-img3.png" alt="features-img3" class="img-fluid" />
                                        </div>
                                    </div>
                                    <div class="col col-12 col-md-6 col-lg-6">
                                        <div class="sl-features-body">
                                            <h3 class="sl-features-title">Vivamus blandit tincidunt arcu nulla ullamcorper pulvinar!</h3>
                                            <p class="sl-features-description">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus quis eleifend urna. Integer vulputate convallis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="sl-interest-section">
                    <div class="container">
                        <h2 class="sl-section-title text-center">Interest we highlight</h2>
                        <div class="row justify-content-center">
                            <div class="col col-12 col-md-6 col-lg-4">
                                <div class="sl-interest-card">
                                    <div class="sl-interest-img">
                                        <img src="images/interest-img1.png" alt="interest-img1" class="img-fluid" />
                                    </div>
                                    <div class="sl-interest-card-body">
                                        <h3 class="sl-interest-card-title">Health &amp; Wellness</h3>
                                        <p class="sl-interest-card-description">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus quis eleifend urna. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-12 col-md-6 col-lg-4">
                                <div class="sl-interest-card">
                                    <div class="sl-interest-img">
                                        <img src="images/interest-img2.png" alt="interest-img2" class="img-fluid" />
                                    </div>
                                    <div class="sl-interest-card-body">
                                        <h3 class="sl-interest-card-title">Fitness &amp; Nutrition</h3>
                                        <p class="sl-interest-card-description">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus quis eleifend urna. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-12 col-md-6 col-lg-4">
                                <div class="sl-interest-card">
                                    <div class="sl-interest-img">
                                        <img src="images/interest-img3.png" alt="interest-img3" class="img-fluid" />
                                    </div>
                                    <div class="sl-interest-card-body">
                                        <h3 class="sl-interest-card-title">Travel &amp; Sightseeing</h3>
                                        <p class="sl-interest-card-description">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus quis eleifend urna. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="sl-call-action-section">
                    <div class="container">
                        <div class="sl-call-action-content">
                            <h2 class="sl-section-title">Call to action phrase here</h2>
                            <p class="sl-section-description">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus quis eleifend urna. Integer vulputate convallis nunc eget tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                egestas metus tortor, ut suscipit mi sodales a.</p>
                            <a href="#" class="btn btn-success" style={{ marginTop: "20px" }}>Try for free</a>
                        </div>
                    </div>
                </section>



                <div class="modal fade sl-light-modal" id="forgotPassSuccessModal" tabindex="-1" aria-labelledby="forgotPassSuccessModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="sl-modal-logo text-center">
                                    <img src="images/logo.png" alt="logo" class="img-fluid" />
                                </div>
                                <h5 class="modal-title" id="forgotPassSuccessModalLabel">Link is already in your inbox</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home