'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

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

var Weighted = (function (_React$Component) {
	function Weighted() {
		_classCallCheck(this, Weighted);

		_get(Object.getPrototypeOf(Weighted.prototype), 'constructor', this).call(this);
		this.state = {};
	}

	_inherits(Weighted, _React$Component);

	_createClass(Weighted, [{
		key: 'render',
		value: function render() {
			var _this = this;

			var _props = this.props;
			var _props$children = _props.children;
			var children = _props$children === undefined ? [] : _props$children;
			var column = _props.column;
			var reverse = _props.reverse;

			var direction = (column ? 'column' : 'row') + (reverse ? '-reverse' : '');

			children = children.map(function (child) {
				return _react2['default'].addons.cloneWithProps(child, {
					style: {
						'flex-grow': _this.state.weight,
						width: _this.state.width
					}
				});
			});

			return _react2['default'].createElement(
				'div',
				{ style: { display: 'inline-flex', 'flex-direction': direction } },
				children
			);
		}
	}]);

	return Weighted;
})(_react2['default'].Component);

exports['default'] = Weighted;
exports.Row = _row2['default'];
exports.Column = _column2['default'];