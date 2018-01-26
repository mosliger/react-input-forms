import React from 'react';
import PropTypes from 'prop-types'
import { size, isEmpey, toNumber, toNumeral, pick, checkNumberFormat } from '../helpers/global';

export default class NumberInput extends React.PureComponent {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    format: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    inputProps: PropTypes.object,
    labelProps: PropTypes.object,
    disabled: PropTypes.bool,
    focus: PropTypes.bool,
    errorMessage: PropTypes.string,
    remark: PropTypes.string,
    handleChange: PropTypes.func,
    maxLength: PropTypes.number,
    handleBlur: PropTypes.func,
    handleKeyCode: PropTypes.func,
  };

  static defaultProps = {
    name: 'input',
    format: '',
    tabIndex: 0,
    label: '',
    className: 'field-group',
    value: '',
    inputProps: {},
    labelProps: {},
    disabled: false,
    type: 'text',
  };

  componentDidMount() {
    const { value, format, handleBlur } = this.props;
    const numberValue = Number(toNumber(value));
    if (!isEmpey(value) && !isEmpey(format) && isFinite(toNumber(value)))
      handleBlur(this.getValueFormat(toNumeral(numberValue.toString(), format)));
  }

  getValueFormat = value => {
    const { format } = this.props;
    const valueTopNumber = toNumber(value);
    const splitFormat = format.split('.');
    const splitValue = valueTopNumber.split('.');
    const decimalFormat = splitFormat[1] ? splitFormat[1] : '';
    const decimalValue = splitValue[1] ? splitValue[1] : '';
    if (decimalFormat !== '' && decimalFormat.length !== decimalValue.length) {
      let decimal = decimalValue;
      for (let i = 1; i <= decimalFormat.length - decimalValue.length; i++) decimal += '0';
      return isEmpey(value) ? '' : `${splitValue[0]}.${decimal}`;
    } else {
      return valueTopNumber;
    }
  };

  onInputChange = value => {
    const { handleChange, format } = this.props;
    const valueToNumber = toNumber(value);
    const emptyValue = value === '';
    if (emptyValue) {
      handleChange(value);
    } else if (checkNumberFormat(valueToNumber, format)) {
      handleChange(valueToNumber);
    } else if (/^-?\d+(\.)?(\d+)?$/.test(value)) {
      handleChange(valueToNumber);
    } else if (size(valueToNumber) < size(this.props.value)) {
      handleChange(valueToNumber);
    }
  };

  handleOnBlur = value => {
    const { handleBlur } = this.props;
    if (handleBlur) handleBlur(this.getValueFormat(value));
  };

  renderCustomElement = () => {
    const {
      label,
      value,
      disabled,
      focus,
      format,
      placeholder,
      name,
      errorMessage,
      inputProps,
      tabIndex,
      handleChange,
      handleKeyCode,
      handleBlur,
    } = this.props;
    const input = (
      <input
        {...inputProps}
        ref={input => {
          if (input != null && focus) {
            input.focus();
          }
        }}
        className="form-input"
        type="text"
        name={name}
        value={!isEmpey(format) ? toNumeral(value, format) : value}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={this.props.maxLength}
        onKeyUp={e => handleKeyCode(e)}
        onChange={e => this.onInputChange(e.target.value)}
        onBlur={e => this.handleOnBlur(e.target.value)}
      />
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
      className,
      tabIndex,
      errorMessage,
      inputProps,
      labelProps,
      handleChange,
      handleKeyCode,
    } = this.props;

    if (this.props.customElement) {
      return this.renderCustomElement();
    }

    let renderErrorMessage = '';
    let classInput = 'wrap-form-input';
    if (!isEmpey(errorMessage)) {
      classInput = 'wrap-form-input error';
      renderErrorMessage = <div className="validation-label">{errorMessage}</div>;
    }

    return (
      <div className={className}>
        <label {...labelProps} htmlFor={label}>
          {label} {!isEmpey(remark) && <span className="remark">{remark}</span>}
        </label>
        <div className={classInput}>
          <input
            {...inputProps}
            ref={input => {
              if (input != null && focus) {
                input.focus();
              }
            }}
            className="form-input"
            type="text"
            name={name}
            value={!isEmpey(format) ? toNumeral(value, format) : value}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={this.props.maxLength}
            onKeyUp={e => handleKeyCode(e)}
            onChange={e => this.onInputChange(e.target.value)}
            onBlur={e => this.handleOnBlur(e.target.value)}
          />
          {renderErrorMessage}
        </div>

        {this.props.children}
      </div>
    );
  }
}
