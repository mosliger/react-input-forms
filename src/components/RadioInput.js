import React from 'react';
import PropTypes from 'prop-types'
import { isEmpey, pick } from '../helpers/global';

export default class RadioInput extends React.PureComponent {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array,
    inputProps: PropTypes.object,
    labelProps: PropTypes.object,
    disabled: PropTypes.bool,
    className: PropTypes.string,
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
    className: 'field-group-radio',
    label: '',
    value: '',
    options: [],
    inputProps: {},
    labelProps: {},
    disabled: false,
    focus: false,
    type: 'text',
  };

  renderCustomElement = () => {
    const {
      label,
      value,
      disabled,
      focus,
      options,
      name,
      errorMessage,
      inputProps,
      handleChange,
      handleBlur,
    } = this.props;
    const inputList = options.map((detail, index) => {
      const getValue = value.value ? value.value : value;
      const checked = getValue === detail.value;
      const input = (
        <input
          {...inputProps}
          className="form-input"
          type="radio"
          name={name}
          value={detail.value}
          disabled={disabled ? disabled : detail.disabled}
          checked={checked}
          onChange={() => handleChange(detail.value)}
          onBlur={e => handleBlur(detail.value)}
        />
      );
      return {
        input: input,
        ...detail,
      };
    });
    return this.props.customElement(inputList, label, errorMessage);
  };

  render() {
    const {
      label,
      value,
      disabled,
      remark,
      focus,
      options,
      name,
      className,
      errorMessage,
      inputProps,
      labelProps,
      handleChange,
      handleBlur,
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
        {options.map((detail, index) => {
          const getValue = value.value ? value.value : value;
          const checked = getValue === detail.value;
          return (
            <div className="radio-list" key={`${name}-${index}`}>
              <div className={classInput}>
                <input
                  {...inputProps}
                  className="form-input"
                  type="radio"
                  name={name}
                  value={detail.value}
                  disabled={disabled ? disabled : detail.disabled}
                  checked={checked}
                  onChange={() => handleChange(detail.value)}
                  onBlur={e => handleBlur(detail.value)}
                />
                <label className={`icon ${checked ? 'checked' : ''}`} />
              </div>
              <label htmlFor={label}>{detail.label}</label>
            </div>
          );
        })}
        {renderErrorMessage}
        <div className="children">{this.props.children}</div>
      </div>
    );
  }
}
