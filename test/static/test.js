import React from 'react';
import Grid, { Row, Column, Cell } from 'react-weighted';

class App extends React.Component {
	render() {
		return (
			<Grid width='100%' height='800px' className='grid dgray red-text'>
				<Cell weight='1' className='mgray'>
					1
				</Cell>
				<Cell weight='1' className='mgray'>
					1
				</Cell>
				<Cell weight='2' className='mgray green-text'>
					2
				</Cell>
				<Column weight='3' className='mgray'>
					<Cell weight='2' className='dgray blue-text'>
						2
					</Cell>
					<Cell weight='4' className='dgray blue-text'>
						2
					</Cell>
					<Cell weight='4' className='dgray blue-text'>
						2
					</Cell>
				</Column>
			</Grid>
		);
	}
}

React.render(<App />, document.getElementById('test'));
