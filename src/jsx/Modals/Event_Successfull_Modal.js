import React, { Fragment } from 'react'
import { Modal } from 'react-bootstrap'

const Event_Successfull_Modal = (props) => {
    return (
        <Fragment>
            <Modal
                className='modal fade sl-light-modal'
                id='eventCreateSuccessModal'
                show={props.activeModal}
                onHide={props.setActiveModal}
                backdrop="static"
                size="lg"
                keyboard={false}
                style={{ marginTop: "320px" }}
            >

                <Modal.Header>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.setActiveModal}></button>
                </Modal.Header>
                <Modal.Body>
                    <div class="sl-modal-logo text-center">
                        <img src="images/logo.png" alt="logo" class="img-fluid" />
                    </div>
                    <h5 class="modal-title" id="eventCreateSuccessModalLabel">Your event has been successfully created.</h5>
                </Modal.Body>

            </Modal>
        </Fragment >
    )
}

export default Event_Successfull_Modal