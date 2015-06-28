import React from 'react';

import Row from './row';
import Column from './column';
import Cell from './cell';

class Weighted extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		let { children = [], column, reverse } = this.props;

		let direction = (column ? 'column' : 'row') + (reverse ? '-reverse' : '');
		let [metric, antimetric] = (column ? ['height', 'width'] : ['width', 'height']);
		let [staticMetric, staticAntimetric] = [this.props[metric], this.props[antimetric]];

		children = (children instanceof Array ? children : [children]).map(child => {
			return React.addons.cloneWithProps(child, {
				style: {
					flexGrow: child.props.weight,
					[metric]: child.props.size
				}
			});
		});

		return (
			<div style={{
					display: 'inline-flex',
					flexDirection: direction,
					[metric]: staticMetric || '100%',
					[antimetric]: staticAntimetric
				}}>
				{ children }
			</div>
		)
	}
}

export default Weighted;

export {
	Row,
	Column,
	Cell
}
