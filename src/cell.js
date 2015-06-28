import React from 'react';
import flexify from './flexify';

export default class extends React.Component {
	render() {
		let { props } = this;
		let flex = flexify(props);

		return (
			<div style={ flex } { ...this.props } />
		);
	}
}
