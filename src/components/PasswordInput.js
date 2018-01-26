import React from 'react';
import PropTypes from 'prop-types'
import { isEmpey, pick } from '../helpers/global';

export default class PasswordInput extends React.PureComponent {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    label: PropTypes.string,
    placeholder: PropTypes.string,
    children: PropTypes.node,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    inputProps: PropTypes.object,
    labelProps: PropTypes.object,
    disabled: PropTypes.bool,
    focus: PropTypes.bool,
    tabIndex: PropTypes.number,
    maxLength: PropTypes.number,
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
    inputProps: {},
    labelProps: {},
    className: 'field-group',
    disabled: false,
    focus: false,
    placeholder: '',
    type: 'text',
  };

  renderCustomElement = () => {
    const {
      label,
      value,
      disabled,
      focus,
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
        type="password"
        name={name}
        value={value}
        maxLength={this.props.maxLength}
        placeholder={placeholder}
        disabled={disabled}
        onKeyUp={e => handleKeyCode(e)}
        onChange={e => handleChange(e.target.value)}
        onBlur={e => handleBlur(e.target.value)}
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
      errorMessage,
      inputProps,
      className,
      tabIndex,
      labelProps,
      handleChange,
      handleKeyCode,
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
        <div className={classInput}>
          <input
            {...inputProps}
            ref={input => {
              if (input != null && focus) {
                input.focus();
              }
            }}
            className="form-input"
            type="password"
            name={name}
            value={value}
            maxLength={this.props.maxLength}
            placeholder={placeholder}
            disabled={disabled}
            onKeyUp={e => handleKeyCode(e)}
            onChange={e => handleChange(e.target.value)}
            onBlur={e => handleBlur(e.target.value)}
          />
          {renderErrorMessage}
        </div>
        {this.props.children}
      </div>
    );
  }
}
