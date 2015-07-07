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

		let weightTick = <input type='checkbox' onChange={ this.switchWeightMode.bind(this) } checked={ state.weightMode } />,
			weightInput = <input ref='weight' placeholder='Weight' disabled={ !state.weightMode }/>,
			sizeInput = <input ref='size' placeholder='Size' disabled={ state.weightMode} />;

		let rowTick = <input type='checkbox' onChange={ this.switchRowMode.bind(this) } checked={ state.rowMode } />,
			Direction = state.rowMode ? Row : Column;

		let grid = <Direction height='500px' reverse={ state.reverse }>{ items }</Direction>;

		let reverseTick = <input type='checkbox' onChange={ this.reverse.bind(this) } checked={ state.reverse } />;

		return (
			<div>
				{ weightTick } Weight Mode
				{ rowTick } Row Mode
				{ reverseTick } Reverse
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
