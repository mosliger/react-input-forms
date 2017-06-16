import React, { PropTypes } from 'react';
import { isEmpey, pick } from '../helpers/global';

export default class RadioInput extends React.PureComponent {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.object,
    ]),
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array,
    inputProps: PropTypes.object,
    labelProps: PropTypes.object,
    disabled: PropTypes.bool,
    focus: PropTypes.bool,
    errorMessage: PropTypes.string,
    remark: PropTypes.string,
    handleChange: PropTypes.func,
    handleBlur: PropTypes.func,
    handleKeyCode: PropTypes.func,
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
    type: 'text',
  }

  renderCustomElement = () => {
    const { label, value, disabled, focus, options, name, errorMessage, inputProps, handleChange, handleBlur } = this.props;

    let classInput = 'form-input';
    if (!isEmpey(errorMessage)) {
      classInput = 'form-input error';
    }
    const inputList = options.map((detail, index) => {
      const getValue = value.value ? value.value : value;
      const checked = getValue === detail.value;
      const input = (
        <input
          className={classInput}
          type="radio"
          name={name}
          value={detail.value}
          disabled={disabled ? disabled : detail.disabled}
          checked={checked}
          onChange={() => handleChange(detail.value)}
          onBlur={(e) => handleBlur(detail.value)}
          />
      )
      return ({
        input: input,
        ...detail
      })
    });
    return this.props.customElement(inputList, label, errorMessage);
  }

  render() {
    const { label, value, disabled, remark, focus, options, name, errorMessage, inputProps, handleChange, handleBlur } = this.props;

    if (this.props.customElement) {
      return this.renderCustomElement();
    }

    let renderErrorMessage = '';
    let classInput = 'form-input';
    if (!isEmpey(errorMessage)) {
      classInput = 'form-input error';
      renderErrorMessage = (<div className="error-message">{errorMessage}</div>);
    }
    return (
      <div className={inputProps.className ? inputProps.className : 'field-group'}>
        <label htmlFor={label}>{label} {!isEmpey(remark) && (<span className="remark">{remark}</span>)}</label>
        {options.map((detail, index) => {
          const getValue = value.value ? value.value : value;
          const checked = getValue === detail.value;
          return (
            <div className="radio-list" key={`${name}-${index}`}>
              <div className="box-input">
                <input
                  className={classInput}
                  type="radio"
                  name={name}
                  value={detail.value}
                  disabled={disabled ? disabled : detail.disabled}
                  checked={checked}
                  onChange={() => handleChange(detail.value)}
                  onBlur={(e) => handleBlur(detail.value)}
                  />
                <label className={`icon ${checked ? 'checked' : ''}`}></label>
              </div>
              <label htmlFor={label}>{detail.label}</label>
            </div>
          )
        })
        }
        {renderErrorMessage}
        <div className="children">{this.props.children}</div>
      </div>
    );
  }
}
