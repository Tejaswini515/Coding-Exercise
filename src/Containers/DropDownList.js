import React, { Component } from 'react';
import { CARS, FRUITS } from '../Constants/ListData';

class DropDownList extends Component {

    state = {
        displayList: CARS,
        sort: 'ASC'
    }


    handleDisplayList = (li) => {        
        this.displayList = li.map((element) => <li key={element}> {element} </li>)
        console.log('handle display triggered', this.displayList)
    }

    handleInputChange = (e) => {
        if(e.target.value === 'Cars'){
            this.setState({displayList: CARS})
        }
        else if(e.target.value === 'Fruits'){
            this.setState({displayList: FRUITS})
        }   
    }

    handleSort = () => {
        let newList = this.state.displayList;
        newList.sort();
        if(this.state.sort==='ASC'){            
            this.setState({sort:'DES',displayList:newList})
        }
        else if(this.state.sort==='DES'){
            newList.reverse()
            this.setState({sort:'ASC',displayList:newList})
        }
    }
    
    render(){
        this.handleDisplayList(this.state.displayList)
        return (
            <div style={{display:'block', border:'1px solid grey', width: '50%',margin:'auto'}}>
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

export default DropDownList;