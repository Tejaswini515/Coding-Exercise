import React from 'react';
import './Modal.css';

const Modal = (props) => {
    const modalClass = props.show ? "modal showModal" : "modal hideModal";

    return(
        <div className={modalClass}>
            <section className="modal-main">
                <h2> Modal is clicked {props.counter} number of times </h2>
                <button onClick={()=> props.handleClose()}>Close Modal</button>
            </section>
        </div>
    );
}

export default Modal;