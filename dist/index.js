'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Index = require('./components/Index');

var _Index2 = _interopRequireDefault(_Index);

require('../style/style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_Index2.default, null), document.getElementById('app'));