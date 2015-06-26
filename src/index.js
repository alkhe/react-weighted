import React from 'react';

export default class extends React.Component {
	render() {
		let { children = [], column } = this.props;
		let total = children.reduce((last, child) => {
			return last + +child.props.weight;
		}, 0);
		total = total || 1;
		let [minkey, key] = column == undefined ? ['minWidth', 'width'] : ['minHeight', 'height'];
		children = children.map(child => React.addons.cloneWithProps(child, { style: {
			[key]: ((+child.props.weight || 1) * 100 / total) + '%',
			[minkey]: ((+child.props.weight || 1) * 100 / total) + '%',
			display: 'inline-block'
		}}));

		return (
			<div style={{ [key]: '100%', [minkey]: '100%' }}>
				{ children }
			</div>
		)
	}
}
