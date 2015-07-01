let alignMap = {
	start: 'flex-start',
	end: 'flex-end',
	between: 'space-between',
	around: 'space-around'
};

export default function(props, grid) {
	let { column, reverse, weight, shrink, size, align, along, towards, priority } = props;

	let style = {
		flexGrow: weight,
		flexShrink: shrink,
		flexBasis: size || 0,
		alignSelf: alignMap[towards] || towards,
		order: priority
	};

	if (grid) {
		let direction = (column ? 'column' : 'row') + (reverse ? '-reverse' : '');
		let [metric, antimetric] = (column ? ['height', 'width'] : ['width', 'height']);
		let [staticMetric, staticAntimetric] = [props[metric], props[antimetric]];

		style.justifyContent = alignMap[align] || align;
		style.alignItems = alignMap[along] || along;
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
	delete props.shrink;
	delete props.size;
	delete props.align;
	delete props.along;
	delete props.towards;
	delete props.priority;

	return style;
};
