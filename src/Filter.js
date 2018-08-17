import React, { Component } from 'react';
import ListItem from './ListItem';

class Filter extends Component {
	render() {
		return (
			<div id="filter">
				<ul aria-label='locations list' className="list-item">
					{this.props.places.map(place =>
						<ListItem key={place.referralId} 
							referralId={place.referralId} 
							venue={place.venue.name}
							onListClick={this.props.onListClick}
							//onClick={this.props.onMarkerClick}
							name={place.venue.name}
							description={place.venue.location.address}
							position={{ lat: place.venue.location.lat, lng: place.venue.location.lng }}>
						</ListItem>
					)}
				</ul>
			</div>
		)
	}
}

export default Filter