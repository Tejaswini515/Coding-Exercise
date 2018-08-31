import React, { Component } from 'react';
import Modal from '../Components/Modal';
import Cars from '../Components/Cars';
import Fruits from '../Components/Fruits';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
    show: false,
    size:20,
    scrollValue: 0,
    displayList: <Cars/>
  }

  handleOpenButtonClick = () => {
    this.setState({counter: this.state.counter+1,show:true})  
  }

  handleResetButtonClick = () => {
    this.setState({counter: 0,show:true})  
  }

  handleCloseButtonClick = () => {
    this.setState({show:false})  
  }

  handleScroll = (e) => {
    if(e.deltaY>0){
      this.setState({size: this.state.size+1})
    }      
    else{
      this.setState({size: this.state.size-1})
    }
  }

  handleInputChange = (e) => {
    if(e.target.value === 'Cars'){
      this.setState({displayList:<Cars />})
    }
    else if(e.target.value === 'Fruits'){
      this.setState({displayList:<Fruits />})
    }
  }

  handleSort = () => {
    console.log(this.list)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Coding exercise</h1>
        </header>
        <button className='ButtonClass' onClick={()=> this.handleOpenButtonClick()}> Open Modal </button>
        <button className='ButtonClass' onClick={()=> this.handleResetButtonClick()}> Reset </button>
        
        <Modal counter={this.state.counter} handleClose={this.handleCloseButtonClick} show={this.state.show}/>
        
        <div style={{display:'block', border:'1px solid grey', width: '50%',margin:'auto'}}>
        <select onChange={(e)=>this.handleInputChange(e)}>
          <option> Cars </option>
          <option> Fruits </option>
        </select>
        <button onClick={()=>this.handleSort()}> Sort List </button>
        {this.state.displayList}
        </div>

        <h3 onWheel={(e)=> this.handleScroll(e)} style={{fontSize:this.state.size}}> This text changes its size by scrolling mouse over it</h3>

      </div>
    );
  }
}

export default App;
