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

var NumberInput = function (_React$PureComponent) {
  _inherits(NumberInput, _React$PureComponent);

  function NumberInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NumberInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).call.apply(_ref, [this].concat(args))), _this), _this.getValueFormat = function (value) {
      var format = _this.props.format;

      var valueTopNumber = (0, _global.toNumber)(value);
      var splitFormat = format.split('.');
      var splitValue = valueTopNumber.split('.');
      var decimalFormat = splitFormat[1] ? splitFormat[1] : '';
      var decimalValue = splitValue[1] ? splitValue[1] : '';
      if (decimalFormat !== '' && decimalFormat.length !== decimalValue.length) {
        var decimal = decimalValue;
        for (var i = 1; i <= decimalFormat.length - decimalValue.length; i++) {
          decimal += '0';
        }return (0, _global.isEmpey)(value) ? '' : splitValue[0] + '.' + decimal;
      } else {
        return valueTopNumber;
      }
    }, _this.onInputChange = function (value) {
      var _this$props = _this.props,
          handleChange = _this$props.handleChange,
          format = _this$props.format;

      var valueToNumber = (0, _global.toNumber)(value);
      var emptyValue = value === '';
      if (emptyValue) {
        handleChange(value);
      } else if ((0, _global.checkNumberFormat)(valueToNumber, format)) {
        handleChange(valueToNumber);
      } else if (/^-?\d+(\.)?(\d+)?$/.test(value)) {
        handleChange(valueToNumber);
      } else if ((0, _global.size)(valueToNumber) < (0, _global.size)(_this.props.value)) {
        handleChange(valueToNumber);
      }
    }, _this.handleOnBlur = function (value) {
      var handleBlur = _this.props.handleBlur;

      if (handleBlur) handleBlur(_this.getValueFormat(value));
    }, _this.renderCustomElement = function () {
      var _this$props2 = _this.props,
          label = _this$props2.label,
          value = _this$props2.value,
          disabled = _this$props2.disabled,
          focus = _this$props2.focus,
          format = _this$props2.format,
          placeholder = _this$props2.placeholder,
          name = _this$props2.name,
          errorMessage = _this$props2.errorMessage,
          inputProps = _this$props2.inputProps,
          tabIndex = _this$props2.tabIndex,
          handleChange = _this$props2.handleChange,
          handleKeyCode = _this$props2.handleKeyCode,
          handleBlur = _this$props2.handleBlur;

      var input = _react2.default.createElement('input', _extends({}, inputProps, {
        ref: function ref(input) {
          if (input != null && focus) {
            input.focus();
          }
        },
        className: 'form-input',
        type: 'text',
        name: name,
        value: !(0, _global.isEmpey)(format) ? (0, _global.toNumeral)(value, format) : value,
        placeholder: placeholder,
        disabled: disabled,
        maxLength: _this.props.maxLength,
        onKeyUp: function onKeyUp(e) {
          return handleKeyCode(e);
        },
        onChange: function onChange(e) {
          return _this.onInputChange(e.target.value);
        },
        onBlur: function onBlur(e) {
          return _this.handleOnBlur(e.target.value);
        }
      }));
      return _this.props.customElement(input, label, errorMessage);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NumberInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          value = _props.value,
          format = _props.format,
          handleBlur = _props.handleBlur;

      var numberValue = Number((0, _global.toNumber)(value));
      if (!(0, _global.isEmpey)(value) && !(0, _global.isEmpey)(format) && isFinite((0, _global.toNumber)(value))) handleBlur(this.getValueFormat((0, _global.toNumeral)(numberValue.toString(), format)));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          label = _props2.label,
          value = _props2.value,
          disabled = _props2.disabled,
          remark = _props2.remark,
          focus = _props2.focus,
          placeholder = _props2.placeholder,
          name = _props2.name,
          format = _props2.format,
          className = _props2.className,
          tabIndex = _props2.tabIndex,
          errorMessage = _props2.errorMessage,
          inputProps = _props2.inputProps,
          labelProps = _props2.labelProps,
          handleChange = _props2.handleChange,
          handleKeyCode = _props2.handleKeyCode;


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
            type: 'text',
            name: name,
            value: !(0, _global.isEmpey)(format) ? (0, _global.toNumeral)(value, format) : value,
            placeholder: placeholder,
            disabled: disabled,
            maxLength: this.props.maxLength,
            onKeyUp: function onKeyUp(e) {
              return handleKeyCode(e);
            },
            onChange: function onChange(e) {
              return _this2.onInputChange(e.target.value);
            },
            onBlur: function onBlur(e) {
              return _this2.handleOnBlur(e.target.value);
            }
          })),
          renderErrorMessage
        ),
        this.props.children
      );
    }
  }]);

  return NumberInput;
}(_react2.default.PureComponent);

NumberInput.propTypes = {
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  format: _propTypes2.default.string,
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  type: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  inputProps: _propTypes2.default.object,
  labelProps: _propTypes2.default.object,
  disabled: _propTypes2.default.bool,
  focus: _propTypes2.default.bool,
  errorMessage: _propTypes2.default.string,
  remark: _propTypes2.default.string,
  handleChange: _propTypes2.default.func,
  maxLength: _propTypes2.default.number,
  handleBlur: _propTypes2.default.func,
  handleKeyCode: _propTypes2.default.func
};
NumberInput.defaultProps = {
  name: 'input',
  format: '',
  tabIndex: 0,
  label: '',
  className: 'field-group',
  value: '',
  inputProps: {},
  labelProps: {},
  disabled: false,
  type: 'text'
};
exports.default = NumberInput;