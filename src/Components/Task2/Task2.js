import React, { Component } from 'react';
import * as actions from '../../Store/actions/actions';
import { connect } from 'react-redux';

class Task2 extends Component {

    handleScroll = (e) => {
        if(e.deltaY>0){
            this.props.mouseScrolled(1)
        }      
        else{
            this.props.mouseScrolled(-1)
        }
    }

    render() { 
        return (
        <h3 onWheel={(e)=> this.handleScroll(e)} 
            style={{fontSize:this.props.size}}> 
            This text changes its size by scrolling mouse over it
        </h3>
        );
    }
}
 
const mapStateToProps = (state) => {
    return {
        size: state.size,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        mouseScrolled: (val) => dispatch(actions.mouseScrolled(val))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Task2);