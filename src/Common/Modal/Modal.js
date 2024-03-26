import React from 'react'
import { Modal } from 'react-bootstrap'

function CnfModal({ onConfirmation, onShow, title, description, equipped }) {
    return (
        <Modal
            size="md"
            centered
            show={onShow}
        >
            <Modal.Body>
                <h5>{title}</h5>
                <p>{description}</p>
            </Modal.Body>
            <Modal.Footer>
                {equipped ?
                    <button className='close-btn' onClick={() => onConfirmation(false)}>Close</button>
                    :
                    <>
                        <button onClick={() => onConfirmation(false)} className='close-btn'>No</button>
                        <button onClick={() => onConfirmation(true)} className='close-btn'>Yes</button>
                    </>
                }
            </Modal.Footer>
        </Modal>
    )
}

export default CnfModal
