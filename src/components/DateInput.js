import React from 'react';
import PropTypes from 'prop-types'
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
    hoverDate: false,
    focusState: false,
  };

  handleFocus = () => {
    this.setState({ open: true, focusState: true });
  };

  handleInputChange = value => {
    const { handleChange } = this.props;
    handleChange(value);
  };

  handleBlurInput = value => {
    const { handleBlur } = this.props;
    this.setState({ focusState: false });
    if (handleBlur) handleBlur(value);
    this.handleCloseDate();
  };

  handleCloseDate = () => {
    const { hoverDate } = this.state;
    if (!hoverDate) this.setState({ open: false, focusState: false, hoverDate: false });
  };

  handleSelectDate = value => {
    const { handleChange, format } = this.props;
    handleChange(value.format(format));
    this.handleCloseDate();
  };

  handleClickDate = () => {
    this.setState({ focusState: true });
  };

  handleHoverDate = status => {
    this.setState({ hoverDate: status });
  };

  render() {
    const { open, focusState } = this.state;
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
              if (input != null && (focus || focusState)) {
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
          <span
            onClick={this.handleClickDate}
            onMouseOver={() => this.handleHoverDate(true)}
            onMouseOut={() => this.handleHoverDate(false)}
          >
            <DateTime
              dateFormat={format}
              value={value}
              timeFormat={false}
              open={open}
              input={false}
              onChange={this.handleSelectDate}
            />
          </span>
        </div>

        {this.props.children}
      </div>
    );
  }
}
