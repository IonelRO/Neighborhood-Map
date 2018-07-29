import React, { Component } from 'react';
import Filter from './Filter'
import GoogleMap from './GoogleMap'
import './App.css';
import * as LocationsAPI from './LocationsAPI'

class App extends Component {
  state = {
    places: []
  };

  componentDidMount() {
    LocationsAPI.get().then(places => {
      this.setState({ places })
      console.log(places)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Neighborhood Map</h1>
        </header>
        <Filter places={this.state.places}/>
        <GoogleMap places={this.state.places}/>
        {/* <div id="map">
          <Map google={this.props.google}
            initialCenter={{ lat: 46.770439, lng: 23.591423 }}
            zoom = { 15 }
            onClick={this.onMapClicked}>
          {this.state.places.map(place =>
          <Marker key={place.referralId} onClick = {this.onMarkerClick}
            name = {place.venue.name}
            description = {place.venue.location.address}
            position = {{ lat: place.venue.location.lat, lng: place.venue.location.lng }} />
          )}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
                <p>{this.state.selectedPlace.description}</p>
              </div>
          </InfoWindow>
          </Map>
        </div> */}
      </div>
    );
  }
}
export default App