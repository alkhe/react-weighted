import React from 'react';
import Grid from '.';

export default class extends React.Component {
	render() {
		return (
			<Grid row { ...this.props } />
		);
	}
}
