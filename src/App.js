import React, { Component } from 'react';
import Filter from './Filter';
import GoogleMap from './GoogleMap';
import Header from './Header';
import './App.css';
import * as LocationsAPI from './LocationsAPI';

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
        <Filter places={this.state.places}/>
		<Header />
        <GoogleMap places={this.state.places}/>
      </div>
    );
  }
}
export default App