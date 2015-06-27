import React from 'react';

import Row from './row';
import Column from './column';

class Weighted extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	staticLoaded(width) {
		// this.setState({
		// 	staticWidth: this.state.staticWidth + width
		// });

		console.log(width);
		console.log(this.state.staticLoaded);
	}
	render() {
		let state = { this };
		state.staticCount = 0;
		state.staticLoaded = 0;
		state.staticWidth = 0;

		let { children = [], column } = this.props;

		let total = children.reduce((last, child) => {
			let weight = child.props.weight
			if (weight) {
				return last + +weight;
			}
			else {
				state.staticCount++;
				return last;
			}
		}, 0) || 1;

		let staticFactor = state.staticWidth / (state.staticCount || 1);

		let [minkey, key] = (column == undefined)
			? ['minWidth', 'width']
			: ['minHeight', 'height'];

		children = children.map(child => {
			let factor = `calc(${((+child.props.weight || 1) * 100 / total)}% - ${staticFactor}px)`;
			return React.addons.cloneWithProps(child, {
				style: {
					[key]: factor,
					[minkey]: factor,
					display: 'inline-block'
				},
				staticLoaded: this.staticLoaded.bind(this)
			});
		});

		return (
			<div style={{ [key]: '100%', [minkey]: '100%' }}>
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
