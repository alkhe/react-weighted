import React from 'react';

import Row from './row';
import Column from './column';
import Cell from './cell';

class Grid extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		let { props } = this;
		let { children = [], column, reverse, weight, size } = props;

		let direction = (column ? 'column' : 'row') + (reverse ? '-reverse' : '');
		let [metric, antimetric] = (column ? ['height', 'width'] : ['width', 'height']);
		let [staticMetric, staticAntimetric] = [this.props[metric], this.props[antimetric]];

		delete props.width;
		delete props.height;
		delete props.weight;
		delete props.row;
		delete props.column;

		return (
			<div style={{
					display: 'inline-flex',
					flexDirection: direction,
					flexGrow: weight,
					flexBasis: size,
					[metric]: staticMetric || '100%',
					[antimetric]: staticAntimetric
				}} { ...props }>
				{ children }
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
