import React, { Component } from 'react';
import { AppBar, Tabs, Tab} from '@material-ui/core';
import { Link, Route} from 'react-router-dom';
import Task1 from './Task1/Task1';
import Task2 from './Task2/Task2';
import Task3 from './Task3/Task3';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h3 className="App-title"> Coding Exercise</h3>
      </header>
      <AppBar position="static" color="default">
          <Tabs fullWidth >
            <Link to='/task1'> 
              <Tab label="Task 1" />
            </Link>
            <Link to='/task2'>
              <Tab label="Task 2" />
            </Link>
            <Link to='/task3'>
              <Tab label="Task 3" />
            </Link>
          </Tabs>
        </AppBar>
        <div className="Main-content">
          <Route path='/task1' component={Task1}/>
          <Route path='/task2' component={Task2}/>
          <Route path='/task3' component={Task3}/>
        </div>
      </div>
    );
  }
}

export default App;
