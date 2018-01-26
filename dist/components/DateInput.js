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

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateInput = function (_React$PureComponent) {
  _inherits(DateInput, _React$PureComponent);

  function DateInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DateInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateInput.__proto__ || Object.getPrototypeOf(DateInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false,
      hoverDate: false,
      focusState: false
    }, _this.handleFocus = function () {
      _this.setState({ open: true, focusState: true });
    }, _this.handleInputChange = function (value) {
      var handleChange = _this.props.handleChange;

      handleChange(value);
    }, _this.handleBlurInput = function (value) {
      var handleBlur = _this.props.handleBlur;

      _this.setState({ focusState: false });
      if (handleBlur) handleBlur(value);
      _this.handleCloseDate();
    }, _this.handleCloseDate = function () {
      var hoverDate = _this.state.hoverDate;

      if (!hoverDate) _this.setState({ open: false, focusState: false, hoverDate: false });
    }, _this.handleSelectDate = function (value) {
      var _this$props = _this.props,
          handleChange = _this$props.handleChange,
          format = _this$props.format;

      handleChange(value.format(format));
      _this.handleCloseDate();
    }, _this.handleClickDate = function () {
      _this.setState({ focusState: true });
    }, _this.handleHoverDate = function (status) {
      _this.setState({ hoverDate: status });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateInput, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          open = _state.open,
          focusState = _state.focusState;
      var _props = this.props,
          label = _props.label,
          className = _props.className,
          value = _props.value,
          disabled = _props.disabled,
          remark = _props.remark,
          focus = _props.focus,
          placeholder = _props.placeholder,
          name = _props.name,
          errorMessage = _props.errorMessage,
          tabIndex = _props.tabIndex,
          handleKeyCode = _props.handleKeyCode,
          labelProps = _props.labelProps,
          inputProps = _props.inputProps,
          format = _props.format;


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
              if (input != null && (focus || focusState)) {
                input.focus();
              }
            },
            className: 'form-input',
            type: 'text',
            name: name,
            value: value,
            maxLength: this.props.maxLength,
            placeholder: placeholder,
            disabled: disabled,
            onKeyUp: function onKeyUp(e) {
              return handleKeyCode(e);
            },
            onChange: function onChange(e) {
              return _this2.handleInputChange(e.target.value);
            },
            onBlur: function onBlur(e) {
              return _this2.handleBlurInput(e.target.value);
            },
            onFocus: this.handleFocus
          })),
          renderErrorMessage,
          _react2.default.createElement(
            'span',
            {
              onClick: this.handleClickDate,
              onMouseOver: function onMouseOver() {
                return _this2.handleHoverDate(true);
              },
              onMouseOut: function onMouseOut() {
                return _this2.handleHoverDate(false);
              }
            },
            _react2.default.createElement(_reactDatetime2.default, {
              dateFormat: format,
              value: value,
              timeFormat: false,
              open: open,
              input: false,
              onChange: this.handleSelectDate
            })
          )
        ),
        this.props.children
      );
    }
  }]);

  return DateInput;
}(_react2.default.PureComponent);

DateInput.propTypes = {
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  label: _propTypes2.default.string,
  className: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  format: _propTypes2.default.string,
  children: _propTypes2.default.node,
  type: _propTypes2.default.string.isRequired,
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
DateInput.defaultProps = {
  name: 'input',
  tabIndex: 0,
  className: 'field-group',
  format: 'DD/MM/YYYY',
  label: '',
  value: '',
  inputProps: {},
  labelProps: {},
  disabled: false,
  focus: false,
  placeholder: '',
  type: 'text'
};
exports.default = DateInput;