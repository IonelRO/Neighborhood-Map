import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends Component {

	render() {
		return (
			<div role="application" id="map">
				<Map google={this.props.google}
					initialCenter={{ lat: 46.770439, lng: 23.591423 }}
					zoom={15}
					onClick={this.onMapClicked}>
					{this.props.places.map(place =>
						<Marker key={place.referralId} 
							onClick={this.props.onMarkerClick}
							name={place.venue.name}
							description={place.venue.location.address}
							position={{ lat: place.venue.location.lat, lng: place.venue.location.lng }} />
					)}
					<InfoWindow
						marker={this.props.activeMarker}
						visible={this.props.showingInfoWindow}>
						<div>
							<h1>{this.props.selectedPlace.name}</h1>
							<p><b>Street:</b> {this.props.selectedPlace.description}</p>
						</div>
					</InfoWindow>
				</Map>
			</div>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: ('AIzaSyB1OLauMwO5CCMQg0gZejZjm0q1lAEQFSo')
})(GoogleMap)