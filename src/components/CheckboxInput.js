import React, { PropTypes } from 'react';
import { isEmpey, pick } from '../helpers/global';

export default class CheckboxInput extends React.Component {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.array,
    ]),
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    inputProps: PropTypes.object,
    labelProps: PropTypes.object,
    disabled: PropTypes.bool,
    focus: PropTypes.bool,
    errorMessage: PropTypes.string,
    handleChange: PropTypes.func,
    handleBlur: PropTypes.func,
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

  shouldComponentUpdate(nextProps) {
    const keys = ['name', 'value', 'type', 'label', 'focus', 'disabled', 'errorMessage'];
    const checkProps = pick(keys, this.props);
    const checkNextProps = pick(keys, nextProps);
    return JSON.stringify(checkProps) !== JSON.stringify(checkNextProps);
  }

  handleChangeOptions = (optionDetail, key, checked) => {
    const { options, handleChange, value } = this.props;
    let setValue = [];
    if (checked) {
      setValue = [...value, { ...options[key], key: key, value: true }];
    } else {
      setValue = value.filter((option) => option.label !== optionDetail.label);
    }
    handleChange(setValue)
  }

  handleBlueOptions = (optionDetail, key, checked) => {
    const { handleBlur, value } = this.props;
    handleBlur(value)
  }

  handleChecked = (option, index) => {
    const  { value } = this.props;
    try {
      const filterValue = value.filter((optionDetail) => {
        const key = optionDetail.key ? optionDetail.key : index;
        return  option.label === optionDetail.label && key === index;
      });
      if (filterValue.length === 1) return true;
    } catch (e) {
      return false;
    }
    return false;
  }

  render() {
    const { label, value, disabled, focus, options, name, errorMessage, inputProps, handleChange, handleBlur } = this.props;
    let renderErrorMessage = '';
    let classInput = 'form-input';
    if (!isEmpey(errorMessage)) {
      classInput = 'form-input error';
      renderErrorMessage = (<div className="error-message">{errorMessage}</div>);
    }

    if (options.length > 0) {
      return (
        <div className={inputProps.className ? inputProps.className : 'field-group'}>
          {options.map((detail, index) => {
            const checked = this.handleChecked(detail, index);
            return (
              <div className="checkbox-list" key={`${name}-${index}`}>
                <div className="box-input">
                  <input
                    className={classInput}
                    type="checkbox"
                    name={name}
                    value={detail.value}
                    disabled={detail.disabled}
                    checked={checked}
                    onChange={() => this.handleChangeOptions(detail, index, !checked)}
                    onChange={() => this.handleChangeOptions(detail, index, !checked)}
                    onBlur={() => this.handleBlueOptions(detail, index, checked)}
                  />
                  <label className={`icon ${checked ? 'checked' : ''}`}></label>
                </div>
                <label htmlFor={label}>{detail.label}</label>
              </div>
            )
          })
          }
          {this.props.children}
          {renderErrorMessage}
        </div>
      );
    }

    return (
      <div className={inputProps.className ? inputProps.className : 'field-group'}>
        <div className="box-input">
          <input
            className={classInput}
            type="checkbox"
            name={name}
            disabled={disabled}
            checked={value}
            onClick={() => handleChange(!value)}
            onBlur={() => this.handleBlur(value)}
          />
          <label className={`icon ${value ? 'checked' : ''}`}></label>
        </div>
        <label htmlFor={label}>{label}</label>
        {this.props.children}
        {renderErrorMessage}
      </div>
    );
  }
}
