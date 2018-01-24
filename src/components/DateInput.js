import React, { PropTypes } from 'react';
import { isEmpey, pick } from '../helpers/global';
import DateTime from 'react-datetime';

export default class DateInput extends React.PureComponent {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    format: PropTypes.string,
    children: PropTypes.node,
    type: PropTypes.string.isRequired,
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
    className: 'field-group',
    format: 'DD/MM/YYYY',
    label: '',
    value: '',
    inputProps: {},
    labelProps: {},
    disabled: false,
    focus: false,
    placeholder: '',
    type: 'text',
  };

  state = {
    open: false,
  };

  handleFocus = () => {
    this.setState({ open: true });
  };

  handleInputChange = value => {
    const { handleChange } = this.props;

    handleChange(value);
  };

  handleBlurInput = value => {
    const { handleBlur } = this.props;
    setTimeout(() => {
      this.setState({ open: false });
    }, 100);
    if (handleBlur) handleBlur(value);
  };

  handleSelectDate = value => {
    const { handleChange, format } = this.props;
    this.setState({ open: false });
    handleChange(value.format(format));
  };

  render() {
    const { open } = this.state;
    const {
      label,
      className,
      value,
      disabled,
      remark,
      focus,
      placeholder,
      name,
      errorMessage,
      tabIndex,
      handleKeyCode,
      labelProps,
      inputProps,
      format,
    } = this.props;

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
            value={value}
            maxLength={this.props.maxLength}
            placeholder={placeholder}
            disabled={disabled}
            onKeyUp={e => handleKeyCode(e)}
            onChange={e => this.handleInputChange(e.target.value)}
            onBlur={e => this.handleBlurInput(e.target.value)}
            onFocus={this.handleFocus}
          />
          {renderErrorMessage}
          <DateTime
            dateFormat={format}
            value={value}
            timeFormat={false}
            open={open}
            input={false}
            onChange={this.handleSelectDate}
          />
        </div>

        {this.props.children}
      </div>
    );
  }
}
