'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderRowOption = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _global = require('../helpers/global');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectFilterInput = function (_React$PureComponent) {
  _inherits(SelectFilterInput, _React$PureComponent);

  function SelectFilterInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectFilterInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectFilterInput.__proto__ || Object.getPrototypeOf(SelectFilterInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      valueSelected: 0,
      optionFilter: [],
      showDropdown: false,
      hoverDropdown: false,
      scrollTop: 0
    }, _this.onInputKeyUp = function (e) {
      var _this$state = _this.state,
          optionFilter = _this$state.optionFilter,
          valueSelected = _this$state.valueSelected;
      var optionHeight = _this.props.optionHeight;

      var scrollTop = _this.state.scrollTop;
      // กดขึ้น = 38
      // กดลง = 40
      // enter = 13
      var keyCode = e.keyCode;

      switch (keyCode) {
        case 38:
          {
            if (optionHeight) {
              scrollTop -= optionHeight;
              if (scrollTop < 0) scrollTop = 0;
              _this.isDropdown.scrollTop = scrollTop;
            }
            _this.setState({
              scrollTop: scrollTop,
              valueSelected: valueSelected - 1 < 0 ? 0 : valueSelected - 1 });
            break;
          }
        case 40:
          {
            if (optionHeight) {
              scrollTop += optionHeight;
              if (scrollTop > ((0, _global.size)(optionFilter) - 3) * 30) scrollTop = ((0, _global.size)(optionFilter) - 3) * 30;
              _this.isDropdown.scrollTop = scrollTop;
            }

            _this.setState({
              scrollTop: scrollTop,
              valueSelected: valueSelected + 1 > (0, _global.size)(optionFilter) - 1 ? (0, _global.size)(optionFilter) - 1 : valueSelected + 1 });

            break;
          }
        case 13:
          {
            // value input not null
            var optionSelect = optionFilter.find(function (obj, i) {
              return i === valueSelected;
            });
            _this.hendleSelect(optionSelect);
            break;
          }
        default:
          break;
      }
    }, _this.onInputBlur = function () {
      var hoverDropdown = _this.state.hoverDropdown;

      if (!hoverDropdown) {
        _this.setState({
          valueSelected: 0,
          optionFilter: [],
          showDropdown: false,
          scrollTop: 0
        });
        _this.isInputFilter.value = '';
      }
    }, _this.onMouseOverDropdown = function () {
      _this.setState({
        hoverDropdown: true
      });
    }, _this.onMouseOutDropdown = function () {
      _this.setState({
        hoverDropdown: false
      });
    }, _this.focusInputFilter = function () {
      _this.onInputChange(_this.isInputFilter.value);
    }, _this.filterOptions = function (value) {
      var options = _this.props.options;

      return options.filter(function (item) {
        return item.label.indexOf(value) >= 0;
      });
    }, _this.onInputChange = function (value) {
      var filterOptions = _this.filterOptions(value);
      _this.setState({
        optionFilter: filterOptions ? filterOptions : [],
        valueSelected: 0,
        scrollTop: 0,
        showDropdown: true
      });
    }, _this.handleHoverOpction = function (id) {
      _this.setState({ valueSelected: id });
    }, _this.hendleSelect = function (obj) {
      _this.props.handleChange(obj);
      _this.setState({
        showDropdown: false,
        hoverDropdown: false,
        scrollTop: 0
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectFilterInput, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var options = this.props.options;

      this.setState({
        valueSelected: 0,
        optionFilter: options
      });
    }
  }, {
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
          options = _props.options,
          inputProps = _props.inputProps,
          tabIndex = _props.tabIndex,
          handleBlur = _props.handleBlur,
          handleKeyCode = _props.handleKeyCode;
      var _state = this.state,
          optionFilter = _state.optionFilter,
          valueSelected = _state.valueSelected,
          showDropdown = _state.showDropdown,
          scrollTop = _state.scrollTop;

      var valueString = '';

      if (typeof value === 'string') {
        valueString = value;
      } else {
        valueString = value.value ? value.label : '';
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
        { className: 'select-filter' },
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
        _react2.default.createElement(
          'div',
          { className: 'field-group' },
          _react2.default.createElement('input', { type: 'text', value: valueString, placeholder: placeholder, className: classInput, onFocus: function onFocus() {
              return _this2.focusInputFilter();
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'list-options-select ' + (showDropdown ? 'show' : ''), ref: function ref(dom) {
              return _this2.isDropdown = dom;
            } },
          _react2.default.createElement(
            'div',
            { className: 'field-group-input' },
            _react2.default.createElement('input', {
              ref: function ref(input) {
                _this2.isInputFilter = input;
                if (input && showDropdown) {
                  input.focus();
                }
              },
              type: 'text',
              className: 'input-filter',
              disabled: disabled,
              onChange: function onChange(e) {
                return _this2.onInputChange(e.target.value);
              },
              onKeyUp: function onKeyUp(e) {
                return _this2.onInputKeyUp(e);
              },
              onBlur: this.onInputBlur
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'box-select', onMouseOver: this.onMouseOverDropdown, onMouseOut: this.onMouseOutDropdown },
            _react2.default.createElement(
              'ul',
              { className: 'list-items' },
              optionFilter.map(function (obj, i) {
                var selected = i === valueSelected;
                return _react2.default.createElement(RenderRowOption, {
                  key: i,
                  selected: selected,
                  handleHoverOpction: _this2.handleHoverOpction,
                  handleChenge: _this2.hendleSelect,
                  detail: obj,
                  index: i
                });
              })
            )
          )
        ),
        this.props.children,
        renderErrorMessage
      );
    }
  }]);

  return SelectFilterInput;
}(_react2.default.PureComponent);

SelectFilterInput.propTypes = {
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
  errorMessage: _react.PropTypes.string,
  remark: _react.PropTypes.string,
  optionHeight: _react.PropTypes.number,
  handleChange: _react.PropTypes.func
};
SelectFilterInput.defaultProps = {
  name: 'input',
  tabIndex: 0,
  label: '',
  value: '',
  options: [],
  inputProps: {},
  labelProps: {},
  disabled: false,
  focus: false,
  placeholder: '',
  type: 'text'
};
exports.default = SelectFilterInput;

var RenderRowOption = exports.RenderRowOption = function (_React$PureComponent2) {
  _inherits(RenderRowOption, _React$PureComponent2);

  function RenderRowOption() {
    _classCallCheck(this, RenderRowOption);

    return _possibleConstructorReturn(this, (RenderRowOption.__proto__ || Object.getPrototypeOf(RenderRowOption)).apply(this, arguments));
  }

  _createClass(RenderRowOption, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          selected = _props2.selected,
          index = _props2.index,
          handleHoverOpction = _props2.handleHoverOpction,
          handleChenge = _props2.handleChenge,
          detail = _props2.detail;

      return _react2.default.createElement(
        'li',
        { className: 'item-detail ' + (selected ? 'selected' : '') },
        _react2.default.createElement(
          'a',
          { href: 'Javascript:;', onMouseOver: function onMouseOver() {
              return handleHoverOpction(index);
            }, onClick: function onClick() {
              return handleChenge(detail);
            } },
          _react2.default.createElement(
            'span',
            { className: 'sreach-by' },
            detail.label
          )
        )
      );
    }
  }]);

  return RenderRowOption;
}(_react2.default.PureComponent);