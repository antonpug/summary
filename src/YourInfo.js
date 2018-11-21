import React, { Component } from 'react';

class YourInfo extends Component {
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
        event.preventDefault();
        this.props.history.push('/vehicleInfo');
    }

    render() {
    return (
        <div>
        <header className="App-header">
            <h1>A few details about you...</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
        <div className="question">
            <label><div className="form-label">First Name:</div></label>
            <input name="firstName" type="text" value={this.state.data.firstName} onChange={this.handleChange} />
        </div>
        <div className="question">
            <label><div className="form-label">Last Name:</div></label>
            <input name="lastName" type="text" value={this.state.data.lastName} onChange={this.handleChange} />
        </div>
        <div className="question">
            <label><div className="form-label">Email:</div></label>
            <input name="email" type="text" value={this.state.data.email} onChange={this.handleChange} />
        </div>
        <input type="submit" value="Submit" />
        </form>
        </div>
    );
    }
}

export default YourInfo;