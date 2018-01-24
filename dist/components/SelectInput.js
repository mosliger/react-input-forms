'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _global = require('../helpers/global');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectInput = function (_React$PureComponent) {
  _inherits(SelectInput, _React$PureComponent);

  function SelectInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectInput.__proto__ || Object.getPrototypeOf(SelectInput)).call.apply(_ref, [this].concat(args))), _this), _this.handleSelectChange = function (e) {
      var _this$props = _this.props,
          options = _this$props.options,
          handleChange = _this$props.handleChange;

      var value = e.target.value;
      handleChange((0, _global.getOption)(value, options));
    }, _this.renderCustomElement = function () {
      var _this$props2 = _this.props,
          label = _this$props2.label,
          value = _this$props2.value,
          disabled = _this$props2.disabled,
          focus = _this$props2.focus,
          placeholder = _this$props2.placeholder,
          name = _this$props2.name,
          format = _this$props2.format,
          errorMessage = _this$props2.errorMessage,
          options = _this$props2.options,
          inputProps = _this$props2.inputProps,
          tabIndex = _this$props2.tabIndex,
          handleBlur = _this$props2.handleBlur,
          handleKeyCode = _this$props2.handleKeyCode;


      var renderOptions = [];
      var renderErrorMessage = '';
      var valueString = '';

      if (typeof value === 'string') {
        valueString = value;
      } else {
        valueString = value.value ? value.value : '';
      }

      for (var key in options) {
        renderOptions.push(_react2.default.createElement(
          'option',
          { value: options[key].value, key: key + '-' + options[key].value },
          options[key].label
        ));
      }

      var input = _react2.default.createElement(
        'select',
        _extends({}, inputProps, {
          ref: function ref(input) {
            if (input != null && focus) {
              input.focus();
            }
          },
          className: 'form-input',
          value: valueString,
          onChange: function onChange(e) {
            return _this.handleSelectChange(e);
          },
          onBlur: function onBlur(e) {
            return handleBlur(e.target.value);
          },
          onKeyUp: function onKeyUp(e) {
            return handleKeyCode(e);
          },
          disabled: disabled
        }),
        renderOptions
      );
      return _this.props.customElement(input, label, errorMessage);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectInput, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          label = _props.label,
          value = _props.value,
          disabled = _props.disabled,
          remark = _props.remark,
          focus = _props.focus,
          placeholder = _props.placeholder,
          name = _props.name,
          format = _props.format,
          errorMessage = _props.errorMessage,
          className = _props.className,
          options = _props.options,
          inputProps = _props.inputProps,
          tabIndex = _props.tabIndex,
          labelProps = _props.labelProps,
          handleBlur = _props.handleBlur,
          handleKeyCode = _props.handleKeyCode;


      if (this.props.customElement) {
        return this.renderCustomElement();
      }

      var renderOptions = [];
      var valueString = '';

      if (typeof value === 'string') {
        valueString = value;
      } else {
        valueString = value.value ? value.value : '';
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

      for (var key in options) {
        renderOptions.push(_react2.default.createElement(
          'option',
          { value: options[key].value, key: key + '-' + options[key].value },
          options[key].label
        ));
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
          _react2.default.createElement(
            'select',
            _extends({}, inputProps, {
              ref: function ref(input) {
                if (input != null && focus) {
                  input.focus();
                }
              },
              className: 'form-input',
              value: valueString,
              onChange: function onChange(e) {
                return _this2.handleSelectChange(e);
              },
              onBlur: function onBlur(e) {
                return handleBlur(e.target.value);
              },
              onKeyUp: function onKeyUp(e) {
                return handleKeyCode(e);
              },
              disabled: disabled
            }),
            renderOptions
          ),
          renderErrorMessage
        ),
        this.props.children
      );
    }
  }]);

  return SelectInput;
}(_react2.default.PureComponent);

SelectInput.propTypes = {
  value: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]),
  format: _react.PropTypes.bool,
  label: _react.PropTypes.string,
  options: _react.PropTypes.array.isRequired,
  type: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired,
  inputProps: _react.PropTypes.object,
  labelProps: _react.PropTypes.object,
  disabled: _react.PropTypes.bool,
  focus: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  errorMessage: _react.PropTypes.string,
  remark: _react.PropTypes.string,
  handleChange: _react.PropTypes.func
};
SelectInput.defaultProps = {
  name: 'input',
  tabIndex: 0,
  label: '',
  value: '',
  className: 'field-group',
  options: [],
  inputProps: {},
  labelProps: {},
  disabled: false,
  focus: false,
  placeholder: '',
  type: 'text'
};
exports.default = SelectInput;