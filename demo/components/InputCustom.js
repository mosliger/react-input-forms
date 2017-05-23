import React from 'react';

export default class InputCustom extends React.Component {
  render() {
    const {
      label,
      value,
      disabled,
      focus,
      placeholder,
      name,
      errorMessage,
      inputProps,
      handleChange,
    } = this.props;
    return (
      <div>
        <label htmlFor={label}>{label}</label>
        <input
          ref={(input) => {
            if (input != null && focus) {
              input.focus();
            }
          }}
          className="form-input"
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => handleChange(e.target.value)}
        />
        <div className="error-message">{errorMessage}</div>

      </div>
    );
  }
}
