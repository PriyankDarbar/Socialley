import React, { Fragment } from 'react'
import { Modal } from 'react-bootstrap'

const Update_Cover_Modal = (props) => {

    return (
        <Fragment>
            <Modal
                className='modal fade'
                id='UploadCoverPhotoModal'
                show={props.activeModal}
                onHide={props.setActiveModal}
                backdrop="static"
                size="lg"
                keyboard={false}>

                <Modal.Header>
                    <button type="button" className="btn-close" onClick={props.setActiveModal}></button>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body sl-choose-file-modal-body">
                        <h5 className="modal-title" id="UploadCoverPhotoModalLabel">Upload cover photo</h5>
                        <div className="sl-choose-file-content sl-selecte-uploded-img">
                            <ul className="sl-selecte-uploded-img-list">
                                <li className="sl-selecte-uploded-img-item">
                                    <img src="images/cover-img1.png" alt="cover-img1" className="img-fluid" />
                                </li>
                                <li className="sl-selecte-uploded-img-item">
                                    <img src="images/cover-img2.png" alt="cover-img2" className="img-fluid" />
                                </li>
                                <li className="sl-selecte-uploded-img-item">
                                    <img src="images/cover-img3.png" alt="cover-img3" className="img-fluid" />
                                </li>
                                <li className="sl-selecte-uploded-img-item">
                                    <img src="images/cover-img4.png" alt="cover-img4" className="img-fluid" />
                                </li>
                                <li className="sl-selecte-uploded-img-item">
                                    <img src="images/cover-img5.png" alt="cover-img5" className="img-fluid" />
                                </li>
                                <li className="sl-selecte-uploded-img-item">
                                    <img src="images/cover-img6.png" alt="cover-img6" className="img-fluid" />
                                </li>
                                <li className="sl-selecte-uploded-img-item">
                                    <img src="images/cover-img7.png" alt="cover-img7" className="img-fluid" />
                                </li>
                                <li className="sl-selecte-uploded-img-item">
                                    <img src="images/cover-img8.png" alt="cover-img8" className="img-fluid" />
                                </li>
                                <li className="sl-selecte-uploded-img-item">
                                    <img src="images/cover-img9.png" alt="cover-img9" className="img-fluid" />
                                </li>
                            </ul>
                        </div>
                        <button className="btn btn-success">Upload</button>
                        <div className="sl-select-other-file-content">
                            <span>Upload photo from my PC</span>
                            <input type="file" className="form-control" id="slSelectOtherFile" />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Fragment>
    )
}

export default Update_Cover_Modal