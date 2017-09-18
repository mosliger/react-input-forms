'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _checkboxInput = require('../helpers/checkboxInput');

var _checkboxInput2 = _interopRequireDefault(_checkboxInput);

var _src = require('../../src');

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import InputField from 'react-input-forms';


var optionList = [{ label: 'one', value: '1' }, { label: 'two', value: '2' }, { label: 'three', value: '3' }];

var CheckboxInput = function (_Component) {
  _inherits(CheckboxInput, _Component);

  function CheckboxInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CheckboxInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CheckboxInput.__proto__ || Object.getPrototypeOf(CheckboxInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      checkboxInput: [],
      checkboxInputNotOption: false,
      checkboxInputRules: [],
      checkboxInputChildren: [],
      basicinput: [],
      customElementNotOption: false,
      customElementHaveOption: []
    }, _this.handleUpdateValueNotOption = function (value, name) {
      _this.setState(_defineProperty({}, name, value));
    }, _this.handleUpdateValueOption = function (option, name) {
      _this.setState(_defineProperty({}, name, option));
    }, _this.handleUpdateValue = function (option, name) {
      _this.setState(_defineProperty({}, name, option.map(function (item) {
        return item.value;
      })));
    }, _this.handleClearValue = function (key) {
      _this.setState(_defineProperty({}, key, ''));
    }, _this.renderBasicInput = function () {
      var basicinput = _this.state.basicinput;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_src2.default, { type: 'checkbox', options: optionList, value: basicinput, name: 'basicinput', label: 'basic input ', onChange: _this.handleUpdateValueNotOption }),
        _react2.default.createElement(
          'pre',
          null,
          _react2.default.createElement(
            'code',
            null,
            '\nconst optionList = [\n  { label: \'one\', value: \'1\' },\n  { label: \'two\', value: \'2\' },\n  { label: \'three\', value: \'3\' },\n  { label: \'four\', value: \'4\' },\n  { label: \'five\', value: \'5\' },\n];\n\n...\n\n<InputField\n  type="checkbox"\n  options={optionList}\n  value={value}\n  name="input-checkbox"\n  label="basic input"\n  onChange={this.handleUpdateValue}\n/>\n          '
          )
        )
      );
    }, _this.customElementNotOption = function (input, label, errorMessage) {
      return _react2.default.createElement(
        'div',
        { className: 'field-group' },
        _react2.default.createElement(
          'div',
          { className: 'box-input' },
          input,
          _react2.default.createElement('label', { className: 'icon' })
        ),
        _react2.default.createElement(
          'label',
          { htmlFor: label },
          label
        ),
        _react2.default.createElement(
          'div',
          { className: 'error-message' },
          errorMessage
        )
      );
    }, _this.renderCustomElementNotOption = function () {
      var customElementNotOption = _this.state.customElementNotOption;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_src2.default, { type: 'checkbox', customElement: _this.customElementNotOption, value: customElementNotOption, name: 'customElementNotOption', label: 'custom element not option ', onChange: _this.handleUpdateValue }),
        _react2.default.createElement(
          'pre',
          null,
          _react2.default.createElement(
            'code',
            null,
            '\ncustomElementNotOption = (input, label, errorMessage) => {\n    return (\n      <div className="field-group">\n        <div className="box-input">\n          {input}\n           <label className="icon"></label>\n        </div>\n        <label htmlFor={label}>{label}</label>\n        <div className="error-message">{errorMessage}</div>\n      </div>\n    )\n  }\n\n...\n\n<InputField\n  type="checkbox"\n  customElement={this.customElementNotOption}\n  value={value}\n  name="input-checkbox"\n  label="custom element not option"\n  onChange={this.handleUpdateValue}\n/>\n          '
          )
        )
      );
    }, _this.customElementHaveOption = function (inputList, label, errorMessage) {
      // console.log('renderCustomElementHaveOption >>', inputList);
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
            { className: 'checkbox-list', key: name + '-' + index },
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
    }, _this.renderCustomElementHaveOption = function () {
      var customElementHaveOption = _this.state.customElementHaveOption;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_src2.default, { type: 'checkbox', options: optionList, customElement: _this.customElementHaveOption, value: customElementHaveOption, name: 'customElementHaveOption', label: 'custom element have option ', onChange: _this.handleUpdateValue }),
        _react2.default.createElement(
          'pre',
          null,
          _react2.default.createElement(
            'code',
            null,
            '\ncustomElementHaveOption = (inputList, label, errorMessage) => {\n  return (\n    <div className="field-group">\n      <label htmlFor={label}>{label}</label>\n      {inputList.map((detail, index) => {\n        return (\n          <div className="checkbox-list"}>\n            <div className="box-input">\n              {detail.input}\n              <label className="icon"></label>\n            </div>\n            <label htmlFor={label}>{detail.label}</label>\n          </div>\n        )\n      })\n      }\n      {errorMessage}\n    </div>\n  )\n}\n\n...\n\nconst optionList = [\n  { label: \'one\', value: \'1\' },\n  { label: \'two\', value: \'2\' },\n  { label: \'three\', value: \'3\' },\n  { label: \'four\', value: \'4\' },\n  { label: \'five\', value: \'5\' },\n];\n\n...\n\n<InputField\n  type="checkbox"\n  customElement={this.customElementHaveOption}\n  value={value}\n  name="input-checkbox"\n  label="custom element not option"\n  onChange={this.handleUpdateValue}\n/>\n          '
          )
        )
      );
    }, _this.renderDemo = function () {
      var _this$state = _this.state,
          checkboxInput = _this$state.checkboxInput,
          checkboxInputChildren = _this$state.checkboxInputChildren,
          checkboxInputRules = _this$state.checkboxInputRules,
          checkboxInputNotOption = _this$state.checkboxInputNotOption;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'box-demo-input' },
          _react2.default.createElement(_src2.default, {
            type: 'checkbox',
            value: checkboxInputNotOption,
            name: 'checkboxInputNotOption',
            label: 'checkbox not options',
            onChange: _this.handleUpdateValue
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'box-demo-input' },
          _react2.default.createElement(_src2.default, {
            type: 'checkbox',
            value: checkboxInput,
            options: [{ label: 'one', value: '1' }, { label: 'two', value: '2' }, { label: 'three', value: '3' }],
            name: 'checkboxInput',
            label: 'checkbox options',
            onChange: _this.handleUpdateValueOption
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'box-demo-input' },
          _react2.default.createElement(_src2.default, {
            type: 'checkbox',
            value: checkboxInputRules,
            options: [{ label: 'one', value: '1' }, { label: 'two', value: '2', disabled: true }, { label: 'three', value: '3' }],
            name: 'checkboxInputRules',
            label: 'disabled \u0E1A\u0E32\u0E07\u0E15\u0E31\u0E27',
            onChange: _this.handleUpdateValue
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'box-demo-input' },
          _react2.default.createElement(
            _src2.default,
            {
              type: 'checkbox',
              value: checkboxInputChildren,
              options: optionList,
              name: 'checkboxInputChildren',
              label: 'Children',
              onChange: _this.handleUpdateValue
            },
            _react2.default.createElement(
              'button',
              { onClick: function onClick() {
                  return _this.handleClearValue('checkboxInputChildren');
                } },
              'clear'
            )
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CheckboxInput, [{
    key: 'render',
    value: function render() {
      var prosType = (0, _checkboxInput2.default)('th');
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'h1',
          null,
          'Input Type Checkbox'
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
                '\nimport React, { Component } from \'react\'\nimport InputField from \'react-input-forms\'\n\nexport default class Demo extends Component {\n  state = {\n    value: [],\n  }\n\n  handleUpdateValue = (value) => {\n    this.setState({ value: value });\n  }\n\n  render() {\n    const { value } = this.state;\n    const optionList = [\n      { label: \'one\', value: \'1\' },\n      { label: \'two\', value: \'2\' },\n      { label: \'three\', value: \'3\' },\n      { label: \'four\', value: \'4\' },\n      { label: \'five\', value: \'5\' },\n    ];\n    return (\n      <div className="container">\n        <InputField\n          type="checkbox"\n          value={value}\n          options={optionList}\n          name="input-select"\n          label="label"\n          onChange={this.handleUpdateValue}\n        />\n      </div>\n    )\n  }\n}'
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
            ' Demo input type checkbox'
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
              this.renderCustomElementNotOption()
            ),
            _react2.default.createElement(
              'div',
              { className: 'D-6 M-12' },
              this.renderCustomElementHaveOption()
            )
          )
        )
      );
    }
  }]);

  return CheckboxInput;
}(_react.Component);

exports.default = CheckboxInput;