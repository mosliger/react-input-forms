'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

var _TextInput = require('./TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _NumberInput = require('./NumberInput');

var _NumberInput2 = _interopRequireDefault(_NumberInput);

var _SelectInput = require('./SelectInput');

var _SelectInput2 = _interopRequireDefault(_SelectInput);

var _TextareaInput = require('./TextareaInput');

var _TextareaInput2 = _interopRequireDefault(_TextareaInput);

var _RadioInput = require('./RadioInput');

var _RadioInput2 = _interopRequireDefault(_RadioInput);

var _CheckboxInput = require('./CheckboxInput');

var _CheckboxInput2 = _interopRequireDefault(_CheckboxInput);

var _CustomInput = require('./CustomInput');

var _CustomInput2 = _interopRequireDefault(_CustomInput);

var _PasswordInput = require('./PasswordInput');

var _PasswordInput2 = _interopRequireDefault(_PasswordInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentMenu: 'home',
      menuList: [{ name: 'Home', key: 'home' }, { name: 'Text', key: 'text' }, { name: 'Number', key: 'number' }, { name: 'Select', key: 'select' }, { name: 'Password', key: 'password' }, { name: 'Textarea', key: 'textarea' }, { name: 'Radio', key: 'radio' }, { name: 'Checkbox', key: 'checkbox' }, { name: 'Custom', key: 'custom' }]
    }, _this.selectMenu = function (keyMenu) {
      _this.setState({
        currentMenu: keyMenu
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          menuList = _state.menuList,
          currentMenu = _state.currentMenu;


      return _react2.default.createElement(
        'div',
        { className: 'demo-input-fields' },
        _react2.default.createElement(
          'div',
          { className: 'main-menu' },
          _react2.default.createElement(
            'h2',
            null,
            'Menu'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'menu-list' },
            menuList.map(function (item) {
              return _react2.default.createElement(
                'li',
                { key: item.key, className: 'item ' + (currentMenu === item.key ? 'active' : '') },
                _react2.default.createElement(
                  'a',
                  { href: 'Javascript:;', onClick: function onClick() {
                      return _this2.selectMenu(item.key);
                    } },
                  ' ',
                  item.name,
                  ' '
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'main-page' },
          _react2.default.createElement(
            'ul',
            { className: 'page-list' },
            _react2.default.createElement(
              'li',
              { key: 'page-home', className: currentMenu === 'home' ? 'item active' : 'item' },
              _react2.default.createElement(_Home2.default, null)
            ),
            _react2.default.createElement(
              'li',
              { key: 'page-text', className: currentMenu === 'text' ? 'item active' : 'item' },
              _react2.default.createElement(_TextInput2.default, null)
            ),
            _react2.default.createElement(
              'li',
              { key: 'page-number', className: currentMenu === 'number' ? 'item active' : 'item' },
              _react2.default.createElement(_NumberInput2.default, null)
            ),
            _react2.default.createElement(
              'li',
              { key: 'page-select', className: currentMenu === 'select' ? 'item active' : 'item' },
              _react2.default.createElement(_SelectInput2.default, null)
            ),
            _react2.default.createElement(
              'li',
              { key: 'page-password', className: currentMenu === 'password' ? 'item active' : 'item' },
              _react2.default.createElement(_PasswordInput2.default, null)
            ),
            _react2.default.createElement(
              'li',
              { key: 'page-textarea', className: currentMenu === 'textarea' ? 'item active' : 'item' },
              _react2.default.createElement(_TextareaInput2.default, null)
            ),
            _react2.default.createElement(
              'li',
              { key: 'page-radio', className: currentMenu === 'radio' ? 'item active' : 'item' },
              _react2.default.createElement(_RadioInput2.default, null)
            ),
            _react2.default.createElement(
              'li',
              { key: 'page-checkbox', className: currentMenu === 'checkbox' ? 'item active' : 'item' },
              _react2.default.createElement(_CheckboxInput2.default, null)
            ),
            _react2.default.createElement(
              'li',
              { key: 'page-custom', className: currentMenu === 'custom' ? 'item active' : 'item' },
              _react2.default.createElement(_CustomInput2.default, null)
            )
          )
        )
      );
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;