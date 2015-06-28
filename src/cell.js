import React from 'react';

export default class extends React.Component {
	render() {
		let { weight, size } = this.props;
		return (
			<div style={{ flexGrow: weight, flexBasis: size }} { ...this.props } />
		);
	}
}
