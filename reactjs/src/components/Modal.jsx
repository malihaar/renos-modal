import React from 'react'

const Modal = (props) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          
          {props.modal.title}
          <button type="button" className="btn-modal-close" onClick={props.onClose}>X</button>
        </div>
        <div className="modal-body">
          {props.modal.body}
        </div>
        <div className="modal-footer">
          {props.modal.footer}
        </div>
      </div>
    </div>
  )
}

export default Modal