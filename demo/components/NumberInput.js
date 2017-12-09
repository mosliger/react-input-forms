import React, { Component } from 'react';
import InputField from '../../src';

import getprosTypeNumberInput from '../helpers/numberInput';

export default class TextInput extends Component {
  state = {
    numberInput: '',
    numberInputRules: '',
    numberInputChildren: '',
    basicinput: '',
    numberInputFormat: '',
    customElement: ''
  }

  handleUpdateValue = (value, name) => {
    this.setState({ [name]: value });
  }

  handleClearValue = (key) => {
    this.setState({ [key]: '' });
  }

  renderBasicInput = () => {
    const { basicinput } = this.state;
    return (
      <div>
        <InputField type="number" value={basicinput} name="basicinput" label="basic input" onChange={this.handleUpdateValue} />
        <pre>
          <code>
            {`
<InputField
  type="number"
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

  customElementNumber = (input, label, errorMessage) => {
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
        <InputField type="number" customElement={this.customElementNumber} value={customElement} name="customElement" label="custom element" onChange={this.handleUpdateValue} />
        <pre>
          <code>
            {`
customElementNumber = (input, label, errorMessage) => {
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
  type="number"
  customElement={this.customElementNumber}
  value={value}
  name="input-number"
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
    const { numberInput, numberInputRules, numberInputFormat, numberInputChildren } = this.state;
    return (
      <div>
        <div className="box-demo-input">
          <InputField
            type="number"
            value={numberInput}
            name="numberInput"
            label="label"
            onChange={this.handleUpdateValue}
            />
        </div>
        <div className="box-demo-input">
          <InputField
            type="number"
            value={numberInputRules}
            rules={{
              required: 'value is require'
            }}
            name="numberInputRules"
            label="Input verify field"
            onChange={this.handleUpdateValue}
            />
        </div>
        <div className="box-demo-input">
          <InputField
            type="number"
            value={numberInputFormat}
            name="numberInputFormat"
            label="Input number format"
            format="0,000.00"
            onChange={this.handleUpdateValue}
            />
        </div>
        <div className="box-demo-input">
          <InputField
            type="number"
            value={numberInputChildren}
            name="numberInputChildren"
            label="Children"
            onChange={this.handleUpdateValue}
            >
            <button onClick={() => this.handleClearValue('numberInputChildren')}>clear</button>
          </InputField>
        </div>
      </div>
    )
  }

  render() {
    const prosType = getprosTypeNumberInput('th');
    return (
      <div className="container">
        <h1>Input Type Number</h1>
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
          type="number"
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