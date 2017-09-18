import React, { Component } from 'react';
import InputField from 'react-input-forms';
import getprosTypePasswordInput from '../helpers/passwordInput';

export default class PasswordInput extends Component {
  state = {
    passwordInput: '',
    passwordInputRules: '',
    passwordInputChildren: '',
    basicinput: '',
    customElement: ''
  }

  handleUpdateValue = (value, name) => {
    this.setState({ [name]: value });
  }

  renderBasicInput = () => {
    const { basicinput } = this.state;
    return (
      <div>
        <InputField type="password" value={basicinput} name="basicinput" label="basic input" onChange={this.handleUpdateValue} />
        <pre>
          <code>
            {`
<InputField
  type="password"
  value={value}
  name="input-text"
  label="basic input"
  onChange={this.handleUpdateValue}
/>
          `}
          </code>
        </pre>
      </div>
    )
  }

  customElementText = (input, label, errorMessage) => {
    return (
      <div className="custom-element">
        <label>{label}</label>
        {input}
        <div className="message">{errorMessage}</div>
      </div>
    )
  }

  renderCustomElement = () => {
    const { customElement } = this.state;
    return (
      <div>
        <InputField type="password" customElement={this.customElementText} value={customElement} name="customElement" label="custom element" onChange={this.handleUpdateValue} />
        <pre>
          <code>
            {`
customElementText = (input, label, errorMessage) => {
  return (
    <div className="custom-element">
      <label>{label}</label>
      {input}
      <div className="error-message">{errorMessage}</div>
    </div>
  )
}

...

<InputField
  type="password"
  customElement={this.customElementText}
  value={value}
  name="input-text"
  label="custom element"
  onChange={this.handleUpdateValue}
/>
            `}
          </code>
        </pre>
      </div>
    )
  }

  renderDemo = () => {
    const { passwordInput, passwordInputRules, passwordInputChildren } = this.state;
    return (
      <div>
        <div className="box-demo-input">
          <InputField
            type="password"
            value={passwordInput}
            name="passwordInput"
            label="label"
            onChange={this.handleUpdateValue}
            />
        </div>
        <div className="box-demo-input">
          <InputField
            type="password"
            value={passwordInputRules}
            rules={{
              required: 'value is require'
            }}
            name="passwordInputRules"
            label="Input verify field"
            placeholder="require field"
            onChange={this.handleUpdateValue}
            />
        </div>
        <div className="box-demo-input">
          <InputField
            type="password"
            value={passwordInputChildren}
            name="passwordInputChildren"
            label="Children"
            onChange={this.handleUpdateValue}
            >
            <button>button</button>
          </InputField>
        </div>
      </div>
    )
  }

  render() {
    const prosType = getprosTypePasswordInput('th');
    return (
      <div className="container">
        <h1>Input Type Text</h1>
        <div className="row">
          <div className="D-6 M-12">
            {this.renderDemo()}
          </div>
          <div className="D-6 M-12">
            <pre>
              <code className="html">
                {`
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
          type="password"
          value={value}
          name="input-text"
          label="label"
          onChange={this.handleUpdateValue}
        />
      </div>
    )
  }
}`}
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
            <div className="D-6 M-12">
              {this.renderCustomElement()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}