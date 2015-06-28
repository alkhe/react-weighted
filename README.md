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

This will give the grid a top-level width of `w`.
```html
<Grid width={ w } />
```

This will give the grid a top-level height of `h`.
```html
<Grid width={ h } />
```

This will reverse the order of elements in the grid. (`direction: (dir)-reverse`)
```html
<Grid reverse />
```

#### Cell

All of these props also work for `Row`s and `Column`s.

This make the cell grow by `w`, giving it `w` parts in the layout fraction when above its default width (or if no default width). (`flex-grow`)
```html
<Cell weight={ w } />
```

This will make the cell shrink by `s`, giving it `s` parts in the layout fraction when below its default width. (`flex-shrink`)
```html
<Cell shrink={ s } />
```

This will make the cell be of static size `s`, with size being width or height, if the parent is a `Row` or `Column`, respectively. (`flex-basis`)
```html
<Cell size={ s } />
```

This will make the cell align along `a` of parent. (`align-self`)
`(auto|start|end|center|baseline|stretch)`
```html
<Cell towards={ a } />
```

This will give the cell `n` priority. The cells with lowest priority in a `Row` or `Column` appear first. (`order`)
```html
<Cell priority={ n } />
```

#### Rows/Columns

The following apply to both `Row`s and `Column`s, but `Row`s will be used in each example for simplicity.

This will justify elements to `a` of the row. (`justify-content`)
`(start|end|center|between|around)`
```html
<Row align={ a } />
```

This will align elements along `a` of the row. (`align-items`)
`(start|end|center|baseline|stretch)`
```html
<Row along={ a } />
```

This will reverse the order of elements in the row. (`direction: (dir)-reverse`)
```html
<Row reverse />
```

## Why Cells?

Why should we introduce a third component to our grid system? Data cells should be like the leaves of a tree -- they should not directly contain any child rows or columns. This makes it easier to determine where interface data should be placed. "All visual elements go in `Cell`s." As a bonus, using `Cell`s also provides a small performance boost over using a `Row` or a `Column` unnecessarily, because flex parameters don't need to be calculated.
