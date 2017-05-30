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

var TextareaInput = function (_React$Component) {
  _inherits(TextareaInput, _React$Component);

  function TextareaInput() {
    _classCallCheck(this, TextareaInput);

    return _possibleConstructorReturn(this, (TextareaInput.__proto__ || Object.getPrototypeOf(TextareaInput)).apply(this, arguments));
  }

  _createClass(TextareaInput, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var keys = ['name', 'value', 'type', 'label', 'rows', 'cols', 'focus', 'disabled', 'errorMessage', 'placeholder'];
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
          rows = _props.rows,
          cols = _props.cols,
          tabIndex = _props.tabIndex,
          errorMessage = _props.errorMessage,
          inputProps = _props.inputProps,
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
        _react2.default.createElement(
          'textarea',
          {
            ref: function ref(input) {
              if (input != null && focus) {
                input.focus();
              }
            },
            rows: rows,
            cols: cols,
            disabled: disabled,
            className: classInput,
            value: value,
            onKeyUp: function onKeyUp(e) {
              return handleKeyCode(e);
            },
            onChange: function onChange(e) {
              return handleChange(e.target.value);
            },
            onBlur: function onBlur(e) {
              return handleBlur(e.target.value);
            }
          },
          value
        ),
        this.props.children,
        renderErrorMessage
      );
    }
  }]);

  return TextareaInput;
}(_react2.default.Component);

TextareaInput.propTypes = {
  value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  rows: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  label: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  type: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired,
  inputProps: _react.PropTypes.object,
  labelProps: _react.PropTypes.object,
  disabled: _react.PropTypes.bool,
  focus: _react.PropTypes.bool,
  errorMessage: _react.PropTypes.string,
  handleChange: _react.PropTypes.func,
  handleBlur: _react.PropTypes.func,
  handleKeyCode: _react.PropTypes.func
};
TextareaInput.defaultProps = {
  name: 'input',
  rows: 3,
  cols: 4,
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
exports.default = TextareaInput;