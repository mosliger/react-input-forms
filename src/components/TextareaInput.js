import React, { PropTypes } from 'react';
import { isEmpey, pick } from '../helpers/global';

export default class TextareaInput extends React.Component {
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

  shouldComponentUpdate(nextProps) {
    const keys = ['name', 'value', 'type', 'label', 'rows', 'cols', 'focus', 'disabled', 'errorMessage', 'placeholder'];
    const checkProps = pick(keys, this.props);
    const checkNextProps = pick(keys, nextProps);
    return JSON.stringify(checkProps) !== JSON.stringify(checkNextProps);
  }

  render() {
    const { label, value, disabled, focus, placeholder, name, rows, cols, tabIndex, errorMessage, inputProps, handleChange, handleKeyCode, handleBlur } = this.props;
    let renderErrorMessage = '';
    let classInput = 'form-input';
    if (!isEmpey(errorMessage)) {
      classInput = 'form-input error';
      renderErrorMessage = (<div className="error-message">{errorMessage}</div>);
    }

    return (
      <div className={inputProps.className ? inputProps.className : 'field-group'}>
        <label htmlFor={label}>{label}</label>
        <textarea
          ref={(input) => {
            if (input != null && focus) {
              input.focus();
            }
          }}
          rows={rows}
          cols={cols}
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
