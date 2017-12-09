'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Index$propTypes;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _global = require('./helpers/global');

var _components = require('./components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      value: '',
      errorMessage: '',
      editValue: false
    }, _this.handleValidation = function (value) {
      var rules = _this.props.rules;

      var validation = '';
      if (_this.props.handleVerify) {
        validation = _this.props.handleVerify(value, rules);
      } else {
        validation = (0, _global.verifyField)(value, rules);
      }
      return _this.props.errorMessage ? _this.props.errorMessage : validation;
    }, _this.handleUpdateValue = function (value) {
      var errorMessage = _this.handleValidation(value);
      var name = _this.props.name;

      if (_this.props.onChange) {
        _this.props.onChange(value, name, errorMessage);
      } else if (_this.props.onBlue) {
        _this.props.onBlue(value, name, errorMessage);
      }
    }, _this.handleChange = function (value) {
      var _this$props = _this.props,
          name = _this$props.name,
          onChange = _this$props.onChange;

      var errorMessage = _this.handleValidation(value);
      try {
        _this.setState(function () {
          return {
            value: value,
            errorMessage: errorMessage,
            editValue: !onChange
          };
        });
        if (onChange) onChange(value, name, errorMessage);
      } catch (err) {
        console.error(err);
      }
    }, _this.handleBlur = function (value) {
      var _this$props2 = _this.props,
          name = _this$props2.name,
          onBlur = _this$props2.onBlur,
          type = _this$props2.type;

      try {
        if (onBlur) {
          var errorMessage = _this.handleValidation(value);
          _this.setState(function () {
            return {
              value: value,
              errorMessage: errorMessage,
              editValue: false
            };
          });
          onBlur(value, name, errorMessage);
        } else {
          switch (type) {
            case 'number':
              {
                _this.handleChange(value);
                break;
              }
            default:
              break;
          }
        }
      } catch (err) {
        console.error(err);
      }
    }, _this.handleKeyCode = function (e) {
      var value = _this.state.value;
      var name = _this.props.name;

      var keyCode = e.keyCode || e.which;
      if (_this.props.onKeyCode) _this.props.onKeyCode(keyCode, value, name, e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var value = this.props.value;

      var errorMessage = this.handleValidation(value);
      this.setState(function () {
        return {
          value: value,
          errorMessage: errorMessage,
          editValue: false
        };
      });
      if (!(0, _global.isEmpey)(errorMessage) && !this.props.errorMessage) this.handleUpdateValue(value);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      var editValue = nextState.editValue;

      if (!editValue) {
        var valueState = nextState.value;
        var value = nextProps.value,
            name = nextProps.name;


        var keys = ['value', 'rules'];
        var checkProps = (0, _global.pick)(keys, _extends({}, this.props, { value: valueState }));
        var checkNextProps = (0, _global.pick)(keys, nextProps);
        if (JSON.stringify(checkProps) !== JSON.stringify(checkNextProps)) {
          var errorMessage = this.handleValidation(value);
          this.setState(function () {
            return {
              value: value,
              errorMessage: errorMessage,
              editValue: false
            };
          });
          if (this.props.onPropsChange) this.props.onPropsChange(value, name, errorMessage);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var type = this.props.type;
      var _state = this.state,
          value = _state.value,
          errorMessage = _state.errorMessage,
          editValue = _state.editValue;

      var propsForm = _extends({}, (0, _global.remove)(['onChange', 'value', 'onBlur', 'onKeyCode', 'handleVerify', 'renderComponent', 'children'], this.props), {
        value: editValue ? value : this.props.value,
        errorMessage: this.props.errorMessage || this.props.errorMessage === "" ? this.props.errorMessage : errorMessage,
        handleChange: this.handleChange,
        handleBlur: this.handleBlur,
        handleKeyCode: this.handleKeyCode
      });

      switch (type) {
        case 'text':
          {
            if (this.props.children) return _react2.default.createElement(
              _components.TextInput,
              propsForm,
              this.props.children
            );
            return _react2.default.createElement(_components.TextInput, propsForm);
          }
        case 'number':
          {
            if (this.props.children) return _react2.default.createElement(
              _components.NumberInput,
              propsForm,
              this.props.children
            );
            return _react2.default.createElement(_components.NumberInput, propsForm);
          }
        case 'select':
          {
            if (this.props.children) return _react2.default.createElement(
              _components.SelectInput,
              propsForm,
              this.props.children
            );
            return _react2.default.createElement(_components.SelectInput, propsForm);
          }
        case 'password':
          {
            if (this.props.children) return _react2.default.createElement(
              _components.PasswordInput,
              propsForm,
              this.props.children
            );
            return _react2.default.createElement(_components.PasswordInput, propsForm);
          }
        case 'textarea':
          {
            if (this.props.children) return _react2.default.createElement(
              _components.TextareaInput,
              propsForm,
              this.props.children
            );
            return _react2.default.createElement(_components.TextareaInput, propsForm);
          }
        case 'radio':
          {
            if (this.props.children) return _react2.default.createElement(
              _components.RadioInput,
              propsForm,
              this.props.children
            );
            return _react2.default.createElement(_components.RadioInput, propsForm);
          }
        case 'checkbox':
          {
            if (this.props.children) return _react2.default.createElement(
              _components.CheckboxInput,
              propsForm,
              this.props.children
            );
            return _react2.default.createElement(_components.CheckboxInput, propsForm);
          }
        case 'custom':
          {
            return this.props.renderComponent ? this.props.renderComponent(propsForm) : '';
          }
        default:
          if (this.props.children) return _react2.default.createElement(
            _components.TextInput,
            propsForm,
            this.props.children
          );
          return _react2.default.createElement(_components.TextInput, propsForm);
      }
    }
  }]);

  return Index;
}(_react2.default.Component);

Index.propTypes = (_Index$propTypes = {
  value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.object, _react.PropTypes.bool, _react.PropTypes.array]),
  format: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string]),

  rows: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  tabIndex: _react.PropTypes.number,
  maxLength: _react.PropTypes.number,

  label: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  type: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired,
  errorMessage: _react.PropTypes.string,

  children: _react.PropTypes.string,
  remark: _react.PropTypes.string,

  options: _react.PropTypes.array,

  inputProps: _react.PropTypes.object,
  labelProps: _react.PropTypes.object,
  rules: _react.PropTypes.object
}, _defineProperty(_Index$propTypes, 'children', _react.PropTypes.node), _defineProperty(_Index$propTypes, 'disabled', _react.PropTypes.bool), _defineProperty(_Index$propTypes, 'focus', _react.PropTypes.bool), _defineProperty(_Index$propTypes, 'onChange', _react.PropTypes.func), _defineProperty(_Index$propTypes, 'onBlur', _react.PropTypes.func), _defineProperty(_Index$propTypes, 'onKeyCode', _react.PropTypes.func), _defineProperty(_Index$propTypes, 'onPropsChange', _react.PropTypes.func), _defineProperty(_Index$propTypes, 'handleVerify', _react.PropTypes.func), _defineProperty(_Index$propTypes, 'renderComponent', _react.PropTypes.func), _defineProperty(_Index$propTypes, 'customElement', _react.PropTypes.func), _Index$propTypes);
Index.defaultProps = {
  name: 'input',
  label: '',
  value: '',
  disabled: false,
  focus: false,
  placeholder: '',
  tabIndex: 1,
  remark: '',
  type: 'text',
  rules: undefined
};
exports.default = Index;