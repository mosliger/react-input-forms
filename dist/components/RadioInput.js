'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInputForms = require('react-input-forms');

var _reactInputForms2 = _interopRequireDefault(_reactInputForms);

var _radioInput = require('../helpers/radioInput');

var _radioInput2 = _interopRequireDefault(_radioInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var optionList = [{ label: 'one', value: '1' }, { label: 'two', value: '2' }, { label: 'three', value: '3' }];

var RadioInput = function (_Component) {
  _inherits(RadioInput, _Component);

  function RadioInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RadioInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadioInput.__proto__ || Object.getPrototypeOf(RadioInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      radioInput: '',
      radioInputRules: '',
      radioInputChildren: '',
      basicinput: '',
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
        _react2.default.createElement(_reactInputForms2.default, { type: 'radio', options: optionList, value: basicinput, name: 'basicinput', label: 'basic input ', onChange: _this.handleUpdateValue }),
        _react2.default.createElement(
          'pre',
          null,
          _react2.default.createElement(
            'code',
            null,
            '\nconst optionList = [\n  { label: \'one\', value: \'1\' },\n  { label: \'two\', value: \'2\' },\n  { label: \'three\', value: \'3\' },\n  { label: \'four\', value: \'4\' },\n  { label: \'five\', value: \'5\' },\n];\n\n...\n\n<InputField\n  type="text"\n  options={optionList}\n  value={value}\n  name="input-text"\n  label="basic input"\n  onChange={this.handleUpdateValue}\n/>\n          '
          )
        )
      );
    }, _this.customElementRadio = function (inputList, label, errorMessage) {
      return _react2.default.createElement(
        'div',
        { className: 'field-group' },
        _react2.default.createElement(
          'label',
          { htmlFor: label },
          label
        ),
        inputList.map(function (detail, index) {
          return _react2.default.createElement(
            'div',
            { className: 'radio-list', key: name + '-' + index },
            _react2.default.createElement(
              'div',
              { className: 'box-input' },
              detail.input,
              _react2.default.createElement('label', { className: 'icon' })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: label },
              detail.label
            )
          );
        }),
        errorMessage
      );
    }, _this.renderCustomElement = function () {
      var customElement = _this.state.customElement;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactInputForms2.default, { type: 'radio', options: optionList, customElement: _this.customElementRadio, value: customElement, name: 'customElement', label: 'custom element', onChange: _this.handleUpdateValue }),
        _react2.default.createElement(
          'pre',
          null,
          _react2.default.createElement(
            'code',
            null,
            '\ncustomElementRadio = (inputList, label, errorMessage) => {\n  return (\n    <div className="field-group">\n      <label htmlFor={label}>{label}</label>\n      {inputList.map((detail, index) => {\n        return (\n          <div className="radio-list"}>\n            <div className="box-input">\n              {detail.input}\n              <label className="icon"></label>\n            </div>\n            <label htmlFor={label}>{detail.label}</label>\n          </div>\n        )\n      })\n      }\n      {errorMessage}\n    </div>\n  )\n}\n\n...\n\nconst optionList = [\n  { label: \'one\', value: \'1\' },\n  { label: \'two\', value: \'2\' },\n  { label: \'three\', value: \'3\' },\n  { label: \'four\', value: \'4\' },\n  { label: \'five\', value: \'5\' },\n];\n\n...\n\n<InputField\n  type="radio"\n  customElement={this.customElementRadio}\n  value={value}\n  name="input-radio"\n  label="custom element"\n  onChange={this.handleUpdateValue}\n/>\n          '
          )
        )
      );
    }, _this.renderDemo = function () {
      var _this$state = _this.state,
          radioInput = _this$state.radioInput,
          radioInputChildren = _this$state.radioInputChildren,
          radioInputRules = _this$state.radioInputRules;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'box-demo-input' },
          _react2.default.createElement(_reactInputForms2.default, {
            type: 'radio',
            value: radioInput,
            options: [{ label: 'one', value: '1' }, { label: 'two', value: '2' }, { label: 'three', value: '3' }],
            name: 'radioInput',
            label: 'label',
            onChange: _this.handleUpdateValue
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'box-demo-input' },
          _react2.default.createElement(_reactInputForms2.default, {
            type: 'radio',
            value: radioInputRules,
            options: [{ label: 'one', value: '1' }, { label: 'two', value: '2', disabled: true }, { label: 'three', value: '3' }],
            name: 'radioInputRules',
            label: 'disabled \u0E1A\u0E32\u0E07\u0E15\u0E31\u0E27',
            onChange: _this.handleUpdateValue
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'box-demo-input' },
          _react2.default.createElement(
            _reactInputForms2.default,
            {
              type: 'radio',
              value: radioInputChildren,
              options: optionList,
              name: 'radioInputChildren',
              label: 'Children',
              onChange: _this.handleUpdateValue
            },
            _react2.default.createElement(
              'button',
              { onClick: function onClick() {
                  return _this.handleClearValue('radioInputChildren');
                } },
              'clear'
            )
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RadioInput, [{
    key: 'render',
    value: function render() {
      var prosType = (0, _radioInput2.default)('th');
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'h1',
          null,
          'Input Type Radio'
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
                '\nimport React, { Component } from \'react\'\nimport InputField from \'react-input-forms\'\n\nexport default class Demo extends Component {\n  state = {\n    value: \'\',\n  }\n\n  handleUpdateValue = (value) => {\n    this.setState({ value: value });\n  }\n\n  render() {\n    const { value } = this.state;\n    const optionList = [\n      { label: \'one\', value: \'1\' },\n      { label: \'two\', value: \'2\' },\n      { label: \'three\', value: \'3\' },\n      { label: \'four\', value: \'4\' },\n      { label: \'five\', value: \'5\' },\n    ];\n    return (\n      <div className="container">\n        <InputField\n          type="radio"\n          value={value}\n          options={optionList}\n          name="input-select"\n          label="label"\n          onChange={this.handleUpdateValue}\n        />\n      </div>\n    )\n  }\n}'
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
            ' Demo input type radio'
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

  return RadioInput;
}(_react.Component);

exports.default = RadioInput;