import React, { Fragment } from 'react'
import { Modal } from 'react-bootstrap'

const Delete_Confirm_Modal = (props) => {
    return (
        <Fragment>
            <Modal className='modal fade sl-delete-confrim-modal'
                id='deleteConfrimModal'
                show={props.activeModal}
                onHide={props.setActiveModal}
                backdrop="static"
                size="lg"
                keyboard={false}>

                <Modal.Header><button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close" onClick={props.setActiveModal}></button> </Modal.Header>
                <Modal.Body>
                    <div className="modal-body text-center">
                        <h5 className="modal-title" id="deleteConfrimModalLabel">Are you sure you want to delete<br /> an post?</h5>
                        <div className="sl-confrim-delete-btn">
                            <button type="button" className="btn btn-success">Yes</button>
                            <button type="button" className="btn btn-light">No</button>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </Fragment>
    )
}

export default Delete_Confirm_Modal