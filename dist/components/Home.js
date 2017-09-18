'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInputForms = require('react-input-forms');

var _reactInputForms2 = _interopRequireDefault(_reactInputForms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import InputField from '../../src';

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      textInput: '',
      numberInput: '',
      selectInput: '',
      password: '',
      textarea: '',
      customInput: '',
      checkboxInput: [],
      radioInput: {},
      customerInput: '',
      textInputCustomElement: '',
      checkboxInputNotOption: false,
      disabledOption: false
    }, _this.handleUpdateValue = function (value, name, error) {
      _this.setState(_defineProperty({}, name, value));
    }, _this.handleOnBlur = function (value, name, error) {
      _this.setState(_defineProperty({}, name, value));
    }, _this.handleDisabledOption = function () {
      var disabledOption = _this.state.disabledOption;

      _this.setState({ disabledOption: !disabledOption });
    }, _this.getKeyCode = function (keyCode, value, name, e) {
      // console.log('getKeyCode >>', keyCode, value, name, e)    
    }, _this.onPropsChange = function (value, name, error) {
      // console.log('onPropsChange >>', value, name, error)  
    }, _this.clearForms = function () {
      _this.setState({
        textInput: '',
        numberInput: '',
        selectInput: '',
        textarea: '',
        customInput: '',
        checkboxInput: [],
        radioInput: {},
        customerInput: '',
        textInputCustomElement: '',
        checkboxInputNotOption: false
      });
    }, _this.customElementText = function (input, label, errorMessage) {
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
    }, _this.customElement = function (rules) {
      var _React$createElement;

      var _this$state = _this.state,
          textInputCustomElement = _this$state.textInputCustomElement,
          customerInput = _this$state.customerInput;

      var optionList = [{ label: 'select ...', value: '', disabled: true }, { label: 'one', value: '1' }, { label: 'two', value: '2', disabled: true }, { label: 'three', value: '3' }, { label: 'four', value: '4', disabled: true }, { label: 'five', value: '5' }];

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Custom Element'
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'D-6 M-12' },
            _react2.default.createElement(
              'h2',
              null,
              'Text Input'
            ),
            _react2.default.createElement(_reactInputForms2.default, (_React$createElement = {
              type: 'text',
              customElement: _this.customElementText,
              onPropsChange: _this.onPropsChange,
              onKeyCode: _this.getKeyCode,
              value: textInputCustomElement,
              rules: rules
            }, _defineProperty(_React$createElement, 'type', 'text'), _defineProperty(_React$createElement, 'key', 'textInputCustomElement'), _defineProperty(_React$createElement, 'name', 'textInputCustomElement'), _defineProperty(_React$createElement, 'label', 'Text Input Custom Element'), _defineProperty(_React$createElement, 'onChange', _this.handleUpdateValue), _defineProperty(_React$createElement, 'onBlur', _this.handleOnBlur), _React$createElement))
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          textInput = _state.textInput,
          password = _state.password,
          customerInput = _state.customerInput,
          numberInput = _state.numberInput,
          selectInput = _state.selectInput,
          disabledOption = _state.disabledOption,
          textarea = _state.textarea,
          customInput = _state.customInput,
          checkboxInput = _state.checkboxInput,
          radioInput = _state.radioInput,
          checkboxInputNotOption = _state.checkboxInputNotOption;

      var optionList = [{ label: 'select ...', value: '' }, { label: 'one', value: '1' }, { label: 'two', value: '2' }, { label: 'three', value: '3' }, { label: 'four', value: '4' }, { label: 'five', value: '5' }];
      var rules = { required: 'input is require.' };
      if (disabledOption) optionList = [{ label: 'select ...', value: '', disabled: true }, { label: 'one', value: '1' }, { label: 'two', value: '2', disabled: true }, { label: 'three', value: '3' }, { label: 'four', value: '4', disabled: true }, { label: 'five', value: '5' }];
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'D-6 M-12' },
            _react2.default.createElement(
              'h2',
              null,
              'Text Input'
            ),
            _react2.default.createElement(_reactInputForms2.default, { type: 'text', remark: '*', onPropsChange: this.onPropsChange, onKeyCode: this.getKeyCode, value: textInput, rules: rules, key: 'textInput', name: 'textInput', label: 'label Text Input', onChange: this.handleUpdateValue, onBlur: this.handleOnBlur })
          ),
          _react2.default.createElement(
            'div',
            { className: 'D-6 M-12' },
            _react2.default.createElement(
              'h2',
              null,
              'Number Input'
            ),
            _react2.default.createElement(_reactInputForms2.default, { type: 'number', onPropsChange: this.onPropsChange, onKeyCode: this.getKeyCode, value: numberInput, rules: _extends({}, rules, { number: 'กรุณากรอกตัวเลย' }), key: 'numberInput', format: '0,000.00', name: 'numberInput', label: 'label Number Input', onChange: this.handleUpdateValue, onBlur: this.handleOnBlur })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'D-6 M-12' },
            _react2.default.createElement(
              'h2',
              null,
              'Password'
            ),
            _react2.default.createElement(_reactInputForms2.default, { type: 'password', placeholder: 'password ...', onPropsChange: this.onPropsChange, rules: rules, value: password, key: 'password', name: 'password', label: 'Password', onChange: this.handleUpdateValue })
          ),
          _react2.default.createElement(
            'div',
            { className: 'D-6 M-12' },
            _react2.default.createElement(
              'h2',
              null,
              'Select'
            ),
            _react2.default.createElement(_reactInputForms2.default, { type: 'select', onPropsChange: this.onPropsChange, onKeyCode: this.getKeyCode, rules: rules, value: selectInput, key: 'selectInput', name: 'selectInput', label: 'label Select', options: optionList, onChange: this.handleUpdateValue })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'D-6 M-12' },
            _react2.default.createElement(
              'h2',
              null,
              'Textarea'
            ),
            _react2.default.createElement(_reactInputForms2.default, { type: 'textarea', onPropsChange: this.onPropsChange, onKeyCode: this.getKeyCode, rules: rules, value: textarea, key: 'textarea', name: 'textarea', label: 'label Textarea', rows: 3, cols: 4, onBlur: this.handleOnBlur, onChange: this.handleUpdateValue })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'D-6 M-12' },
            _react2.default.createElement(
              'h2',
              null,
              'Checkbox'
            ),
            _react2.default.createElement(_reactInputForms2.default, { type: 'checkbox', onPropsChange: this.onPropsChange, value: checkboxInput, key: 'checkboxInput', name: 'checkboxInput', label: 'label Checkbox', options: optionList, onChange: this.handleUpdateValue })
          ),
          _react2.default.createElement(
            'div',
            { className: 'D-6 M-12' },
            _react2.default.createElement(
              'h2',
              null,
              'Radio'
            ),
            _react2.default.createElement(_reactInputForms2.default, { type: 'radio', onPropsChange: this.onPropsChange, value: radioInput, key: 'radioInput', name: 'radioInput', label: 'label radio', options: optionList, onChange: this.handleUpdateValue })
          )
        ),
        this.customElement(rules),
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.handleDisabledOption();
            } },
          !disabledOption ? 'Disabled option' : 'Enable option'
        ),
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.clearForms();
            } },
          'Clear Forms'
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;