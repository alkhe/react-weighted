import React from 'react';

import Row from './row';
import Column from './column';
import Cell from './cell';

import flexify from './flexify';

class Grid extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		let { props } = this;
		let flex = flexify(props, true);

		return (
			<div style={ flex } { ...props }>
				{ props.children }
			</div>
		);
	}
}

export default Grid;

export {
	Row,
	Column,
	Cell
};
