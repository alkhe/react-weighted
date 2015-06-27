import React from 'react';

import Row from './row';
import Column from './column';

class Weighted extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		let { children = [], column, reverse } = this.props;

		let direction = (column ? 'column' : 'row') + (reverse ? '-reverse' : '');

		children = children.map(child => {
			return React.addons.cloneWithProps(child, {
				style: {
					flexGrow: child.props.weight,
					width: child.props.width
				}
			});
		});

		return (
			<div style={{ display: 'flex', flexDirection: direction }}>
				{ children }
			</div>
		)
	}
}

export default Weighted;

export {
	Row,
	Column
}
