import React from 'react';

export default class extends React.Component {
	render() {
		return (
			<div style={ this.props.style } className='item'>
				{ this.props.children }
			</div>
		);
	}
}
