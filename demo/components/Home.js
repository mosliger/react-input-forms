import React, { Component } from 'react';
import InputField from '../../src';

export default class Home  extends Component {
  state = {
    textInput: '',
    numberInput: '',
    selectInput: '',
    textarea: '',
    customInput: '',
    checkboxInput: [],
    radioInput: {},
    checkboxInputNotOption: false,
  }

  handleUpdateValue = (value, name, error) => {
    this.setState({ [name]: value });
  }

  handleOnBlur = (value, name, error) => {
    this.setState({ [name]: value });
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
      checkboxInputNotOption: false,
    })
  }
  
  render() {
    const { textInput, numberInput, selectInput, textarea, customInput, checkboxInput, radioInput, checkboxInputNotOption } = this.state;
    const opctionList = [ { label: 'select ...', value: '' }, { label: 'one', value: '1' }, { label: 'two', value: '2' }, { label: 'three', value: '3' }, { label: 'four', value: '4' }, { label: 'five', value: '5' }];
    return (
      <div className="container">
        <div className="row">
          <div className="D-6 M-12">
            <h2>Text Input</h2>
            <InputField type="text" value={textInput} focus={textInput === ''} key="textInput" name="textInput" label="label Text Input" onChange={this.handleUpdateValue} onBlur={this.handleOnBlur} />
          </div>
          <div className="D-6 M-12">
            <h2>Number Input</h2>
            <InputField type="number" value={numberInput} key="numberInput" format="0,000.00" name="numberInput" label="label Number Input" onChange={this.handleUpdateValue} onBlur={this.handleOnBlur} />
          </div>          
        </div>
        <div className="row">
          <div className="D-6 M-12">
            <h2>Select</h2>
            <InputField type="select" value={selectInput} key="selectInput" name="selectInput" label="label Select" options={opctionList} onChange={this.handleUpdateValue} />
          </div>
          <div className="D-6 M-12">
            <h2>Textarea</h2>
            <InputField type="textarea" value={textarea} key="textarea" name="textarea" label="label Textarea" rows={3} cols={4} onBlur={this.handleOnBlur} onChange={this.handleUpdateValue} />
          </div>
        </div>
        <div className="row">
          <div className="D-6 M-12">
            <h2>Checkbox</h2>
            <InputField type="checkbox" value={checkboxInput} key="checkboxInput" name="checkboxInput" label="label Checkbox" options={opctionList} onChange={this.handleUpdateValue} />
          </div>
          <div className="D-6 M-12">
            <h2>Radio</h2>
            <InputField type="radio" value={radioInput} key="radioInput" name="radioInput" label="label radio" options={opctionList} onChange={this.handleUpdateValue} />
          </div>
        </div>
        <button onClick={() => this.clearForms()}>Clear Forms</button>
      </div>
    );
  }
}