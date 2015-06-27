import React from 'react';
import Weighted, { Row, Column } from '../dist/weighted.min';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			items: []
		};
	}
	click() {
		this.setState({
			items: this.state.items.concat({
				width: React.findDOMNode(this.refs.width).value,
				weight: React.findDOMNode(this.refs.weight).value,
				value: React.findDOMNode(this.refs.text).value || ''
			})
		});
	}
	render() {
		let items = this.state.items.map(item =>
			<Column weight={ item.weight } width={ item.width }>
				{ item.value }
			</Column>
		);
		return (
			<div>
				<input ref='width' placeholder='width' />
				<input ref='weight' placeholder='weight' />
				<input ref='text' placeholder='text' />
				<button onClick={ this.click.bind(this) }>Add</button>
			<Row items={ items } />
			</div>
		);
	}
}

React.render(<App />, document.getElementById('test'));
