import React from './react';
// import Weighted from '../lib/weighted';

class Weighted extends React.Component {
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

class Row extends React.Component {
	render() {
		return (
			<Weighted>
				{ this.props.items }
			</Weighted>
		);
	}
}

class Col extends React.Component {
	render() {
		return (
			<div style={ this.props.style } className='item'>{this.props.children}</div>
		);
	}
}

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			items: []
		};
	}
	click() {
		console.log(this.state)
		this.setState({
			items: this.state.items.concat(
				<Col weight={React.findDOMNode(this.refs.weight).value || 1}>
					{React.findDOMNode(this.refs.text).value || ''}
				</Col>
			)
		});
	}
	render() {
		return (
			<div>
				<input ref='weight' />
				<input ref='text' />
				<button onClick={this.click.bind(this)}>Add</button>
				<Row items={this.state.items} />
			</div>
		);
	}
}

React.render(<App />, document.getElementById('test'));
