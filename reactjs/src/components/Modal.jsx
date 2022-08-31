import React, {useRef} from 'react'
import { useEffect } from 'react';
import './Modal.css'

const Modal = (props) => {
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
  }, []);
  
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      props.setShowModal(false)
    }
  }
    
  return (
    <div ref={ref} className="modal-container">
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