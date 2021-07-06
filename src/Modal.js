import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { AppContext,useGlobalContext } from './context';
const Modal = () => {
  const {isModalOpen,modalClose} = useGlobalContext();
  return <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
    <div className='modal-container' >
        <h3 className='modal-content' >Modal Content</h3>
        <button className='close-modal-btn' onClick={modalClose}><FaTimes/></button>
    </div>
  </div>  
}

export default Modal
