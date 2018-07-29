import React, { Component } from 'react';

class Filter extends Component {
		state = {
			query: ''
		}

		updateQuery = (query) => {
			if(!query) {
				this.setState({ query: '' })
			} else {
				console.log(query)
				this.setState({ query: query })
			}
		}

    render() {
				const { places } = this.props;
				const { query } = this.state;

				return (
        <div id="selector">
					Filter: <input 
										type="text"
										placeholder="Search for locations"
										value={query}
										onChange={(event) => this.updateQuery(event.target.value)}	
									/>
          <ol>
          {places.map(place =>
            <li key={place.referralId}>{place.venue.name}</li>
          )}
          </ol>
        </div>
        )}
}

export default Filter