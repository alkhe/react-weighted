import React from 'react';
import Weighted, { Row, Column, Cell } from '../dist/weighted';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			items: [],
			weightMode: true,
			rowMode: true
		};
	}
	addItem() {
		let { refs, state } = this;
		let metric = state.weightMode ? 'weight' : 'size';
		this.setState({
			items: this.state.items.concat({
				[metric]: React.findDOMNode(refs[metric]).value,
				value: React.findDOMNode(refs.text).value
			})
		});
	}
	switchWeightMode() {
		this.setState({
			weightMode: !this.state.weightMode
		});
	}
	switchRowMode() {
		this.setState({
			rowMode: !this.state.rowMode
		});
	}
	render() {
		let { state } = this;

		let items = state.items.map(item =>
			<Cell weight={ item.weight } size={ item.size } className='item'>
				{ item.value }
			</Cell>
		);

		let [weightMode, weightInput, sizeInput] = state.weightMode
			? [
				<input type='checkbox' onChange={ this.switchWeightMode.bind(this) } checked />,
				<input ref='weight' placeholder='Weight' />,
				<input ref='size' placeholder='Size' disabled />
			] : [
				<input type='checkbox' onChange={ this.switchWeightMode.bind(this) } />,
				<input ref='weight' placeholder='Weight' disabled />,
				<input ref='size' placeholder='Size' />
			];

		let [rowMode, grid] = state.rowMode
			? [
				<input type='checkbox' onChange={ this.switchRowMode.bind(this) } checked />,
				<Row>{ items }</Row>
			] : [
				<input type='checkbox' onChange={ this.switchRowMode.bind(this) } />,
				<Column>{ items }</Column>
			];

		return (
			<div>
				{ weightMode } Weight Mode
				{ rowMode } Row Mode
				<br />
				{ weightInput }
				{ sizeInput }
				<br />
				<input ref='text' placeholder='Text' />
				<button onClick={ this.addItem.bind(this) }>Add</button>
				<Row width='100%' height='500px'>
					{ grid }
				</Row>
			</div>
		);
	}
}

React.render(<App />, document.getElementById('test'));
