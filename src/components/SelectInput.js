import React, { PropTypes } from 'react';
import { isEmpey, getOption, pick } from '../helpers/global';


export default class SelectInput extends React.Component {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    format: PropTypes.bool,
    label: PropTypes.string,
    options: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    inputProps: PropTypes.object,
    labelProps: PropTypes.object,
    disabled: PropTypes.bool,
    focus: PropTypes.bool,
    errorMessage: PropTypes.string,
    handleChange: PropTypes.func,
  };

  static defaultProps = {
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
    type: 'text',
  }

  shouldComponentUpdate(nextProps) {
    const keys = ['name', 'value', 'type', 'label', 'options', 'focus', 'disabled', 'errorMessage', 'placeholder', 'inputProps', 'labelProps'];
    const checkProps = pick(keys, this.props);
    const checkNextProps = pick(keys, nextProps);
    return JSON.stringify(checkProps) !== JSON.stringify(checkNextProps);
  }

  handleSelectChange = (e) => {
    const { options, handleChange } = this.props;
    const value = e.target.value;
    handleChange(getOption(value, options));
  }

  render() {
    const { label, value, disabled, focus, placeholder, name, format, errorMessage, options, inputProps, tabIndex, handleBlur } = this.props;
    const renderOptions = [];
    let renderErrorMessage = '';
    let classInput = 'form-input';
    let valueString = '';

    if (typeof value === 'string') {
      valueString = value;
    } else {
      valueString = value.value ? value.value : '';
    }
    if (!isEmpey(errorMessage)) {
      classInput = 'form-input error';
      renderErrorMessage = (<div className="error-message">{errorMessage}</div>);
    }

    for (var key in options) {
      renderOptions.push((<option value={options[key].value} key={`${key}-${options[key].value}`}>{options[key].label}</option>));
    }

    return (
      <div className={inputProps.className ? inputProps.className : 'field-group'}>
        <label htmlFor={label}>{label}</label>
        <select
          className={classInput}
          value={valueString}
          onChange={e => this.handleSelectChange(e)}
          onBlur={(e) => handleBlur(e.target.value)}
          disabled={disabled}
        >
          {renderOptions}
        </select>
        {this.props.children}
        {renderErrorMessage}
      </div>
    );
  }
}
