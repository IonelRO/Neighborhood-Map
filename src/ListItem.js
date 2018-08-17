import React, { Component } from 'react';

class ListItem extends Component {
	render() {
		return (
				<li onClick={ (e) => { this.props.onListClick(this.props, e.target) } }
					//onClick={this.props.onMarkerClick}
					key={this.props.referralId}
					name={this.props.venue.name}
					description={this.props.description}
					position={this.props.position}
					//onClick={this.props.onClick}
				>{this.props.venue}
				</li>
		)
	}
}

export default ListItem