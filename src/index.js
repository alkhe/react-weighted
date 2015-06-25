import React from 'react';

export default class extends React.Component {
	render() {
		let { children, column } = this.props;
		let total = children.reduce((last, child) => {
			last += +child.props.weight;
		}, 0);
		// let key = column == undefined ? 'width' : 'height';
		children.forEach(child => {
			child.props.style = {
				width: (+child.props.weight * 100 / total) + '%'
			};
		});
	}
}
