import React, { Component } from 'react';
import { CARS, FRUITS } from '../../Constants/ListData';
import * as actions from '../../Store/actions/actions';
import { connect } from 'react-redux';

class Task3 extends Component {

    handleDisplayList = (li) => {        
        this.displayList = li.map((element) => <li key={element}> {element} </li>)
    }

    handleInputChange = (e) => {
        if(e.target.value === 'Cars'){
            this.props.updateDisplayList(CARS)
        }
        else if(e.target.value === 'Fruits'){
            this.props.updateDisplayList(FRUITS)
        }   
    }

    handleSort = () => {
        let newList = this.props.displayList;
        newList.sort();
        if(this.props.sort==='ASC'){            
            this.props.sortDisplayList('DES',newList)
        }
        else if(this.props.sort==='DES'){
            newList.reverse()
            this.props.sortDisplayList('ASC',newList)
        }
    }
    
    render(){
        this.handleDisplayList(this.props.displayList)
        return (
            <div>
            <select onChange={(e)=>this.handleInputChange(e)}>
              <option> Cars </option>
              <option> Fruits </option>
            </select>
            <button onClick={()=>this.handleSort()}> Sort List </button>
            <ul>
                {this.displayList}
            </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        displayList: state.displayList,
        sort: state.sort
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDisplayList: (val) => dispatch(actions.updateDisplayList(val)),
        sortDisplayList: (sortOrder, displayList) => dispatch(actions.sortDisplayList(sortOrder, displayList))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Task3);