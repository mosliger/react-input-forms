'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInputForms = require('react-input-forms');

var _reactInputForms2 = _interopRequireDefault(_reactInputForms);

var _numberInput = require('../helpers/numberInput');

var _numberInput2 = _interopRequireDefault(_numberInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextInput = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      numberInput: '',
      numberInputRules: '',
      numberInputChildren: '',
      basicinput: '',
      numberInputFormat: '',
      customElement: ''
    }, _this.handleUpdateValue = function (value, name) {
      _this.setState(_defineProperty({}, name, value));
    }, _this.handleClearValue = function (key) {
      _this.setState(_defineProperty({}, key, ''));
    }, _this.renderBasicInput = function () {
      var basicinput = _this.state.basicinput;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactInputForms2.default, { type: 'number', value: basicinput, name: 'basicinput', label: 'basic input', onChange: _this.handleUpdateValue }),
        _react2.default.createElement(
          'pre',
          null,
          _react2.default.createElement(
            'code',
            null,
            '\n<InputField\n  type="number"\n  value={value}\n  name="input-text"\n  label="basic input"\n  onChange={this.handleUpdateValue}\n/>\n          '
          )
        )
      );
    }, _this.customElementNumber = function (input, label, errorMessage) {
      return _react2.default.createElement(
        'div',
        { className: 'custom-element' },
        _react2.default.createElement(
          'label',
          null,
          label
        ),
        input,
        _react2.default.createElement(
          'div',
          { className: 'error-message' },
          errorMessage
        )
      );
    }, _this.renderCustomElement = function () {
      var customElement = _this.state.customElement;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactInputForms2.default, { type: 'number', customElement: _this.customElementNumber, value: customElement, name: 'customElement', label: 'custom element', onChange: _this.handleUpdateValue }),
        _react2.default.createElement(
          'pre',
          null,
          _react2.default.createElement(
            'code',
            null,
            '\ncustomElementNumber = (input, label, errorMessage) => {\n  return (\n    <div className="custom-element">\n      <label>{label}</label>\n      {input}\n      <div className="error-message">{errorMessage}</div>\n    </div>\n  )\n}\n\n...\n\n<InputField\n  type="number"\n  customElement={this.customElementNumber}\n  value={value}\n  name="input-number"\n  label="custom element"\n  onChange={this.handleUpdateValue}\n/>\n            '
          )
        )
      );
    }, _this.renderDemo = function () {
      var _this$state = _this.state,
          numberInput = _this$state.numberInput,
          numberInputRules = _this$state.numberInputRules,
          numberInputFormat = _this$state.numberInputFormat,
          numberInputChildren = _this$state.numberInputChildren;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'box-demo-input' },
          _react2.default.createElement(_reactInputForms2.default, {
            type: 'number',
            value: numberInput,
            name: 'numberInput',
            label: 'label',
            onChange: _this.handleUpdateValue
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'box-demo-input' },
          _react2.default.createElement(_reactInputForms2.default, {
            type: 'number',
            value: numberInputRules,
            rules: {
              required: 'value is require'
            },
            name: 'numberInputRules',
            label: 'Input verify field',
            onChange: _this.handleUpdateValue
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'box-demo-input' },
          _react2.default.createElement(_reactInputForms2.default, {
            type: 'number',
            value: numberInputFormat,
            name: 'numberInputFormat',
            label: 'Input number format',
            format: '0,000.00',
            onChange: _this.handleUpdateValue
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'box-demo-input' },
          _react2.default.createElement(
            _reactInputForms2.default,
            {
              type: 'number',
              value: numberInputChildren,
              name: 'numberInputChildren',
              label: 'Children',
              onChange: _this.handleUpdateValue
            },
            _react2.default.createElement(
              'button',
              { onClick: function onClick() {
                  return _this.handleClearValue('numberInputChildren');
                } },
              'clear'
            )
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextInput, [{
    key: 'render',
    value: function render() {
      var prosType = (0, _numberInput2.default)('th');
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'h1',
          null,
          'Input Type Number'
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
              'pre',
              null,
              _react2.default.createElement(
                'code',
                { className: 'html' },
                '\nimport React, { Component } from \'react\'\nimport InputField from \'react-input-forms\'\n\nexport default class Demo extends Component {\n  state = {\n    value: \'\',\n  }\n\n  handleUpdateValue = (value) => {\n    this.setState({ value: value });\n  }\n\n  render() {\n    const { value } = this.state;\n    return (\n      <div className="container">\n        <InputField\n          type="number"\n          value={value}\n          name="input-text"\n          label="label"\n          onChange={this.handleUpdateValue}\n        />\n      </div>\n    )\n  }\n}'
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
            ),
            _react2.default.createElement(
              'div',
              { className: 'D-6 M-12' },
              this.renderCustomElement()
            )
          )
        )
      );
    }
  }]);

  return TextInput;
}(_react.Component);

exports.default = TextInput;