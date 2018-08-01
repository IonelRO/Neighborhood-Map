import React, { Component } from 'react';
//import escapeRegExp from 'escape-string-regexp';

class Filter extends Component {
	render() {
		//const { query } = this.state;

/* 		let showingPlaces;
		if (!query) {
			showingPlaces = this.props.places;
		} else {
			const match = new RegExp(escapeRegExp(query), 'i');
			showingPlaces = this.props.places.filter((place) => match.test(place.venue.name))
		} */

		return (
			<div id="filter">
				{/* Filter: <input
					type="text"
					placeholder="Search for locations"
					value={query}
					onChange={(event) => this.updateQuery(event.target.value)}
				/> */}
				<ol>
					{this.props.places.map(place =>
						<li key={place.referralId}>{place.venue.name}</li>
					)}
				</ol>
			</div>
		)
	}
}

export default Filter