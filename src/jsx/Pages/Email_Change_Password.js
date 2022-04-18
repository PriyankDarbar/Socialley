import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Email_Change_Password = () => {
  return (
    <Fragment>
      <div style={{ borderRadius: "8px", paddingTop: "25px", paddingBottom: "10px", maxWidth: "555px", margin: "auto", background: "#FFFFFF", border: "1px solid #D9D9D9", boxSizing: "border-box; border-radius: 9px; padding: 60px", marginTop: "90px" }}>
        <div className="modal-body">
          <div style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "40px" }}>
              <img src="images/logo.png" alt="logo" class="img-fluid" />
            </div>
            <h5 style={{ fontWeight: "bold", fontSize: "17px", lineHeight: "20px", textAlign: "center", textTransform: "uppercase", color: "#000000", margin: "0 auto 30px" }}>You have requested a password change, please follow the link to set a new password</h5>
            <Link to={'/set-new-password'} style={{ fontWeight: "bold", fontSize: "17px", lineHeight: "20px", textAlign: "center", color: "#FFFFFF", background: "#8BD8BD", borderRadius: "9px", padding: "10px 25px", textDecoration: "none", display: "block", marginBottom: "35px" }}>Login</Link>
          </div>
        </div>
      </div>
    </Fragment >
  )
}

export default Email_Change_Password;
