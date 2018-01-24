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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxInput = function (_React$PureComponent) {
  _inherits(CheckboxInput, _React$PureComponent);

  function CheckboxInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CheckboxInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CheckboxInput.__proto__ || Object.getPrototypeOf(CheckboxInput)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangeOptions = function (optionDetail, key, checked) {
      var _this$props = _this.props,
          options = _this$props.options,
          handleChange = _this$props.handleChange,
          value = _this$props.value;

      var setValue = [];
      if (checked) {
        var getOptions = options.filter(function (obj) {
          var getValue = value.find(function (item) {
            if (item.value) return obj.value === item.value;
            return obj.value === item;
          });
          if (getValue) return true;
          return false;
        });
        setValue = [].concat(_toConsumableArray(getOptions), [optionDetail]);
      } else {
        var _getOptions = options.filter(function (obj) {
          var getValue = value.find(function (item) {
            if (item.value) return obj.value === item.value;
            return obj.value === item;
          });
          if (getValue) return true;
          return false;
        });

        setValue = _getOptions.filter(function (item) {
          if (item.value) return item.value !== optionDetail.value;
          return item !== optionDetail.value;
        });
      }
      handleChange(setValue);
    }, _this.handleBlueOptions = function (optionDetail, key, checked) {
      var _this$props2 = _this.props,
          handleBlur = _this$props2.handleBlur,
          value = _this$props2.value;

      handleBlur(value);
    }, _this.handleChecked = function (option, index) {
      var value = _this.props.value;

      try {
        var filterValue = value.find(function (optionDetail) {
          if (optionDetail.label) return option.value === optionDetail.value;
          return optionDetail === option.value;
        });
        if (filterValue) return true;
      } catch (e) {
        return false;
      }
      return false;
    }, _this.renderCustomElement = function () {
      var _this$props3 = _this.props,
          label = _this$props3.label,
          value = _this$props3.value,
          disabled = _this$props3.disabled,
          focus = _this$props3.focus,
          options = _this$props3.options,
          name = _this$props3.name,
          errorMessage = _this$props3.errorMessage,
          inputProps = _this$props3.inputProps,
          className = _this$props3.className,
          handleChange = _this$props3.handleChange,
          handleBlur = _this$props3.handleBlur;


      var classInput = 'form-input';
      if (!(0, _global.isEmpey)(errorMessage)) {
        classInput = 'form-input error';
      }
      if (options.length > 0) {
        var inputList = options.map(function (detail, index) {
          var checked = _this.handleChecked(detail, index);
          var input = _react2.default.createElement('input', _extends({}, inputProps, {
            className: 'form-input',
            type: 'checkbox',
            name: name,
            value: detail.value,
            disabled: disabled ? disabled : detail.disabled,
            checked: checked,
            onChange: function onChange() {
              return _this.handleChangeOptions(detail, index, !checked);
            },
            onBlur: function onBlur() {
              return _this.handleBlueOptions(detail, index, checked);
            }
          }));
          return _extends({
            input: input,
            checked: checked
          }, detail);
        });
        return _this.props.customElement(inputList, label, errorMessage);
      }
      var inputCheckbox = _react2.default.createElement('input', _extends({}, inputProps, {
        className: 'form-input',
        type: 'checkbox',
        name: name,
        disabled: disabled,
        checked: value,
        onClick: function onClick() {
          return handleChange(!value);
        },
        onBlur: function onBlur() {
          return handleBlur(value);
        }
      }));
      return _this.props.customElement(inputCheckbox, label, errorMessage);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CheckboxInput, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          label = _props.label,
          value = _props.value,
          disabled = _props.disabled,
          remark = _props.remark,
          focus = _props.focus,
          options = _props.options,
          name = _props.name,
          errorMessage = _props.errorMessage,
          className = _props.className,
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

      if (options.length > 0) {
        return _react2.default.createElement(
          'div',
          { className: className },
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
            var checked = _this2.handleChecked(detail, index);
            return _react2.default.createElement(
              'div',
              { className: 'checkbox-list', key: name + '-' + index },
              _react2.default.createElement(
                'div',
                { className: 'box-input' },
                _react2.default.createElement('input', _extends({}, inputProps, {
                  className: 'form-input',
                  type: 'checkbox',
                  name: name,
                  value: detail.value,
                  disabled: disabled ? disabled : detail.disabled,
                  checked: checked,
                  onChange: function onChange() {
                    return _this2.handleChangeOptions(detail, index, !checked);
                  },
                  onBlur: function onBlur() {
                    return _this2.handleBlueOptions(detail, index, checked);
                  }
                })),
                _react2.default.createElement('label', { className: 'icon ' + (checked ? 'checked' : '') })
              ),
              _react2.default.createElement(
                'label',
                { htmlFor: label },
                detail.label
              )
            );
          }),
          this.props.children,
          renderErrorMessage
        );
      }

      return _react2.default.createElement(
        'div',
        { className: inputProps.className ? inputProps.className : 'field-group-checkbox' },
        _react2.default.createElement(
          'div',
          { className: 'box-input' },
          _react2.default.createElement('input', {
            className: classInput,
            type: 'checkbox',
            name: name,
            disabled: disabled,
            checked: value,
            onClick: function onClick() {
              return handleChange(!value);
            },
            onBlur: function onBlur() {
              return handleBlur(value);
            }
          }),
          _react2.default.createElement('label', { className: 'icon ' + (value ? 'checked' : '') })
        ),
        _react2.default.createElement(
          'label',
          { htmlFor: label },
          label
        ),
        this.props.children,
        renderErrorMessage
      );
    }
  }]);

  return CheckboxInput;
}(_react2.default.PureComponent);

CheckboxInput.propTypes = {
  value: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.array]),
  label: _react.PropTypes.string,
  className: _react.PropTypes.string,
  type: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired,
  inputProps: _react.PropTypes.object,
  labelProps: _react.PropTypes.object,
  disabled: _react.PropTypes.bool,
  focus: _react.PropTypes.bool,
  errorMessage: _react.PropTypes.string,
  remark: _react.PropTypes.string,
  handleChange: _react.PropTypes.func,
  handleBlur: _react.PropTypes.func
};
CheckboxInput.defaultProps = {
  name: 'input',
  tabIndex: 0,
  className: 'field-group-checkbox',
  label: '',
  value: '',
  options: [],
  inputProps: {},
  labelProps: {},
  disabled: false,
  focus: false,
  type: 'text'
};
exports.default = CheckboxInput;