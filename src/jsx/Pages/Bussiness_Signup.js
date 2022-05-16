import React, { Fragment } from 'react'
import Footer from '../layouts/Footer'
import Home_Header from '../layouts/Home_Header'


const Bussiness_Signup = () => {
    return (
        <Fragment>
            <Home_Header />
            <div className='sl-site'>
                <div class="sl-site-content">
                    {/* <!-- Sign Up Section Start --> */}
                    <section class="sl-signup-section">
                        <div class="container">
                            <div class="sl-signup-content">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item individual-item" role="presentation">
                                        <button class="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Individual</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Business</button>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">

                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row justify-content-center">
                                            <div class="col-lg-6">
                                                <div class="first-tab">
                                                    <form>
                                                        <div class="form-input">
                                                            <label for="exampleInputname1" class="form-label">Name</label>
                                                            <input type="text" class="form-control" id="exampleInputname1" placeholder="XYZ" />
                                                        </div>
                                                        <div class="form-input">
                                                            <label for="exampleInputEmail1" class="form-label">Email</label>
                                                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="A@B.com" />
                                                        </div>
                                                        <div class="form-input">
                                                            <label for="exampleInputEmail1" class="form-label">Gnder</label>
                                                            <select class="form-select" aria-label="Default select example">
                                                                <option selected>Select Gender</option>
                                                                <option value="1">Male</option>
                                                                <option value="2">Female</option>
                                                                <option value="3">Other</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-input">
                                                            <label for="exampleInputEmail1" class="form-label">UserName</label>
                                                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="eg.abcs" />
                                                        </div>
                                                        <div class="form-input">
                                                            <label for="exampleInputPassword1" class="form-label">Password</label>
                                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="******" />
                                                        </div>
                                                        <a href="#" type="submit" class="btn btn-success w-100 form-input">Signup</a>
                                                        <div class="text-center">
                                                            <a href="#" class="individual-account">Login <span class="individual-or text-muted">or</span> Create an Account</a>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="second-tab">
                                            <h5 class="business-title text-center">Select Membership</h5>
                                            <div class="business-account-content">
                                                <div class="business-select-account">
                                                    {/* <!-- <div class="col col-12 col-md-6 col-lg-6"> --> */}
                                                    <div class="form-check active1">
                                                        <input class="form-check-input" type="radio" name="PayPalpaymentRadios" id="PayPalpaymentRadios1" value="credit" checked="true" />
                                                        <label class="form-check-label" for="PayPalpaymentRadios1">
                                                            Silver
                                                        </label>
                                                    </div>
                                                    {/* <!-- </div> --> */}
                                                    {/* <!-- <div class="col col-12 col-md-6 col-lg-6"> --> */}
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="PayPalpaymentRadios" id="PayPalpaymentRadios2" value="debit" />
                                                        <label class="form-check-label" for="PayPalpaymentRadios2">
                                                            Gold
                                                        </label>
                                                    </div>
                                                    {/* <!-- </div> --> */}
                                                </div>
                                                <form class="business-account-form first-tab">
                                                    <div class="row">
                                                        <div class="col-md-6 col-12">
                                                            <div class="form-input">
                                                                <label for="exampleInputCompany1" class="form-label">Company Name</label>
                                                                <input type="text" class="form-control" id="exampleInputCompany1" placeholder="adolphia13@dgsgdf" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-12">
                                                            <div class="form-input">
                                                                <label for="exampleInputIndustry1" class="form-label">Industry</label>
                                                                <input type="text" class="form-control" id="exampleInputIndustry1" placeholder="XYZ" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-12">
                                                            <div class="form-input">
                                                                <label for="exampleInputTeam1" class="form-label">Team Size</label>
                                                                <select class="form-select" aria-label="Default select example">
                                                                    <option selected>Slecte Team size</option>
                                                                    <option value="1">0-10</option>
                                                                    <option value="2">11-50</option>
                                                                    <option value="3">51-100</option>
                                                                    <option value="3">101-200</option>
                                                                    <option value="3">more than 200</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-12">
                                                            <div class="form-input">
                                                                <label for="exampleInputCountry1" class="form-label">Country</label>
                                                                <select class="form-select" aria-label="Default select example">
                                                                    <option selected>Select Country</option>
                                                                    <option value="1">Afghanistan</option>
                                                                    <option value="2">Albania</option>
                                                                    <option value="3">Algeria</option>
                                                                    <option value="3">Andorra</option>
                                                                    <option value="3">Andorra</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-12">
                                                            <div class="form-input">
                                                                <label for="exampleInputEmail1" class="form-label">Company Email</label>
                                                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Xyz@gamil.com" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-12">
                                                            <div class="form-input">
                                                                <label for="exampleInputCity1" class="form-label">City</label>
                                                                <select class="form-select" aria-label="Default select example">
                                                                    <option selected>Select City</option>
                                                                    <option value="1">Afghanistan</option>
                                                                    <option value="2">Albania</option>
                                                                    <option value="3">Algeria</option>
                                                                    <option value="3">Andorra</option>
                                                                    <option value="3">Andorra</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-12">
                                                            <div class="form-input">
                                                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                                                <input type="Password" class="form-control" id="exampleInputPassword1" placeholder="******" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-12">
                                                            <div class="form-input">
                                                                <label for="exampleUploadInput" class="form-label">Upload Your Company Logo</label>
                                                                <div class="business-upload-input">
                                                                    <input type="file" class="business-upload" />
                                                                    <span>+ Upload </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="business-btn text-center">
                                                        <a href="#" type="submit" class="btn btn-success form-input">Signup</a>
                                                    </div>
                                                    <div class="text-center">
                                                        <a href="#" class="individual-account">Login <span class="individual-or text-muted">or</span> Create an Account</a>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </Fragment>
    )
}

export default Bussiness_Signup