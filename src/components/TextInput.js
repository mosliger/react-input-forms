import React, { PropTypes } from 'react';
import { isEmpey, pick } from '../helpers/global';

export default class TextInput extends React.PureComponent {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    label: PropTypes.string,
    placeholder: PropTypes.string,
    children: PropTypes.node,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    inputProps: PropTypes.object,
    labelProps: PropTypes.object,
    disabled: PropTypes.bool,
    focus: PropTypes.bool,
    tabIndex: PropTypes.number,
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
    disabled: false,
    focus: false,
    placeholder: '',
    type: 'text',
  }

  renderCustomElement = () => {
    const { label, value, disabled, focus, placeholder, name, errorMessage, inputProps, tabIndex, handleChange, handleKeyCode, handleBlur } = this.props;
    let classInput = 'form-input';
    if (!isEmpey(errorMessage)) {
      classInput = 'form-input error';
    }
    const input = (<input
      ref={(input) => {
        if (input != null && focus) {
          input.focus();
        }
      } }
      className={classInput}
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onKeyUp={(e) => handleKeyCode(e)}
      onChange={(e) => handleChange(e.target.value)}
      onBlur={(e) => handleBlur(e.target.value)}
      />);
    return this.props.customElement(input, label, errorMessage);
  }

  render() {
    const { label, value, disabled, remark, focus, placeholder, name, errorMessage, inputProps, tabIndex, handleChange, handleKeyCode, handleBlur } = this.props;

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
        <input
          ref={(input) => {
            if (input != null && focus) {
              input.focus();
            }
          } }
          className={classInput}
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onKeyUp={(e) => handleKeyCode(e)}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={(e) => handleBlur(e.target.value)}
          />

        {renderErrorMessage}
        <div className="children">{this.props.children}</div>
      </div>
    );
  }
}
