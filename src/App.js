import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import YourInfo from './YourInfo';
import VehicleInfo from './VehicleInfo';
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
          <Route exact path="/" render={(props) => <YourInfo {...props} state={this.state}/>}/>
          <Route exact path="/vehicleInfo" render={(props) => <VehicleInfo state={this.state}/>}/>
      </div>
      </Router>
    );
  }
}

export default App;
