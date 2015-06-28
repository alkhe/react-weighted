import React from 'react';
import Grid, { Row, Column, Cell } from 'react-weighted';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			items: [],
			weightMode: true,
			rowMode: true,
			reverse: false
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
	reverse() {
		this.setState({
			reverse: !this.state.reverse
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
				<Row height='500px'>{ items }</Row>
			] : [
				<input type='checkbox' onChange={ this.switchRowMode.bind(this) } />,
				<Column height='500px'>{ items }</Column>
			];

		let reverse;
		[reverse, grid] = state.reverse
			? [
				<input type='checkbox' onChange={ this.reverse.bind(this) } checked />,
				React.addons.cloneWithProps(grid, { reverse: true })
			] : [
				<input type='checkbox' onChange={ this.reverse.bind(this) } />,
				grid
			];

		return (
			<div>
				{ weightMode } Weight Mode
				{ rowMode } Row Mode
				{ reverse } Reverse
				<br />
				{ weightInput }
				{ sizeInput }
				<br />
				<input ref='text' placeholder='Text' />
				<button onClick={ this.addItem.bind(this) }>Add</button>
				{ grid }
			</div>
		);
	}
}

React.render(<App />, document.getElementById('test'));
