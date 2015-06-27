import React from 'react';

export default class extends React.Component {
	componentDidMount() {
		if (this.props.staticLoaded && !this.props.weight) {
			this.props.staticLoaded(React.findDOMNode(this).offsetWidth);
		}
	}
	render() {
		return (
			<div style={ this.props.style } className='item'>
				{ this.props.children }
			</div>
		);
	}
}
