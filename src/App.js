import React, { Component } from 'react';
import Frame from './Frame';
import Test from './Test';

export default class App extends Component {
	render() {
		return (
			<div>
				<Frame>
					<Test />
				</Frame>
			</div>
		);
	}
}
