import React, { Component } from 'react';

class VehicleInfo extends Component {
    constructor(props) {
    super(props);
    this.state = props.state;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const data = this.state.data;
        data[event.target.name] = event.target.value;
        this.setState({data});
    }

    handleSubmit(event) {
        window.location = 'http://google.com';
        event.preventDefault();
    }

    render() {
    return (
        <div>
        <header className="App-header">
            <h1>Your ride...</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
        <div className="question">
            <label><div className="form-label">Year:</div></label>
            <input name="year" type="text" value={this.state.data.year} onChange={this.handleChange} />
        </div>
        <div className="question">
            <label><div className="form-label">Make:</div></label>
            <input name="make" type="text" value={this.state.data.make} onChange={this.handleChange} />
        </div>
        <div className="question">
            <label><div className="form-label">Model:</div></label>
            <input name="model" type="text" value={this.state.data.model} onChange={this.handleChange} />
        </div>
        <input type="submit" value="Submit" />
        </form>
        </div>
    );
    }
}

export default VehicleInfo;