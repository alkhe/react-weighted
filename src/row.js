import React from 'react';
import Weighted from '.';

export default class extends React.Component {
	render() {
		return (
			<Weighted row { ...this.props } />
		);
	}
}
