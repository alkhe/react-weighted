import React from 'react';
import flexify from './flexify';

export default class extends React.Component {
	render() {
		let [flex, safeprops] = flexify(this.props);

		return (
			<div style={ flex } { ...safeprops } />
		);
	}
}
