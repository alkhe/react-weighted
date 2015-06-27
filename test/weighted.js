import React from 'react';
import Weighted, { Row, Column } from '../dist/weighted';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			items: [],
			weightMode: true
		};
	}
	addItem() {
		let { refs, state } = this;
		let metric = state.weightMode ? 'weight' : 'width';
		this.setState({
			items: this.state.items.concat({
				[metric]: React.findDOMNode(refs[metric]).value,
				value: React.findDOMNode(refs.text).value
			})
		});
	}
	switchMode() {
		this.setState({
			weightMode: !this.state.weightMode
		});
	}
	render() {
		let { state } = this;

		let items = state.items.map(item =>
			<Column weight={ item.weight } width={ item.width }>
				{ item.value }
			</Column>
		);
		return (
			<div>
				{ state.weightMode ? <input type='checkbox' onChange={ this.switchMode.bind(this) } checked /> : <input type='checkbox' onChange={ this.switchMode.bind(this) } /> } Weight Mode
				<br />
				{ state.weightMode ? <input ref='weight' placeholder='Weight' /> : <input ref='weight' placeholder='Weight' disabled /> }
				{ state.weightMode ? <input ref='width' placeholder='Width' disabled /> : <input ref='width' placeholder='Width' /> }
				<br />
				<input ref='text' placeholder='Text' />
				<button onClick={ this.addItem.bind(this) }>Add</button>
				<Weighted>
					{ items }
				</Weighted>
			</div>
		);
	}
}

React.render(<App />, document.getElementById('test'));
