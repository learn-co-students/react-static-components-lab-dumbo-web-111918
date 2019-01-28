import React, { Component } from 'react';
import CatComponent from './CatComponent.js';
import {EinsteinQuoteComponent as Einstein} from './EinsteinQuoteComponent';
import MouseComponent from './MouseComponent';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
			<CatComponent />
			<Einstein	/>
			<MouseComponent />
			</div>
		);
	}
}

export default App;
