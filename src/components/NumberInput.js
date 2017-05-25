import React, { PropTypes } from 'react';
import { size, isEmpey, toNumber, toNumeral, pick, checkNumberFormat } from '../helpers/global';

export default class NumberInput extends React.Component {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    format: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    inputProps: PropTypes.object,
    labelProps: PropTypes.object,
    disabled: PropTypes.bool,
    focus: PropTypes.bool,
    errorMessage: PropTypes.string,
    handleChange: PropTypes.func,
    handleBlur: PropTypes.func,
    handleKeyCode: PropTypes.func,
  };

  static defaultProps = {
    name: 'input',
    format: '',
    tabIndex: 0,
    label: '',
    value: '',
    inputProps: {},
    labelProps: {},
    disabled: false,
    type: 'text',
  }

  state = {
    editValue: true,
  }

  componentDidMount () {
    const { value, format, handleBlur } = this.props;
    const numberValue = Number(toNumber(value));
    if (!isEmpey(value) && !isEmpey(format) && isFinite(toNumber(value))) handleBlur(this.getValueFormat(toNumeral(numberValue.toString(), format)))
  }

  shouldComponentUpdate(nextProps) {
    const keys = ['name', 'value', 'type', 'label', 'format', 'focus', 'disabled', 'errorMessage', 'placeholder'];
    const checkProps = pick(keys, this.props);
    const checkNextProps = pick(keys, nextProps);
    return true;
    return JSON.stringify(checkProps) !== JSON.stringify(checkNextProps);
  }

  getValueFormat = (value) => {
    const { format } = this.props;
    const valueTopNumber = toNumber(value);
    const splitFormat = format.split('.');
    const splitValue = valueTopNumber.split('.');
    const decimalFormat = splitFormat[1] ? splitFormat[1] : '';
    const decimalValue = splitValue[1] ? splitValue[1] : '';
    if (decimalFormat !== '' && decimalFormat.length !== decimalValue.length) {
      let decimal = decimalValue;
      for (let i = 1; i <= (decimalFormat.length - decimalValue.length); i++) decimal += '0';
      return isEmpey(value) ? '' : `${splitValue[0]}.${decimal}`;
    } else {      
      return valueTopNumber;  
    }  
  }
  
  onInputChange = (value) => {
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
  }

  handleOnBlur = (value) => {
    const { handleBlur } = this.props;
    if (handleBlur) handleBlur(this.getValueFormat(value));
  }

  render() {
    const { label, value, disabled, focus, placeholder, name, format, tabIndex, errorMessage, inputProps, handleChange, handleKeyCode } = this.props;
    const { editValue } = this.state;
    let renderErrorMessage = '';
    let classInput = 'form-input';
    if (!isEmpey(errorMessage)) {
      classInput = 'form-input error';
      renderErrorMessage = (<div className="error-message">{errorMessage}</div>);
    }

    return (
      <div className={inputProps.className ? inputProps.className : 'field-group'}>
        <label htmlFor={label}>{label}</label>
        <input
          ref={(input) => {
            if (input != null && focus) {
              input.focus();
            }
          }}
          className={classInput}
          type="text"
          name={name}
          value={!isEmpey(format) ? toNumeral(value, format) : value}
          placeholder={placeholder}
          disabled={disabled}
          onKeyUp={(e) => handleKeyCode(e)}
          onChange={(e) => this.onInputChange(e.target.value)}
          onBlur={(e) => this.handleOnBlur(e.target.value)}
        />
        {this.props.children}
        {renderErrorMessage}
      </div>
    );
  }
}
