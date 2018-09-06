import React from 'react';
import './Modal.css';
import { connect } from 'react-redux';
import * as actions from '../../Store/actions/actions';

const Modal = (props) => {
    const modalClass = props.show ? "modal showModal" : "modal hideModal";

    return(
        <div className={modalClass}>
            <section className="modal-main">
                <h2> Modal is clicked {props.counter} number of times </h2>
                <button onClick={()=> props.closeModal()}>Close Modal</button>
            </section>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        show: state.show
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(actions.closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);