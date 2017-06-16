import React, { PropTypes } from 'react';
import { isEmpey, pick } from '../helpers/global';

export default class TextareaInput extends React.PureComponent {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    rows: PropTypes.number,
    cols: PropTypes.number,
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
    handleBlur: PropTypes.func,
    handleKeyCode: PropTypes.func,
  };

  static defaultProps = {
    name: 'input',
    rows: 3,
    cols: 4,
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
    const { label, value, disabled, focus, placeholder, name, rows, cols, tabIndex, errorMessage, inputProps, handleChange, handleKeyCode, handleBlur } = this.props;

    let classInput = 'form-input';
    if (!isEmpey(errorMessage)) {
      classInput = 'form-input error';
    }
    const input = (<textarea
      ref={(input) => {
        if (input != null && focus) {
          input.focus();
        }
      } }
      rows={rows}
      cols={cols}
      disabled={disabled}
      className={classInput}
      value={value}
      onKeyUp={(e) => handleKeyCode(e)}
      onChange={(e) => handleChange(e.target.value)}
      onBlur={(e) => handleBlur(e.target.value)}
      >
      {value}
    </textarea>);
    return this.props.customElement(input, label, errorMessage);
  }

  render() {
    const { label, value, disabled, focus, remark, placeholder, name, rows, cols, tabIndex, errorMessage, inputProps, handleChange, handleKeyCode, handleBlur } = this.props;

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
        <textarea
          ref={(input) => {
            if (input != null && focus) {
              input.focus();
            }
          } }
          rows={rows}
          cols={cols}
          disabled={disabled}
          className={classInput}
          value={value}
          onKeyUp={(e) => handleKeyCode(e)}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={(e) => handleBlur(e.target.value)}
          >
          {value}
        </textarea>
        {this.props.children}
        {renderErrorMessage}
      </div>
    );
  }
}
