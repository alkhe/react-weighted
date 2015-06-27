'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
		key: 'staticLoaded',
		value: function staticLoaded(width) {
			// this.setState({
			// 	staticWidth: this.state.staticWidth + width
			// });

			console.log(width);
			console.log(this.state.staticLoaded);
		}
	}, {
		key: 'render',
		value: function render() {
			var _ref,
			    _this = this;

			var state = { 'this': this };
			state.staticCount = 0;
			state.staticLoaded = 0;
			state.staticWidth = 0;

			var _props = this.props;
			var _props$children = _props.children;
			var children = _props$children === undefined ? [] : _props$children;
			var column = _props.column;

			var total = children.reduce(function (last, child) {
				var weight = child.props.weight;
				if (weight) {
					return last + +weight;
				} else {
					state.staticCount++;
					return last;
				}
			}, 0) || 1;

			var staticFactor = state.staticWidth / (state.staticCount || 1);

			var _ref2 = column == undefined ? ['minWidth', 'width'] : ['minHeight', 'height'];

			var _ref22 = _slicedToArray(_ref2, 2);

			var minkey = _ref22[0];
			var key = _ref22[1];

			children = children.map(function (child) {
				var _style;

				var factor = 'calc(' + (+child.props.weight || 1) * 100 / total + '% - ' + staticFactor + 'px)';
				return _react2['default'].addons.cloneWithProps(child, {
					style: (_style = {}, _defineProperty(_style, key, factor), _defineProperty(_style, minkey, factor), _defineProperty(_style, 'display', 'inline-block'), _style),
					staticLoaded: _this.staticLoaded.bind(_this)
				});
			});

			return _react2['default'].createElement(
				'div',
				{ style: (_ref = {}, _defineProperty(_ref, key, '100%'), _defineProperty(_ref, minkey, '100%'), _ref) },
				children
			);
		}
	}]);

	return Weighted;
})(_react2['default'].Component);

exports['default'] = Weighted;
exports.Row = _row2['default'];
exports.Column = _column2['default'];