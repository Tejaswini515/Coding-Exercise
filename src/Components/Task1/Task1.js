import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';
import * as actions from '../../Store/actions/actions';

class Task1 extends Component {
    render() { 
        console.log(this.props.counter)
        return (
            <Fragment>
                <button className='ButtonClass' onClick={()=> this.props.incrementCounter()}> Open Modal </button>
                <button className='ButtonClass' onClick={()=> this.props.resetCounter()}> Reset </button>
                <Modal />
            </Fragment>
          );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounter: () => dispatch(actions.incrementCounter()),
        resetCounter: () => dispatch(actions.resetCounter())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Task1);