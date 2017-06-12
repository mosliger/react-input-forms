import React, { Component } from 'react';
import InputField from 'react-input-forms';
import getprosTypeSelectInput from '../helpers/selectInput';

const optionList = [
  { label: 'select ...', value: '' },
  { label: 'one', value: '1' },
  { label: 'two', value: '2' },
  { label: 'three', value: '3' },
  { label: 'four', value: '4' },
  { label: 'five', value: '5' },
];

export default class SelectInput extends Component {
  state = {
    selectInput: '',
    selectInputRules: '',
    selectInputChildren: '',
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
        <InputField type="select" options={optionList} value={basicinput} name="basicinput" label="basic input " onChange={this.handleUpdateValue} />
        <pre>
          <code>
            {`
const optionList = [
  { label: 'select ...', value: '' },
  { label: 'one', value: '1' },
  { label: 'two', value: '2' },
  { label: 'three', value: '3' },
  { label: 'four', value: '4' },
  { label: 'five', value: '5' },
];

...

<InputField
  type="text"
  options={optionList}
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

  customElementSelect = (input, label, errorMessage) => {
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
        <InputField type="select" options={optionList} customElement={this.customElementSelect} value={customElement} name="customElement" label="custom element" onChange={this.handleUpdateValue} />
        <pre>
          <code>
            {`
customElementSelect = (input, label, errorMessage) => {
  return (
    <div className="custom-element">
      <label>{label}</label>
      {input}
      <div className="error-message">{errorMessage}</div>
    </div>
  )
}

...

const optionList = [
  { label: 'select ...', value: '' },
  { label: 'one', value: '1' },
  { label: 'two', value: '2' },
  { label: 'three', value: '3' },
  { label: 'four', value: '4' },
  { label: 'five', value: '5' },
];

...

<InputField
  type="select"
  customElement={this.customElementSelect}
  value={value}
  name="input-select"
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
    const { selectInput, selectInputRules, selectInputChildren } = this.state;
    return (
      <div>
        <div className="box-demo-input">
          <InputField
            type="select"
            value={selectInput}
            options={optionList}
            name="selectInput"
            label="label"
            onChange={this.handleUpdateValue}
            />
        </div>
        <div className="box-demo-input">
          <InputField
            type="select"
            value={selectInputRules}
            options={optionList}
            rules={{
              required: 'value is require'
            }}
            name="selectInputRules"
            label="Input verify field"
            onChange={this.handleUpdateValue}
            />
        </div>
        <div className="box-demo-input">
          <InputField
            type="select"
            value={selectInputChildren}
            options={optionList}
            name="selectInputChildren"
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
    const prosType = getprosTypeSelectInput('th');
    return (
      <div className="container">
        <h1>Input Type Select</h1>
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
    const optionList = [
      { label: 'select ...', value: '' },
      { label: 'one', value: '1' },
      { label: 'two', value: '2' },
      { label: 'three', value: '3' },
      { label: 'four', value: '4' },
      { label: 'five', value: '5' },
    ];
    return (
      <div className="container">
        <InputField
          type="select"
          value={value}
          options={optionList}
          name="input-select"
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
          <h2> Demo input type select</h2>
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