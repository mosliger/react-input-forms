import React, { PropTypes } from 'react';
import { isEmpey, pick } from '../helpers/global';

export default class CheckboxInput extends React.PureComponent {
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
    remark: PropTypes.string,
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

  handleChangeOptions = (optionDetail, key, checked) => {
    const { options, handleChange, value } = this.props;
    let setValue = [];
    if (checked) {
      const getOptions = options.filter((obj) => {
        const getValue = value.find((item) => {
          if (item.value) return obj.value === item.value;
            return obj.value === item;
        })
        if (getValue) return true;
        return false;
      })
      setValue = [...getOptions, optionDetail];
    } else {
      const getOptions = options.filter((obj) => {
        const getValue = value.find((item) => {
          if (item.value) return obj.value === item.value;
            return obj.value === item;
        })
        if (getValue) return true;
        return false;
      })
      
      setValue = getOptions.filter((item) => {
        if(item.value) return item.value !== optionDetail.value;
        return item !== optionDetail.value;
      });
    }
    handleChange(setValue)
  }

  handleBlueOptions = (optionDetail, key, checked) => {
    const { handleBlur, value } = this.props;
    handleBlur(value)
  }

  handleChecked = (option, index) => {
    const { value } = this.props;
    try {
      const filterValue = value.find((optionDetail) => {
        if (optionDetail.label) return option.value === optionDetail.value
        return optionDetail === option.value
      });
      if (filterValue) return true;
    } catch (e) {
      return false;
    }
    return false;
  }

  renderCustomElement = () => {
    const { label, value, disabled, focus, options, name, errorMessage, inputProps, handleChange, handleBlur } = this.props;

    let classInput = 'form-input';
    if (!isEmpey(errorMessage)) {
      classInput = 'form-input error';
    }
    if (options.length > 0) {
      const inputList = options.map((detail, index) => {
        const checked = this.handleChecked(detail, index);
        const input = (
          <input
            className={classInput}
            type="checkbox"
            name={name}
            value={detail.value}
            disabled={disabled ? disabled : detail.disabled}
            checked={checked}
            onChange={() => this.handleChangeOptions(detail, index, !checked)}
            onBlur={() => this.handleBlueOptions(detail, index, checked)}
          />
        )
        return ({
          input: input,
          checked,
          ...detail
        })
      });
      return this.props.customElement(inputList, label, errorMessage);
    }
    const inputCheckbox = (
      <input
        className={classInput}
        type="checkbox"
        name={name}
        disabled={disabled}
        checked={value}
        onClick={() => handleChange(!value)}
        onBlur={() => handleBlur(value)}
        />
    )
    return this.props.customElement(inputCheckbox, label, errorMessage);

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

    if (options.length > 0) {
      return (
        <div className={inputProps.className ? inputProps.className : 'field-group'}>
          <label htmlFor={label}>{label} {!isEmpey(remark) && (<span className="remark">{remark}</span>)}</label>
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
                    disabled={disabled ? disabled : detail.disabled}
                    checked={checked}
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
            onBlur={() => handleBlur(value)}
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
