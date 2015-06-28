'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

var _column = require('./column');

var _column2 = _interopRequireDefault(_column);

var _cell = require('./cell');

var _cell2 = _interopRequireDefault(_cell);

var _flexify = require('./flexify');

var _flexify2 = _interopRequireDefault(_flexify);

var Grid = (function (_React$Component) {
	function Grid() {
		_classCallCheck(this, Grid);

		_get(Object.getPrototypeOf(Grid.prototype), 'constructor', this).call(this);
		this.state = {};
	}

	_inherits(Grid, _React$Component);

	_createClass(Grid, [{
		key: 'render',
		value: function render() {
			var props = this.props;

			var flex = (0, _flexify2['default'])(props, true);

			return _react2['default'].createElement(
				'div',
				_extends({ style: flex }, props),
				props.children
			);
		}
	}]);

	return Grid;
})(_react2['default'].Component);

exports['default'] = Grid;
exports.Row = _row2['default'];
exports.Column = _column2['default'];
exports.Cell = _cell2['default'];