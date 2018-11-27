import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Summary from './Summary';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: {
          firstName: '',
          lastName: '',
          email: '',
          make: '',
          year: '',
          model: ''
        }
      }
    }
    
  render() {
    return (
      <Router>
      <div className="App">
          <Route exact path="/" render={(props) => <Summary {...props} state={this.state}/>}/>
      </div>
      </Router>
    );
  }
}

export default App;
