import React, { Component } from 'react';
// import InputField from 'react-input-forms';
import InputField from '../../src';
import getprosTypeCheckboxInput from '../helpers/checkboxInput';

const optionList = [
  { label: 'one', value: '1' },
  { label: 'two', value: '2' },
  { label: 'three', value: '3' },
];

export default class CheckboxInput extends Component {
  state = {
    checkboxInput: [],
    checkboxInputNotOption: false,
    checkboxInputRules: [],
    checkboxInputChildren: [],
    basicinput: [],
    customElementNotOption: false,
    customElementHaveOption: [],
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
        <InputField type="checkbox" options={optionList} value={basicinput} name="basicinput" label="basic input " onChange={this.handleUpdateValue} />
        <pre>
          <code>
            {`
const optionList = [
  { label: 'one', value: '1' },
  { label: 'two', value: '2' },
  { label: 'three', value: '3' },
  { label: 'four', value: '4' },
  { label: 'five', value: '5' },
];

...

<InputField
  type="checkbox"
  options={optionList}
  value={value}
  name="input-checkbox"
  label="basic input"
  onChange={this.handleUpdateValue}
/>
          `}
          </code>
        </pre>
      </div>
    )
  }

  customElementNotOption = (input, label, errorMessage) => {
    return (
      <div className="field-group">
        <div className="box-input">
          {input}
          <label className="icon"></label>
        </div>
        <label htmlFor={label}>{label}</label>
        <div className="error-message">{errorMessage}</div>
      </div>
    )
  }

  renderCustomElementNotOption = () => {
    const { customElementNotOption } = this.state;
    return (
      <div>
        <InputField type="checkbox" customElement={this.customElementNotOption} value={customElementNotOption} name="customElementNotOption" label="custom element not option " onChange={this.handleUpdateValue} />
        <pre>
          <code>
            {`
customElementNotOption = (input, label, errorMessage) => {
    return (
      <div className="field-group">
        <div className="box-input">
          {input}
           <label className="icon"></label>
        </div>
        <label htmlFor={label}>{label}</label>
        <div className="error-message">{errorMessage}</div>
      </div>
    )
  }

...

<InputField
  type="checkbox"
  customElement={this.customElementNotOption}
  value={value}
  name="input-checkbox"
  label="custom element not option"
  onChange={this.handleUpdateValue}
/>
          `}
          </code>
        </pre>
      </div>
    )
  }

  customElementHaveOption = (inputList, label, errorMessage) => {
    return (
      <div className="field-group">
        <label htmlFor={label}>{label}</label>
        {inputList.map((detail, index) => {
          return (
            <div className="checkbox-list" key={`${name}-${index}`}>
              <div className="box-input">
                {detail.input}
                <label className="icon"></label>
              </div>
              <label htmlFor={label}>{detail.label}</label>
            </div>
          )
        })
        }
        {errorMessage}
      </div>
    )
  }

  renderCustomElementHaveOption = () => {
    const { customElementHaveOption } = this.state;
    return (
      <div>
        <InputField type="checkbox" options={optionList} customElement={this.customElementHaveOption} value={customElementHaveOption} name="customElementHaveOption" label="custom element have option " onChange={this.handleUpdateValue} />
        <pre>
          <code>
            {`
customElementHaveOption = (inputList, label, errorMessage) => {
  return (
    <div className="field-group">
      <label htmlFor={label}>{label}</label>
      {inputList.map((detail, index) => {
        return (
          <div className="checkbox-list"}>
            <div className="box-input">
              {detail.input}
              <label className="icon"></label>
            </div>
            <label htmlFor={label}>{detail.label}</label>
          </div>
        )
      })
      }
      {errorMessage}
    </div>
  )
}

...

const optionList = [
  { label: 'one', value: '1' },
  { label: 'two', value: '2' },
  { label: 'three', value: '3' },
  { label: 'four', value: '4' },
  { label: 'five', value: '5' },
];

...

<InputField
  type="checkbox"
  customElement={this.customElementHaveOption}
  value={value}
  name="input-checkbox"
  label="custom element not option"
  onChange={this.handleUpdateValue}
/>
          `}
          </code>
        </pre>
      </div>
    )
  }

  renderDemo = () => {
    const { checkboxInput, checkboxInputChildren, checkboxInputRules, checkboxInputNotOption } = this.state;
    return (
      <div>
        <div className="box-demo-input">
          <InputField
            type="checkbox"
            value={checkboxInputNotOption}
            name="checkboxInputNotOption"
            label="checkbox not options"
            onChange={this.handleUpdateValue}
            />
        </div>

        <div className="box-demo-input">
          <InputField
            type="checkbox"
            value={checkboxInput}
            options={[
              { label: 'one', value: '1' },
              { label: 'two', value: '2' },
              { label: 'three', value: '3' },
            ]}
            name="checkboxInput"
            label="checkbox options"
            onChange={this.handleUpdateValue}
            />
        </div>
        <div className="box-demo-input">
          <InputField
            type="checkbox"
            value={checkboxInputRules}
            options={[
              { label: 'one', value: '1' },
              { label: 'two', value: '2', disabled: true },
              { label: 'three', value: '3' },
            ]}
            name="checkboxInputRules"
            label="disabled บางตัว"
            onChange={this.handleUpdateValue}
            />
        </div>
        <div className="box-demo-input">
          <InputField
            type="checkbox"
            value={checkboxInputChildren}
            options={optionList}
            name="checkboxInputChildren"
            label="Children"
            onChange={this.handleUpdateValue}
            >
            <button onClick={() => this.handleClearValue('checkboxInputChildren')}>clear</button>
          </InputField>
        </div>
      </div>
    )
  }

  render() {
    const prosType = getprosTypeCheckboxInput('th');
    return (
      <div className="container">
        <h1>Input Type Checkbox</h1>
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
      { label: 'one', value: '1' },
      { label: 'two', value: '2' },
      { label: 'three', value: '3' },
      { label: 'four', value: '4' },
      { label: 'five', value: '5' },
    ];
    return (
      <div className="container">
        <InputField
          type="checkbox"
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
          <h2> Demo input type checkbox</h2>
          <div className="row">
            <div className="D-6 M-12">
              {this.renderBasicInput()}
            </div>
            <div className="D-6 M-12">
              {this.renderCustomElementNotOption()}
            </div>
            <div className="D-6 M-12">
              {this.renderCustomElementHaveOption()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}