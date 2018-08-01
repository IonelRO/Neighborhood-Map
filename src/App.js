import React, { Component } from 'react';
import Filter from './Filter';
import GoogleMap from './GoogleMap';
import Header from './Header';
import escapeRegExp from 'escape-string-regexp';
import './App.css';
import * as LocationsAPI from './LocationsAPI';

class App extends Component {
	state = {
		places: [],
		query: '',
	};

	updateQuery = (query) => {
		this.setState({ query: query })
	}

	componentDidMount() {
		LocationsAPI.get().then(places => {
			this.setState({ places })
		})
	}

	render() {
		
		let showPlaces;
		if (!this.state.query) {
			showPlaces = this.state.places;

		} else {
			const match = new RegExp(escapeRegExp(this.state.query), 'i');
			showPlaces = this.state.places.filter((place) => match.test(place.venue.name))
		}

		return (
			<div className="App">
				<div id="selector">
				<h2>Cluj-Napoca popular places</h2>
					Filter: <input
						type="text"
						placeholder="Search for locations"
						value={this.state.query}
						onChange={(event) => this.updateQuery(event.target.value)}
					/>
					<Filter places={showPlaces} />
				</div>
				<Header />
				<GoogleMap places={showPlaces} />
			</div>
		);
	}
}
export default App