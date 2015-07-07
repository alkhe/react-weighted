'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var alignMap = {
	start: 'flex-start',
	end: 'flex-end',
	between: 'space-between',
	around: 'space-around'
};

exports['default'] = function (props, grid) {
	var width = props.width;
	var height = props.height;
	var row = props.row;
	var column = props.column;
	var reverse = props.reverse;
	var weight = props.weight;
	var shrink = props.shrink;
	var size = props.size;
	var align = props.align;
	var along = props.along;
	var towards = props.towards;
	var priority = props.priority;

	var safe = _objectWithoutProperties(props, ['width', 'height', 'row', 'column', 'reverse', 'weight', 'shrink', 'size', 'align', 'along', 'towards', 'priority']);

	var style = {
		flexGrow: weight,
		flexShrink: shrink,
		flexBasis: size || 0,
		alignSelf: alignMap[towards] || towards,
		order: priority
	};

	if (grid) {
		var direction = (column ? 'column' : 'row') + (reverse ? '-reverse' : '');

		var _ref = column ? ['height', 'width'] : ['width', 'height'];

		var _ref2 = _slicedToArray(_ref, 2);

		var metric = _ref2[0];
		var antimetric = _ref2[1];
		var staticMetric = props[metric];
		var staticAntimetric = props[antimetric];

		style.justifyContent = alignMap[align] || align;
		style.alignItems = alignMap[along] || along;
		style.display = 'flex';
		style.flexDirection = direction;
		style[metric] = staticMetric;
		style[antimetric] = staticAntimetric;
	}

	return [style, safe];
};

;
module.exports = exports['default'];