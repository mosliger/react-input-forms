import React, { Component } from 'react';
import InputField from '../../src';
import RenderCode from './RenderCode';
import { getprosType } from '../helpers/textInput';

export default class TextInput extends Component {
  state = {
    textInput: '',
    textInputRules: '',
  }

  handleUpdateValue = (value, name) => {
    this.setState({ [name]: value });
  }

  render() {
    const { textInput, textInputRules, textInputChildren } = this.state;
    const prosType = getprosType('en');
    return (
      <div className="container">
        <h1>Input Type Text</h1>
        <div className="row">
          <div className="D-4 M-12">
            <InputField
              type="text"
              value={textInput}
              name="textInput"
              label="label"
              onUpdate={this.handleUpdateValue}
            />
          </div>
          <div className="D-4 M-12">
            <InputField
              type="text"
              value={textInputRules}
              rules={{
                required: 'value is require',
              }}
              name="textInputRules"
              label="label"
              onUpdate={this.handleUpdateValue}
            />
          </div>
          <div className="D-4 M-12">
            <InputField
              type="text"
              value={textInputChildren}
              name="textInputChildren"
              label="Text Input Children"
              onUpdate={this.handleUpdateValue}
            >
            <button>search</button>
            </InputField>
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
              prosType.detail.map((obj) => {
                return (
                  <tr>
                    <th>{obj.property}</th>
                    <th>{obj.type}</th>
                    <th>{obj.default}</th>
                    <th>{obj.description}</th>
                  </tr>
                )
              })
            }
          </table>
        </div>
        <pre>
          <code className="html">
                {`
import React, { Component } from 'react'
import InputField from 'react-inputs'

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
          onUpdate={this.handleUpdateValue}
        />
      </div>
    )
  }
}`}
          </code>
        </pre>
      </div>
    );
  }
}