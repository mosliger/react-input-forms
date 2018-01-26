import React from 'react';
import PropTypes from 'prop-types'
import { isEmpey, getOption, pick } from '../helpers/global';

export default class SelectInput extends React.PureComponent {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    format: PropTypes.bool,
    label: PropTypes.string,
    options: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    inputProps: PropTypes.object,
    labelProps: PropTypes.object,
    disabled: PropTypes.bool,
    focus: PropTypes.bool,
    className: PropTypes.string,
    errorMessage: PropTypes.string,
    remark: PropTypes.string,
    handleChange: PropTypes.func,
  };

  static defaultProps = {
    name: 'input',
    tabIndex: 0,
    label: '',
    value: '',
    className: 'field-group',
    options: [],
    inputProps: {},
    labelProps: {},
    disabled: false,
    focus: false,
    placeholder: '',
    type: 'text',
  };

  handleSelectChange = e => {
    const { options, handleChange } = this.props;
    const value = e.target.value;
    handleChange(getOption(value, options));
  };

  renderCustomElement = () => {
    const {
      label,
      value,
      disabled,
      focus,
      placeholder,
      name,
      format,
      errorMessage,
      options,
      inputProps,
      tabIndex,
      handleBlur,
      handleKeyCode,
    } = this.props;

    const renderOptions = [];
    let renderErrorMessage = '';
    let valueString = '';

    if (typeof value === 'string') {
      valueString = value;
    } else {
      valueString = value.value ? value.value : '';
    }

    for (var key in options) {
      renderOptions.push(
        <option value={options[key].value} key={`${key}-${options[key].value}`}>
          {options[key].label}
        </option>,
      );
    }

    const input = (
      <select
        {...inputProps}
        ref={input => {
          if (input != null && focus) {
            input.focus();
          }
        }}
        className="form-input"
        value={valueString}
        onChange={e => this.handleSelectChange(e)}
        onBlur={e => handleBlur(e.target.value)}
        onKeyUp={e => handleKeyCode(e)}
        disabled={disabled}
      >
        {renderOptions}
      </select>
    );
    return this.props.customElement(input, label, errorMessage);
  };

  render() {
    const {
      label,
      value,
      disabled,
      remark,
      focus,
      placeholder,
      name,
      format,
      errorMessage,
      className,
      options,
      inputProps,
      tabIndex,
      labelProps,
      handleBlur,
      handleKeyCode,
    } = this.props;

    if (this.props.customElement) {
      return this.renderCustomElement();
    }

    const renderOptions = [];
    let valueString = '';

    if (typeof value === 'string') {
      valueString = value;
    } else {
      valueString = value.value ? value.value : '';
    }

    let renderErrorMessage = '';
    let classInput = 'wrap-form-input';
    if (!isEmpey(errorMessage)) {
      classInput = 'wrap-form-input error';
      renderErrorMessage = <div className="validation-label">{errorMessage}</div>;
    }

    for (var key in options) {
      renderOptions.push(
        <option value={options[key].value} key={`${key}-${options[key].value}`}>
          {options[key].label}
        </option>,
      );
    }

    return (
      <div className={className}>
        <label {...labelProps} htmlFor={label}>
          {label} {!isEmpey(remark) && <span className="remark">{remark}</span>}
        </label>
        <div className={classInput}>
          <select
            {...inputProps}
            ref={input => {
              if (input != null && focus) {
                input.focus();
              }
            }}
            className="form-input"
            value={valueString}
            onChange={e => this.handleSelectChange(e)}
            onBlur={e => handleBlur(e.target.value)}
            onKeyUp={e => handleKeyCode(e)}
            disabled={disabled}
          >
            {renderOptions}
          </select>
          {renderErrorMessage}
        </div>
        {this.props.children}
      </div>
    );
  }
}
