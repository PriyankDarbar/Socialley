import React, { Fragment } from 'react'
import { Modal } from 'react-bootstrap'

const Forgotpass_Success_Modal = (props) => {
    return (
        <Fragment>
            <Modal
                className='modal fade sl-light-modal'
                id='forgotPassSuccessModal'
                show={props.activeModal}
                onHide={props.setActiveModal}
                backdrop="static"
                size="lg"
                keyboard={false}>

                <Modal.Header>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.setActiveModal}></button>
                </Modal.Header>
                <Modal.Body>
                    <div className="sl-modal-logo text-center">
                        <img src="images/logo.png" alt="logo" className="img-fluid" />
                    </div>
                    <h5 className="modal-title" id="forgotPassSuccessModalLabel">Link is already in your inbox</h5>
                </Modal.Body>

            </Modal>
        </Fragment>
    )
}

export default Forgotpass_Success_Modal