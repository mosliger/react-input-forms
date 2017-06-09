import React, { Component } from 'react';
import InputField from 'react-input-forms';
import getprosTypeCustomInput from '../helpers/customInput';

export default class CustomInput extends Component {
  state = {
    textInput: '',
    textInputRules: '',
    textInputChildren: '',
    basicinput: '',
  }

  handleUpdateValue = (value, name) => {
    this.setState({ [name]: value });
  }

  renderBasicInput = () => {
    const { basicinput } = this.state;
    return (
      <div>
        <InputField type="text" value={basicinput} name="basicinput" label="basic input" onChange={this.handleUpdateValue} />
        <pre>
          <code>
            {this.demoCodeMain()}
          </code>
        </pre>
      </div>
    )
  }

  renderDemo = () => {
    const { textInput, textInputRules, textInputChildren } = this.state;
    return (
      <div>
        <div className="box-demo-input">
          <InputField
            type="text"
            value={textInput}
            name="textInput"
            label="label"
            rules={{ required: 'input is require.' }}
            onChange={this.handleUpdateValue}
            renderComponent={(parameter) => <RenderInput {...parameter} />}
            />
        </div>
      </div>
    )
  }

  demoCodeMain = () => {
    return `
import React, { Component } from 'react'
import InputField from 'react-input-forms'

export default class Demo extends Component {
  state = {
    value: '',
  }

  handleUpdateValue = (value) => {
    this.setState({ value: value });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="container">
        <InputField
          type="text"
          value={value}
          name="input-text"
          label="label"
          onChange={this.handleUpdateValue}
          renderComponent={(parameter) => <RenderInput {...parameter} />}
        />
      </div>
    )
  }
}

export class RenderInput extends Component {
  render() {
    const { label, value, disabled, focus, placeholder, name, errorMessage, handleChange, handleKeyCode, handleBlur } = this.props;
    let renderErrorMessage = '';
    let classInput = 'form-input';
    if (!isEmpey(errorMessage)) {
      classInput = 'form-input error';
      renderErrorMessage = (<div className="error-message">{errorMessage}</div>);
    }

    return (
      <div className={inputProps.className ? inputProps.className : 'field-group'}>
        <label htmlFor={label}>{label}</label>
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
    )
  }
}
`
  }

  render() {
    const prosType = getprosTypeCustomInput('th');
    return (
      <div className="container">
        <h1>Input Type Custom</h1>
        <div className="row">
          <div className="D-6 M-12">
            {this.renderDemo()}
          </div>
          <div className="D-6 M-12">
            <h4>input type custom</h4>
            <pre>
              <code className="html">
                {`
import React, { Component } from 'react'
import InputField from 'react-input-forms'
import RenderInput from '../components/RenderInput'

export default class Demo extends Component {
  state = {
    value: '',
  }

  handleUpdateValue = (value) => {
    this.setState({ value: value });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="container">
        <InputField
          type="text"
          value={value}
          name="input-text"
          label="label"
          onChange={this.handleUpdateValue}
          renderComponent={(parameter) => <RenderInput {...parameter} />}
        />
      </div>
    )
  }
}
                  `}
              </code>
            </pre>
          </div>
        </div>
        <div className="pros-type">
          <div className="title">{prosType.title}</div>
          <table>
            <tr>
              <th>{prosType.header.property}</th>
              <th>{prosType.header.type}</th>
              <th>{prosType.header.default}</th>
              <th>{prosType.header.description}</th>
            </tr>
            {
              prosType.detail.map((obj, index) => {
                return (
                  <tr key={index}>
                    <td>{obj.property}</td>
                    <td>{obj.type}</td>
                    <td>{obj.default}</td>
                    <td>{obj.description}</td>
                  </tr>
                )
              })
            }
          </table>
        </div>
        <div className="demo">
          <h2> Demo input type text</h2>
          <div className="row">
            <div className="D-6 M-12">
              {this.renderBasicInput()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class RenderInput extends Component {
  render() {
    const { label, value, disabled, focus, placeholder, name, errorMessage, handleChange, handleKeyCode, handleBlur } = this.props;
    let renderErrorMessage = '';
    let classInput = 'form-input';
    if (!isEmpey(errorMessage)) {
      classInput = 'form-input error';
      renderErrorMessage = (<div className="error-message">{errorMessage}</div>);
    }

    return (
      <div className={inputProps.className ? inputProps.className : 'field-group'}>
        <label htmlFor={label}>{label}</label>
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
    )
  }
}