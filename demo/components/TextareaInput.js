import React, { Component } from 'react';
import InputField from '../../src';

import getprosTypeTextareaInput from '../helpers/textareaInput';

export default class TextareaInput extends Component {
  state = {
    textareaInput: '',
    textareaInputRules: '',
    textareaInputChildren: '',
    basicinput: '',
  }

  handleUpdateValue = (value, name) => {
    this.setState({ [name]: value });
  }

  renderBasicInput = () => {
    const { basicinput } = this.state;
    return (
      <div>
        <InputField type="textarea"
          rows={4} value={basicinput} name="basicinput" label="basic input" onChange={this.handleUpdateValue} />
        <pre>
          <code>
            {`
<InputField
  type="textarea"
  rows={4}
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

  customElementTextarea = (input, label, errorMessage) => {
    return (
      <div className="custom-element">
        <label>{label}</label>
        {input}
        <div className="error-message">{errorMessage}</div>
      </div>
    )
  }

  renderCustomElement = () => {
    const { customElement } = this.state;
    return (
      <div>
        <InputField type="textarea" customElement={this.customElementTextarea} value={customElement} name="customElement" label="custom element" onChange={this.handleUpdateValue} />
        <pre>
          <code>
            {`
customElementTextarea = (input, label, errorMessage) => {
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
  type="textarea"
  customElement={this.customElementTextarea}
  value={value}
  name="input-textarea"
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
    const { textareaInput, textareaInputRules, textareaInputChildren } = this.state;
    return (
      <div>
        <div className="box-demo-input">
          <InputField
            type="textarea"
            rows={4}
            value={textareaInput}
            name="textareaInput"
            label="label"
            onChange={this.handleUpdateValue}
            />
        </div>
        <div className="box-demo-input">
          <InputField
            type="textarea"
            rows={4}
            value={textareaInputRules}
            rules={{
              required: 'value is require',
              email: 'รูปแบบ email ไม่ถูกต้อง'
            }}
            name="textareaInputRules"
            label="Input verify field"
            placeholder="E-mail"
            onChange={this.handleUpdateValue}
            />
        </div>
        <div className="box-demo-input">
          <InputField
            type="textarea"
            rows={4}
            value={textareaInputChildren}
            name="textareaInputChildren"
            label="Children"
            onChange={this.handleUpdateValue}
            >
            <button>search</button>
          </InputField>
        </div>
      </div>
    )
  }

  render() {
    const prosType = getprosTypeTextareaInput('th');
    return (
      <div className="container">
        <h1>Input Type Textarea</h1>
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
          type="textarea"
          rows={4}
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
          <h2> Demo input type textarea</h2>
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