import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Email_Registration_Confiramation = () => {
    return (
        <Fragment>
            <div style={{ padding: "80px 15px", margin: "0", fontFamily: "Barlow, sans-serif" }}>
                <div style={{ maxWidth: "555px", margin: "auto", background: "#FFFFFF", border: "1px solid #D9D9D9", boxSizing: "border-box", borderRadius: "9px", padding: "60px 80px" }}>
                    <div class="modal-body">
                        <div style={{ textAlign: "center" }}>
                            <div style={{ marginBottom: "40px" }}>
                                <img src="images/logo.png" alt="logo" class="img-fluid" />
                            </div>
                            <h5 style={{ fontWeight: "bold", fontSize: "17px", lineHeight: "20px", textAlign: "center", textTransform: "uppercase", color: "#000000", margin: "0 auto 30px" }}>Congradulations!</h5>
                            <p style={{ fontWeight: "normal", fontSize: "18px", lineHeight: "22px", textAlign: "center", color: "#000000", marginTop: "0", marginBottom: "30px" }}>Your profile has been registered successfully. <br />Try it out now. </p>
                            <Link to="/edit-user-profile" style={{ fontWeight: "bold", fontSize: "17px", lineHeight: "20px", textAlign: "center", color: "#FFFFFF", background: "#8BD8BD", borderRadius: "9px", padding: "10px 25px", textDecoration: "none", display: "block" }}>Go to my profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Email_Registration_Confiramation;