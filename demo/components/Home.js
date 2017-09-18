import React, { Component } from 'react';
// import InputField from 'react-input-forms';
import InputField from '../../src';

export default class Home extends Component {
  state = {
    textInput: '',
    numberInput: '',
    selectInput: '',
    password: '',
    textarea: '',
    customInput: '',
    checkboxInput: [],
    radioInput: {},
    customerInput: '',
    textInputCustomElement: '',
    checkboxInputNotOption: false,
    disabledOption: false
  }

  handleUpdateValue = (value, name, error) => {
    this.setState({ [name]: value });
  }

  handleOnBlur = (value, name, error) => {
    this.setState({ [name]: value });
  }

  handleDisabledOption = () => {
    const { disabledOption } = this.state
    this.setState({ disabledOption: !disabledOption });
  }

  getKeyCode = (keyCode, value, name, e) => {
    // console.log('getKeyCode >>', keyCode, value, name, e)    
  }

  onPropsChange = (value, name, error) => {
    // console.log('onPropsChange >>', value, name, error)  
  }

  clearForms = () => {
    this.setState({
      textInput: '',
      numberInput: '',
      selectInput: '',
      textarea: '',
      customInput: '',
      checkboxInput: [],
      radioInput: {},
      customerInput: '',
      textInputCustomElement: '',
      checkboxInputNotOption: false,
    })
  }

  customElementText = (input, label, errorMessage) => {
    return (
      <div className="custom-element">
        <label>{label}</label>
        {input}
        <div className="error-message">{errorMessage}</div>
      </div>
    )
  }

  customElementRadio = (inputList, label, errorMessage) => {
    return (
      <div className={'field-group'}>
        <label htmlFor={label}>{label}</label>
        {inputList.map((detail, index) => {
          return (
            <div className="radio-list" key={`${name}-${index}`}>
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

  customElement = (rules) => {
    const { textInputCustomElement, customerInput } = this.state;
    const optionList = [{ label: 'select ...', value: '', disabled: true }, { label: 'one', value: '1' }, { label: 'two', value: '2', disabled: true }, { label: 'three', value: '3' }, { label: 'four', value: '4', disabled: true }, { label: 'five', value: '5' }];

    return (
      <div>
        <h2>Custom Element</h2>
        <div className="row">
          <div className="D-6 M-12">
            <h2>Text Input</h2>
            <InputField
              type="text"
              customElement={this.customElementText}
              onPropsChange={this.onPropsChange}
              onKeyCode={this.getKeyCode}
              value={textInputCustomElement}
              rules={rules}
              type="text"
              key="textInputCustomElement"
              name="textInputCustomElement"
              label="Text Input Custom Element"
              onChange={this.handleUpdateValue}
              onBlur={this.handleOnBlur}
            />
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { textInput, password, customerInput, numberInput, selectInput, disabledOption, textarea, customInput, checkboxInput, radioInput, checkboxInputNotOption } = this.state;
    let optionList = [{ label: 'select ...', value: '' }, { label: 'one', value: '1' }, { label: 'two', value: '2' }, { label: 'three', value: '3' }, { label: 'four', value: '4' }, { label: 'five', value: '5' }];
    const rules = { required: 'input is require.' };
    if (disabledOption)  optionList = [{ label: 'select ...', value: '', disabled: true }, { label: 'one', value: '1' }, { label: 'two', value: '2', disabled: true }, { label: 'three', value: '3' }, { label: 'four', value: '4', disabled: true }, { label: 'five', value: '5' }];
    return (
      <div className="container">
        <div className="row">
          <div className="D-6 M-12">
            <h2>Text Input</h2>
            <InputField type="text" remark="*" onPropsChange={this.onPropsChange} onKeyCode={this.getKeyCode}  value={textInput} rules={rules} key="textInput" name="textInput" label="label Text Input" onChange={this.handleUpdateValue} onBlur={this.handleOnBlur} />
          </div>
          <div className="D-6 M-12">
            <h2>Number Input</h2>
            <InputField type="number" onPropsChange={this.onPropsChange} onKeyCode={this.getKeyCode} value={numberInput} rules={{ ...rules, number: 'กรุณากรอกตัวเลย' }} key="numberInput" format="0,000.00" name="numberInput" label="label Number Input" onChange={this.handleUpdateValue} onBlur={this.handleOnBlur} />
          </div>
        </div>
        <div className="row">
          <div className="D-6 M-12">
            <h2>Password</h2>
            <InputField type="password" placeholder="password ..." onPropsChange={this.onPropsChange} rules={rules} value={password} key="password" name="password" label="Password" onChange={this.handleUpdateValue} />
          </div>
          <div className="D-6 M-12">
            <h2>Select</h2>
            <InputField type="select" onPropsChange={this.onPropsChange} onKeyCode={this.getKeyCode} rules={rules} value={selectInput} key="selectInput" name="selectInput" label="label Select" options={optionList} onChange={this.handleUpdateValue} />
          </div>
        </div>
        <div className="row">
          <div className="D-6 M-12">
            <h2>Textarea</h2>
            <InputField type="textarea"  onPropsChange={this.onPropsChange} onKeyCode={this.getKeyCode} rules={rules} value={textarea} key="textarea" name="textarea" label="label Textarea" rows={3} cols={4} onBlur={this.handleOnBlur} onChange={this.handleUpdateValue} />
          </div>
        </div>
        <div className="row">
          <div className="D-6 M-12">
            <h2>Checkbox</h2>
            <InputField type="checkbox" onPropsChange={this.onPropsChange} value={checkboxInput} key="checkboxInput" name="checkboxInput" label="label Checkbox" options={optionList} onChange={this.handleUpdateValue} />
          </div>
          <div className="D-6 M-12">
            <h2>Radio</h2>
            <InputField type="radio" onPropsChange={this.onPropsChange} value={radioInput} key="radioInput" name="radioInput" label="label radio" options={optionList} onChange={this.handleUpdateValue} />
          </div>
        </div>
        {this.customElement(rules)}
        <button onClick={() => this.handleDisabledOption()}>{ !disabledOption ? 'Disabled option' : 'Enable option'}</button>
        <button onClick={() => this.clearForms()}>Clear Forms</button>
      </div>
    );
  }
}
