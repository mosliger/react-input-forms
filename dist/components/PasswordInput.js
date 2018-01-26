'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _global = require('../helpers/global');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PasswordInput = function (_React$PureComponent) {
  _inherits(PasswordInput, _React$PureComponent);

  function PasswordInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PasswordInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PasswordInput.__proto__ || Object.getPrototypeOf(PasswordInput)).call.apply(_ref, [this].concat(args))), _this), _this.renderCustomElement = function () {
      var _this$props = _this.props,
          label = _this$props.label,
          value = _this$props.value,
          disabled = _this$props.disabled,
          focus = _this$props.focus,
          placeholder = _this$props.placeholder,
          name = _this$props.name,
          errorMessage = _this$props.errorMessage,
          inputProps = _this$props.inputProps,
          tabIndex = _this$props.tabIndex,
          handleChange = _this$props.handleChange,
          handleKeyCode = _this$props.handleKeyCode,
          handleBlur = _this$props.handleBlur;

      var input = _react2.default.createElement('input', _extends({}, inputProps, {
        ref: function ref(input) {
          if (input != null && focus) {
            input.focus();
          }
        },
        className: 'form-input',
        type: 'password',
        name: name,
        value: value,
        maxLength: _this.props.maxLength,
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
      }));
      return _this.props.customElement(input, label, errorMessage);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PasswordInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          value = _props.value,
          disabled = _props.disabled,
          remark = _props.remark,
          focus = _props.focus,
          placeholder = _props.placeholder,
          name = _props.name,
          errorMessage = _props.errorMessage,
          inputProps = _props.inputProps,
          className = _props.className,
          tabIndex = _props.tabIndex,
          labelProps = _props.labelProps,
          handleChange = _props.handleChange,
          handleKeyCode = _props.handleKeyCode,
          handleBlur = _props.handleBlur;


      if (this.props.customElement) {
        return this.renderCustomElement();
      }

      var renderErrorMessage = '';
      var classInput = 'wrap-form-input';
      if (!(0, _global.isEmpey)(errorMessage)) {
        classInput = 'wrap-form-input error';
        renderErrorMessage = _react2.default.createElement(
          'div',
          { className: 'validation-label' },
          errorMessage
        );
      }

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'label',
          _extends({}, labelProps, { htmlFor: label }),
          label,
          ' ',
          !(0, _global.isEmpey)(remark) && _react2.default.createElement(
            'span',
            { className: 'remark' },
            remark
          )
        ),
        _react2.default.createElement(
          'div',
          { className: classInput },
          _react2.default.createElement('input', _extends({}, inputProps, {
            ref: function ref(input) {
              if (input != null && focus) {
                input.focus();
              }
            },
            className: 'form-input',
            type: 'password',
            name: name,
            value: value,
            maxLength: this.props.maxLength,
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
          })),
          renderErrorMessage
        ),
        this.props.children
      );
    }
  }]);

  return PasswordInput;
}(_react2.default.PureComponent);

PasswordInput.propTypes = {
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  label: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  children: _propTypes2.default.node,
  type: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  inputProps: _propTypes2.default.object,
  labelProps: _propTypes2.default.object,
  disabled: _propTypes2.default.bool,
  focus: _propTypes2.default.bool,
  tabIndex: _propTypes2.default.number,
  maxLength: _propTypes2.default.number,
  errorMessage: _propTypes2.default.string,
  remark: _propTypes2.default.string,
  handleChange: _propTypes2.default.func,
  handleBlur: _propTypes2.default.func,
  handleKeyCode: _propTypes2.default.func
};
PasswordInput.defaultProps = {
  name: 'input',
  tabIndex: 0,
  label: '',
  value: '',
  inputProps: {},
  labelProps: {},
  className: 'field-group',
  disabled: false,
  focus: false,
  placeholder: '',
  type: 'text'
};
exports.default = PasswordInput;