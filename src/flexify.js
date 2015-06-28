let alignMap = {
	start: 'flex-start',
	end: 'flex-end',
	between: 'space-between',
	around: 'space-around'
};

export default function(props, grid) {
	let { column, reverse, weight, size, align, along, towards } = props;

	let style = {
		flexGrow: weight,
		flexBasis: size,
		justifyContent: alignMap[align] || align,
		alignItems: alignMap[along] || along,
		alignSelf: alignMap[towards] || towards,
	};

	if (grid) {
		let direction = (column ? 'column' : 'row') + (reverse ? '-reverse' : '');
		let [metric, antimetric] = (column ? ['height', 'width'] : ['width', 'height']);
		let [staticMetric, staticAntimetric] = [props[metric], props[antimetric]];

		style.display = 'flex';
		style.flexDirection = direction;
		style[metric] = staticMetric;
		style[antimetric] = staticAntimetric;
	}

	delete props.width;
	delete props.height;

	delete props.row;
	delete props.column;

	delete props.reverse;
	delete props.weight;
	delete props.size;
	delete props.align;
	delete props.along;
	delete props.towards;

	return style;
};
