'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInputForms = require('react-input-forms');

var _reactInputForms2 = _interopRequireDefault(_reactInputForms);

var _customInput = require('../helpers/customInput');

var _customInput2 = _interopRequireDefault(_customInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomInput = function (_Component) {
  _inherits(CustomInput, _Component);

  function CustomInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomInput.__proto__ || Object.getPrototypeOf(CustomInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      textInput: '',
      textInputRules: '',
      textInputChildren: '',
      basicinput: ''
    }, _this.handleUpdateValue = function (value, name) {
      _this.setState(_defineProperty({}, name, value));
    }, _this.renderBasicInput = function () {
      var basicinput = _this.state.basicinput;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactInputForms2.default, { type: 'text', value: basicinput, name: 'basicinput', label: 'basic input', onChange: _this.handleUpdateValue }),
        _react2.default.createElement(
          'pre',
          null,
          _react2.default.createElement(
            'code',
            null,
            _this.demoCodeMain()
          )
        )
      );
    }, _this.renderDemo = function () {
      var _this$state = _this.state,
          textInput = _this$state.textInput,
          textInputRules = _this$state.textInputRules,
          textInputChildren = _this$state.textInputChildren;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'box-demo-input' },
          _react2.default.createElement(_reactInputForms2.default, {
            type: 'text',
            value: textInput,
            name: 'textInput',
            label: 'label',
            rules: { required: 'input is require.' },
            onChange: _this.handleUpdateValue,
            renderComponent: function renderComponent(parameter) {
              return _react2.default.createElement(RenderInput, parameter);
            }
          })
        )
      );
    }, _this.demoCodeMain = function () {
      return '\nimport React, { Component } from \'react\'\nimport InputField from \'react-input-forms\'\n\nexport default class Demo extends Component {\n  state = {\n    value: \'\',\n  }\n\n  handleUpdateValue = (value) => {\n    this.setState({ value: value });\n  }\n\n  render() {\n    const { value } = this.state;\n    return (\n      <div className="container">\n        <InputField\n          type="text"\n          value={value}\n          name="input-text"\n          label="label"\n          onChange={this.handleUpdateValue}\n          renderComponent={(parameter) => <RenderInput {...parameter} />}\n        />\n      </div>\n    )\n  }\n}\n\nexport class RenderInput extends Component {\n  render() {\n    const { label, value, disabled, focus, placeholder, name, errorMessage, handleChange, handleKeyCode, handleBlur } = this.props;\n    let renderErrorMessage = \'\';\n    let classInput = \'form-input\';\n    if (!isEmpey(errorMessage)) {\n      classInput = \'form-input error\';\n      renderErrorMessage = (<div className="error-message">{errorMessage}</div>);\n    }\n\n    return (\n      <div className={inputProps.className ? inputProps.className : \'field-group\'}>\n        <label htmlFor={label}>{label}</label>\n        <input\n          ref={(input) => {\n            if (input != null && focus) {\n              input.focus();\n            }\n          } }\n          className={classInput}\n          type="text"\n          name={name}\n          value={value}\n          placeholder={placeholder}\n          disabled={disabled}\n          onKeyUp={(e) => handleKeyCode(e)}\n          onChange={(e) => handleChange(e.target.value)}\n          onBlur={(e) => handleBlur(e.target.value)}\n          />\n\n        {renderErrorMessage}\n        <div className="children">{this.props.children}</div>\n      </div>\n    )\n  }\n}\n';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomInput, [{
    key: 'render',
    value: function render() {
      var prosType = (0, _customInput2.default)('th');
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'h1',
          null,
          'Input Type Custom'
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'D-6 M-12' },
            this.renderDemo()
          ),
          _react2.default.createElement(
            'div',
            { className: 'D-6 M-12' },
            _react2.default.createElement(
              'h4',
              null,
              'input type custom'
            ),
            _react2.default.createElement(
              'pre',
              null,
              _react2.default.createElement(
                'code',
                { className: 'html' },
                '\nimport React, { Component } from \'react\'\nimport InputField from \'react-input-forms\'\nimport RenderInput from \'../components/RenderInput\'\n\nexport default class Demo extends Component {\n  state = {\n    value: \'\',\n  }\n\n  handleUpdateValue = (value) => {\n    this.setState({ value: value });\n  }\n\n  render() {\n    const { value } = this.state;\n    return (\n      <div className="container">\n        <InputField\n          type="text"\n          value={value}\n          name="input-text"\n          label="label"\n          onChange={this.handleUpdateValue}\n          renderComponent={(parameter) => <RenderInput {...parameter} />}\n        />\n      </div>\n    )\n  }\n}\n                  '
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'pros-type' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            prosType.title
          ),
          _react2.default.createElement(
            'table',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                prosType.header.property
              ),
              _react2.default.createElement(
                'th',
                null,
                prosType.header.type
              ),
              _react2.default.createElement(
                'th',
                null,
                prosType.header.default
              ),
              _react2.default.createElement(
                'th',
                null,
                prosType.header.description
              )
            ),
            prosType.detail.map(function (obj, index) {
              return _react2.default.createElement(
                'tr',
                { key: index },
                _react2.default.createElement(
                  'td',
                  null,
                  obj.property
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  obj.type
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  obj.default
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  obj.description
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'demo' },
          _react2.default.createElement(
            'h2',
            null,
            ' Demo input type text'
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'D-6 M-12' },
              this.renderBasicInput()
            )
          )
        )
      );
    }
  }]);

  return CustomInput;
}(_react.Component);

exports.default = CustomInput;

var RenderInput = exports.RenderInput = function (_Component2) {
  _inherits(RenderInput, _Component2);

  function RenderInput() {
    _classCallCheck(this, RenderInput);

    return _possibleConstructorReturn(this, (RenderInput.__proto__ || Object.getPrototypeOf(RenderInput)).apply(this, arguments));
  }

  _createClass(RenderInput, [{
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
          handleChange = _props.handleChange,
          handleKeyCode = _props.handleKeyCode,
          handleBlur = _props.handleBlur;

      var renderErrorMessage = '';
      var classInput = 'form-input';
      if (!isEmpey(errorMessage)) {
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

  return RenderInput;
}(_react.Component);