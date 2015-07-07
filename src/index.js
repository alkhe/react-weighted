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
		let [flex, safeprops] = flexify(this.props, true);

		return (
			<div style={ flex } { ...safeprops }>
				{ safeprops.children }
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
