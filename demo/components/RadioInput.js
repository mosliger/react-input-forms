import React, { Component } from 'react';
import InputField from 'react-input-forms';
import getprosTypeRadioInput from '../helpers/radioInput';

const optionList = [
  { label: 'one', value: '1' },
  { label: 'two', value: '2' },
  { label: 'three', value: '3' },
];
    
export default class RadioInput extends Component {
  state = {
    radioInput: '',
    radioInputRules: '',
    radioInputChildren: '',
    basicinput: '',
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
        <InputField type="radio" options={optionList} value={basicinput} name="basicinput" label="basic input " onChange={this.handleUpdateValue} />
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

  renderDemo = () => {
    const { radioInput, radioInputChildren, radioInputRules } = this.state;
    return (
      <div>
        <div className="box-demo-input">
          <InputField
            type="radio"
            value={radioInput}
            options={[
              { label: 'one', value: '1' },
              { label: 'two', value: '2' },
              { label: 'three', value: '3' },
            ]}
            name="radioInput"
            label="label"
            onChange={this.handleUpdateValue}
          />
        </div>
        <div className="box-demo-input">
          <InputField
            type="radio"
            value={radioInputRules}
            options={[
              { label: 'one', value: '1' },
              { label: 'two', value: '2', disabled: true },
              { label: 'three', value: '3' },
            ]}
            name="radioInputRules"
            label="disabled บางตัว"
            onChange={this.handleUpdateValue}
          />
        </div>
        <div className="box-demo-input">
          <InputField
            type="radio"
            value={radioInputChildren}
            options={optionList}
            name="radioInputChildren"
            label="Children"
            onChange={this.handleUpdateValue}
          >
          <button onClick={() => this.handleClearValue('radioInputChildren')}>clear</button>
          </InputField>
        </div>
      </div>
    )
  }

  render() {
    const prosType = getprosTypeRadioInput('th');
    return (
      <div className="container">
        <h1>Input Type Radio</h1>
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
          type="radio"
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
          <h2> Demo input type radio</h2>
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