import React, { Component } from 'react';
import './Header.css';
const FontAwesome = require('react-fontawesome');

class Header extends Component {

    render() {
        return (
            <header className="App-header">
                <FontAwesome 
                    className="fas fa-bars hamburger"
                    name="hamburger"
                    size='2x'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
                <h1 className="App-title">Neighborhood Map</h1>
                <div></div>
            </header>
        )
    }
}

export default Header