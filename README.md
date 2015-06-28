# react-weighted

`react-weighted` is a flexbox-based grid system for React, inspired by Android `LinearLayout`s.

A weighted (parts-based) grid is more flexible and applicable than the conventional 12-unit grid provided by Bootstrap and other similar libraries. The W3C Flexbox spec introduced parts-based layouts with `flex-grow`, along with various other useful CSS layout properties. `react-weighted` packages the flexbox module into an intuitive and unobtrusive set of React components, composed into a grid system.

[Flexbox on CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Installation

```sh
$ npm i react-weighted
```

A `react-weighted` browserify build is also available, accessible globally as `Weighted`.

## Quick Example

```js
import React from 'react';
import Grid, { Row, Column, Cell } from 'react-weighted';

class Component extends React.Component {
	render() {
		return (
			<Grid height='600px'>
				<Cell weight='1'>
					a cell of weight 1
				</Cell>
				<Cell weight='2'>
					a cell of weight 2
				</Cell>
				<Column weight='1'>
					<Cell weight='2'>
						a cell of weight 2 in a column of weight 1
					</Cell>
					<Row weight='1'>
						<Cell weight='1'>
							a cell of weight 1 in a row of weight 1 in a column of weight 1
						</Cell>
						<Cell weight='2'>
							a cell of weight 2 in a row of weight 1 in a column of weight 1
						</Cell>
					</Row>
				</Column>
			</Grid>
		)
	}
}
```

### Documentation

#### Grid

Produces a `Grid` with width `w`.
```html
<Grid width={ w } />
```

Produces a `Grid` with height `h`.
```html
<Grid width={ h } />
```

Produces a `Grid` with elements in reverse order. This is analogous to `direction: (dir)-reverse`.
```html
<Grid reverse />
```

#### Cell

All of these props also work for `Row`s and `Column`s.

Produces a `Cell` with weight `w`. This will give the cell `w` parts in the layout fraction. This is analogous to `flex-grow`.
```html
<Cell weight={ w } />
```

Produces a `Cell` with size `s`. This will make the cell be of static size `s`, with size being width or height, if the parent is a `Row` of `Column`, respectively. This is analogous to `flex-basis`.
```html
<Cell size={ s } />
```

Produces a `Cell` with that will align along `a` of parent. This is analogous to `align-self`.
`(auto|start|end|center|baseline|stretch)`
```html
<Cell towards={ a } />
```

#### Rows/Columns

The following apply to both `Row`s and `Column`s, but `Row`s will be used in each example for simplicity.

Produces a `Row` with elements justified to `a` of the row. This is analogous to `justify-content`.
`(start|end|center|between|around)`
```html
<Row align={ a } />
```

Produces a `Row` with elements aligned along `a` of the row. This is analogous to `align-items`.
`(start|end|center|baseline|stretch)`
```html
<Row along={ a } />
```

Produces a `Row` with elements in reverse order. This is analogous to `direction: (dir)-reverse`.
```html
<Row reverse />
```

## Why Cells?

Why should we introduce a third component to our grid system? Data cells should be like the leaves of a tree -- they should not directly contain any child rows or columns. This makes it easier to determine where interface data should be placed. "All visual elements go in `Cell`s." As a bonus, using `Cell`s also provides a small performance boost over using a `Row` or a `Column` unnecessarily, because flex parameters don't need to be calculated.
