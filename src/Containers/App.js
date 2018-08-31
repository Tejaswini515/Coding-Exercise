import React, { Component } from 'react';
import Modal from '../Components/Modal';
import DropDownList from './DropDownList';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
    show: false,
    size:20,
    scrollValue: 0,
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Coding exercise</h1>
        </header>

        <button className='ButtonClass' onClick={()=> this.handleOpenButtonClick()}> Open Modal </button>
        <button className='ButtonClass' onClick={()=> this.handleResetButtonClick()}> Reset </button>
        
        <Modal counter={this.state.counter} handleClose={this.handleCloseButtonClick} show={this.state.show}/>
        <DropDownList/>

        <h3 onWheel={(e)=> this.handleScroll(e)} style={{fontSize:this.state.size}}> This text changes its size by scrolling mouse over it</h3>

      </div>
    );
  }
}

export default App;
