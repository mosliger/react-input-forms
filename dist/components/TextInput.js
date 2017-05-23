'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _global = require('../helpers/global');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextInput = function (_React$Component) {
  _inherits(TextInput, _React$Component);

  function TextInput() {
    _classCallCheck(this, TextInput);

    return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));
  }

  _createClass(TextInput, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var keys = ['name', 'value', 'type', 'label', 'focus', 'disabled', 'errorMessage', 'placeholder'];
      var checkProps = (0, _global.pick)(keys, this.props);
      var checkNextProps = (0, _global.pick)(keys, nextProps);
      return JSON.stringify(checkProps) !== JSON.stringify(checkNextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          value = _props.value,
          disabled = _props.disabled,
          focus = _props.focus,
          placeholder = _props.placeholder,
          name = _props.name,
          errorMessage = _props.errorMessage,
          inputProps = _props.inputProps,
          tabIndex = _props.tabIndex,
          handleChange = _props.handleChange,
          handleKeyCode = _props.handleKeyCode,
          handleBlur = _props.handleBlur;


      var renderErrorMessage = '';
      var classInput = 'form-input';
      if (!(0, _global.isEmpey)(errorMessage)) {
        classInput = 'form-input error';
        renderErrorMessage = _react2.default.createElement(
          'div',
          { className: 'error-message' },
          errorMessage
        );
      }

      return _react2.default.createElement(
        'div',
        { className: inputProps.className ? inputProps.className : 'field-group' },
        _react2.default.createElement(
          'label',
          { htmlFor: label },
          label
        ),
        _react2.default.createElement('input', {
          ref: function ref(input) {
            if (input != null && focus) {
              input.focus();
            }
          },
          className: classInput,
          type: 'text',
          name: name,
          value: value,
          placeholder: placeholder,
          disabled: disabled,
          onKeyUp: function onKeyUp(e) {
            return handleKeyCode(e);
          },
          onChange: function onChange(e) {
            return handleChange(e.target.value);
          },
          onBlur: function onBlur(e) {
            return handleBlur(e.target.value);
          }
        }),
        renderErrorMessage,
        _react2.default.createElement(
          'div',
          { className: 'children' },
          this.props.children
        )
      );
    }
  }]);

  return TextInput;
}(_react2.default.Component);

TextInput.propTypes = {
  value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

  label: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  children: _react.PropTypes.node,
  type: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired,
  inputProps: _react.PropTypes.object,
  labelProps: _react.PropTypes.object,
  disabled: _react.PropTypes.bool,
  focus: _react.PropTypes.bool,
  tabIndex: _react.PropTypes.number,
  errorMessage: _react.PropTypes.string,
  handleChange: _react.PropTypes.func,
  handleBlur: _react.PropTypes.func,
  handleKeyCode: _react.PropTypes.func
};
TextInput.defaultProps = {
  name: 'input',
  tabIndex: 0,
  label: '',
  value: '',
  inputProps: {},
  labelProps: {},
  disabled: false,
  focus: false,
  placeholder: '',
  type: 'text'
};
exports.default = TextInput;