import React, { Component } from 'react';

class Task4 extends Component {
    state = {
        toDoList: [],
        clickedList: []
    }

    handleAdd = () => {
        const newList = this.state.toDoList;
        if(!newList.includes(this.input.value)){  // --- Condition to check task is not already in the list
            newList.push(this.input.value)
            this.setState({toDoList: newList})
        }

    }

    handleTaskClicked = (task) => {
        let newList = this.state.clickedList
        // Condition to check it is already clicked or not
        if(this.state.clickedList.includes(task)){
            const index = newList.indexOf(task)
            newList.splice(index,1)
            console.log(newList)
        }
        else{
            newList.push(task)
        }
        this.setState({clickedList:newList})
    }
    render() { 
        const tasks = this.state.toDoList.map((task)=> {
            const newColor = this.state.clickedList.includes(task) ? "red" : "black"
            return (<li style={{color: newColor}} key={task} onClick={()=>this.handleTaskClicked(task)}>
            {task} 
           </li>)
        })
        return ( 
            <div>
                <input ref={(ip)=>this.input = ip} />
                <button onClick={()=>{this.handleAdd()}}> Add Task </button>
                <ul>
                    {tasks}
                </ul>
                {this.state.toDoList}
            </div>
         );
    }
}
 
export default Task4;