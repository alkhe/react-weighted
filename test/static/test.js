import React from 'react';
import Grid, { Row, Column, Cell } from 'react-weighted';

class App extends React.Component {
	render() {
		return (
			<Grid height='100%' className='grid dgray'>
				<Cell weight='1' className='mgray'>
					1
				</Cell>
				<Column weight='1' className='mgray'>
					<Cell weight='1' className='dgray'>
						1:1
					</Cell>
					<Cell weight='7' className='dgray'>
						1:7
					</Cell>
					<Row weight='1' align='center' className='dgray'>
						<Cell size='60%' towards='end' className='mgray'>
							1:1(c):60%(e)
						</Cell>
					</Row>
				</Column>
				<Column weight='2'>
					<Cell weight='2' className='mgray'>
						2:2
					</Cell>
					<Cell weight='3'>
						2:3 (spacer)
					</Cell>
				</Column>
				<Column weight='3' className='mgray'>
					<Row weight='1' align='end' className='dgray'>
						<Cell size='100px' className='mgray'>
							3:1(e):100px
						</Cell>
					</Row>
					<Row weight='3' className='dgray'>
						<Cell weight='1' className='mgray'>
							3:3:1
						</Cell>
						<Cell weight='2'>
							3:3:2(spacer)
						</Cell>
						<Cell weight='1' className='mgray'>
							3:3:1
						</Cell>
					</Row>
					<Row weight='2' className='dgray'>
						<Cell size='120px' towards='end' className='mgray'>
							3:2:120px(e)
						</Cell>
						<Cell size='120px' towards='start' className='mgray'>
							3:2:120px(s)
						</Cell>
						<Cell size='120px' towards='center' className='mgray'>
							3:2:120px(c)
						</Cell>
					</Row>
				</Column>
			</Grid>
		);
	}
}

React.render(<App />, document.getElementById('test'));
