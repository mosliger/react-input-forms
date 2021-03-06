import React from 'react';
import PropTypes from 'prop-types'
import { isEmpey, verifyField, pick, remove } from './helpers/global';
import {
  NumberInput,
  SelectInput,
  TextareaInput,
  TextInput,
  CheckboxInput,
  RadioInput,
  PasswordInput,
  DateInput,
} from './components';

export default class Index extends React.Component {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.object,
      PropTypes.bool,
      PropTypes.array,
    ]),
    format: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),

    rows: PropTypes.number,
    cols: PropTypes.number,
    tabIndex: PropTypes.number,
    maxLength: PropTypes.number,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,

    children: PropTypes.string,
    remark: PropTypes.string,

    options: PropTypes.array,

    inputProps: PropTypes.object,
    labelProps: PropTypes.object,
    rules: PropTypes.object,
    children: PropTypes.node,

    disabled: PropTypes.bool,
    focus: PropTypes.bool,

    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyCode: PropTypes.func,
    onPropsChange: PropTypes.func,
    handleVerify: PropTypes.func,
    renderComponent: PropTypes.func,
    customElement: PropTypes.func,
  };

  static defaultProps = {
    name: 'input',
    label: '',
    value: undefined,
    disabled: false,
    focus: false,
    placeholder: '',
    tabIndex: 1,
    remark: '',
    type: 'text',
    rules: undefined,
  }

  state = {
    value: '',
    errorMessage: '',
    editValue: false,
  }

  componentWillMount() {
    const { value } = this.props;
    const errorMessage = this.handleValidation(value);
    this.setState(() => {
      return {
        value: value,
        errorMessage: errorMessage,
        editValue: false,
      };
    });
    if (!isEmpey(errorMessage) && !this.props.errorMessage) this.handleUpdateValue(value);
  }

  componentWillUpdate(nextProps, nextState) {
    const { editValue } = nextState;
    if (!editValue) {
      const valueState = nextState.value;
      const { value, name } = nextProps;
      
      const keys = ['value', 'rules'];
      const checkProps = pick(keys, { ...this.props, value: valueState });
      const checkNextProps = pick(keys, nextProps);
      if (JSON.stringify(checkProps) !== JSON.stringify(checkNextProps)) {
        const errorMessage = this.handleValidation(value);
        this.setState(() => {
          return {
            value: value,
            errorMessage: errorMessage,
            editValue: false,
          }
        });
        if (this.props.onPropsChange) this.props.onPropsChange(value, name, errorMessage);
      }
    }
  }

  handleValidation = (value) => {
    const { rules } = this.props;
    let validation = '';
    if (this.props.handleVerify) {
      validation = this.props.handleVerify(value, rules, this.props);
    } else {
      validation = verifyField(value, rules, this.props);
    }
    return this.props.errorMessage ? this.props.errorMessage : validation;
  }

  handleUpdateValue = (value) => {
    const errorMessage = this.handleValidation(value);
    const { name } = this.props;
    if (this.props.onChange) {
      this.props.onChange(value, name, errorMessage);
    } else if (this.props.onBlue) {
      this.props.onBlue(value, name, errorMessage);
    }
  }

  handleChange = (value) => {
    const { name, onChange } = this.props;
    const errorMessage = this.handleValidation(value);
    try {
      this.setState(() => {
        return {
          value: value,
          errorMessage: errorMessage,
          editValue: !this.props.value,
        }
      });
      if (onChange) onChange(value, name, errorMessage);
    } catch (err) {
      console.error(err);
    }
  }

  handleBlur = (value) => {
    const { name, onBlur, type } = this.props;
    try {
      if (onBlur) {        
        const errorMessage = this.handleValidation(value);
        this.setState(() => {
          return {
            value: value,
            errorMessage: errorMessage,
            editValue: !this.props.value,
          }
        });
        onBlur(value, name, errorMessage);
      } else {
        switch (type) {
          case 'number': {
            this.handleChange(value);
            break;
          }
          default: break;
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  handleKeyCode = (e) => {
    const { value } = this.state;
    const { name } = this.props;
    const keyCode = e.keyCode || e.which;
    if (this.props.onKeyCode) this.props.onKeyCode(keyCode, value, name, e);
  }

  render() {
    const { type } = this.props;
    const { value, errorMessage, editValue } = this.state;
    const propsForm = {
      ...remove(['onChange', 'value', 'onBlur', 'onKeyCode', 'handleVerify', 'renderComponent', 'children'], this.props),
      value: editValue ? value : this.props.value,
      errorMessage: this.props.errorMessage || this.props.errorMessage === "" ? this.props.errorMessage : errorMessage,
      handleChange: this.handleChange,
      handleBlur: this.handleBlur,
      handleKeyCode: this.handleKeyCode,
    };

      switch (type) {
        case 'text': {
          if (this.props.children) return (<TextInput {...propsForm} >{this.props.children}</TextInput>);
          return (<TextInput {...propsForm} />);
        }
        case 'date': {
          if (this.props.children) return (<DateInput {...propsForm} >{this.props.children}</DateInput>);
          return (<DateInput {...propsForm} />);
        }
        case 'number': {
          if (this.props.children) return (<NumberInput {...propsForm}>{this.props.children}</NumberInput>);
          return (<NumberInput {...propsForm} />);
        }
        case 'select': {
          if (this.props.children) return (<SelectInput {...propsForm}>{this.props.children}</SelectInput>);
          return (<SelectInput {...propsForm} />);
        }
        case 'password': {
          if (this.props.children) return (<PasswordInput {...propsForm}>{this.props.children}</PasswordInput>);
          return (<PasswordInput {...propsForm} />);
        }
        case 'textarea': {
          if (this.props.children) return (<TextareaInput {...propsForm}>{this.props.children}</TextareaInput>);
          return (<TextareaInput {...propsForm} />);
        }
        case 'radio': {
          if (this.props.children) return (<RadioInput {...propsForm}>{this.props.children}</RadioInput>);
          return (<RadioInput {...propsForm} />);
        }
        case 'checkbox': {
          if (this.props.children) return (<CheckboxInput {...propsForm}>{this.props.children}</CheckboxInput>);
          return (<CheckboxInput {...propsForm} />);
        }
        case 'custom': {
          return this.props.renderComponent ? this.props.renderComponent(propsForm) : '';
        }
        default:
          if (this.props.children) return (<TextInput {...propsForm}>{this.props.children}</TextInput>);
          return (<TextInput {...propsForm} />);
      }
    }
}
