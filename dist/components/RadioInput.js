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

var RadioInput = function (_React$PureComponent) {
  _inherits(RadioInput, _React$PureComponent);

  function RadioInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RadioInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadioInput.__proto__ || Object.getPrototypeOf(RadioInput)).call.apply(_ref, [this].concat(args))), _this), _this.renderCustomElement = function () {
      var _this$props = _this.props,
          label = _this$props.label,
          value = _this$props.value,
          disabled = _this$props.disabled,
          focus = _this$props.focus,
          options = _this$props.options,
          name = _this$props.name,
          errorMessage = _this$props.errorMessage,
          inputProps = _this$props.inputProps,
          handleChange = _this$props.handleChange,
          handleBlur = _this$props.handleBlur;


      var classInput = 'form-input';
      if (!(0, _global.isEmpey)(errorMessage)) {
        classInput = 'form-input error';
      }
      var inputList = options.map(function (detail, index) {
        var getValue = value.value ? value.value : value;
        var checked = getValue === detail.value;
        var input = _react2.default.createElement('input', {
          className: classInput,
          type: 'radio',
          name: name,
          value: detail.value,
          disabled: disabled ? disabled : detail.disabled,
          checked: checked,
          onChange: function onChange() {
            return handleChange(detail.value);
          },
          onBlur: function onBlur(e) {
            return handleBlur(detail.value);
          }
        });
        return _extends({
          input: input
        }, detail);
      });
      return _this.props.customElement(inputList, label, errorMessage);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RadioInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          value = _props.value,
          disabled = _props.disabled,
          remark = _props.remark,
          focus = _props.focus,
          options = _props.options,
          name = _props.name,
          errorMessage = _props.errorMessage,
          inputProps = _props.inputProps,
          handleChange = _props.handleChange,
          handleBlur = _props.handleBlur;


      if (this.props.customElement) {
        return this.renderCustomElement();
      }

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
          label,
          ' ',
          !(0, _global.isEmpey)(remark) && _react2.default.createElement(
            'span',
            { className: 'remark' },
            remark
          )
        ),
        options.map(function (detail, index) {
          var getValue = value.value ? value.value : value;
          var checked = getValue === detail.value;
          return _react2.default.createElement(
            'div',
            { className: 'radio-list', key: name + '-' + index },
            _react2.default.createElement(
              'div',
              { className: 'box-input' },
              _react2.default.createElement('input', {
                className: classInput,
                type: 'radio',
                name: name,
                value: detail.value,
                disabled: disabled ? disabled : detail.disabled,
                checked: checked,
                onChange: function onChange() {
                  return handleChange(detail.value);
                },
                onBlur: function onBlur(e) {
                  return handleBlur(detail.value);
                }
              }),
              _react2.default.createElement('label', { className: 'icon ' + (checked ? 'checked' : '') })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: label },
              detail.label
            )
          );
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

  return RadioInput;
}(_react2.default.PureComponent);

RadioInput.propTypes = {
  value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.object]),
  label: _react.PropTypes.string,
  type: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired,
  options: _react.PropTypes.array,
  inputProps: _react.PropTypes.object,
  labelProps: _react.PropTypes.object,
  disabled: _react.PropTypes.bool,
  focus: _react.PropTypes.bool,
  errorMessage: _react.PropTypes.string,
  remark: _react.PropTypes.string,
  handleChange: _react.PropTypes.func,
  handleBlur: _react.PropTypes.func,
  handleKeyCode: _react.PropTypes.func
};
RadioInput.defaultProps = {
  name: 'input',
  tabIndex: 0,
  label: '',
  value: '',
  options: [],
  inputProps: {},
  labelProps: {},
  disabled: false,
  focus: false,
  type: 'text'
};
exports.default = RadioInput;