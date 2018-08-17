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
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {},
	};

	onMarkerClick = (props, marker, e) => {
		console.log(props)
		console.log(marker)
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});
	}

/* 	onListItemClick = (props) => {
		const display = (e) => {
			const markerInd = this.state.places.find(marker => marker.venue.name === e.target.innerText)
			console.log(markerInd);
		}
		document.querySelector('.list-item').addEventListener('click', function (e) {
			console.log(e.target.innerText);
			display(e);
			console.log(props);
		})
	} */

	onListClick = (props, e) => {
		console.log(props);
		console.log(e);
	}

	onMapClicked = () => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			})
		}
	};

	updateQuery = (query) => {
		this.setState({ query: query })
	}

	componentDidMount() {
		LocationsAPI.get().then(places => {
			this.setState({ places })
		})
		// .then(this.onListItemClick())
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
					<Filter className="list-item" 
						places={showPlaces} 
						onListClick={this.onListClick}
						//onMarkerClick={this.onListItemClick} 
						//activeMarker={this.state.activeMarker}
						//showingInfoWindow={this.state.showingInfoWindow}
						//selectedPlace={this.state.selectedPlace}
						/>
				</div>
				<Header />
				<GoogleMap places={showPlaces} 
						onMarkerClick={this.onMarkerClick} 
						activeMarker={this.state.activeMarker}
						showingInfoWindow={this.state.showingInfoWindow}
						selectedPlace={this.state.selectedPlace}/>
			</div>
		);
	}
}
export default App