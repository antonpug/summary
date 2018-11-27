import React, { Component } from 'react';
import wolkenkit from 'wolkenkit-client';
import queryString from 'query-string';

class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: '',
                vehicle: '',
                price: ''
            }
        }
    }

    processEvent(events) {
        const values = queryString.parse(this.props.location.search);
        const userEvents = events.filter(event => {
            return event.email === values.email;
        });
        console.log(userEvents);
        const lastEvent = userEvents[userEvents.length - 1];
        console.log(lastEvent);
        if (lastEvent && lastEvent.firstName && lastEvent.lastName && lastEvent.year && lastEvent.make && lastEvent.model) {
            const latestData = {
                name: `${lastEvent.firstName} ${lastEvent.lastName}`,
                vehicle: `${lastEvent.year} ${lastEvent.make} ${lastEvent.model}`,
                price: (lastEvent.year * 2 / 100)
            }
            console.log(latestData);
            this.setState({ data: latestData });
        }

    }

    async run() {
        try {
            this.service = await wolkenkit.connect({ host: 'local.wolkenkit.io', port: 3010 });

        } catch (ex) {
            console.error(ex);
        }
        if (this.service) {
            this.service.lists.quotes.readAndObserve({
                take: 50
            }).
                failed(err => console.error(err)).
                started((events) => this.processEvent(events)).
                updated((events) => this.processEvent(events));
        }
    };

    render() {
        this.run();
        return (
            <div>
                <header className="App-header">
                    <h1>Your Quote...</h1>
                </header>
                <div>{this.state.data.name}</div>
                <div>{this.state.data.vehicle}</div>
                <div>${this.state.data.price}/month</div>
            </div>
        );
    }
}

export default Summary;