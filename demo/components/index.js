import React from 'react';
import Home from './Home';
import TextInput from './TextInput'

export default class Index extends React.Component {
  state = {
    currentMenu: 'home',
    menuList: [
      { name: 'Home', key: 'home'},
      { name: 'Text', key: 'text'},
      { name: 'Number', key: 'number'},
      { name: 'Select', key: 'select'},
      { name: 'Textarea', key: 'textarea'},
      { name: 'Radio', key: 'radio'},
      { name: 'Checkbox', key: 'checkbox'},
      { name: 'Custom', key: 'custom'},
    ],
  }

  selectMenu = (keyMenu) => {
    this.setState({
      currentMenu: keyMenu,
    })
  }

  handleUpdateValue = (value, name, errorMessage) => {
    const { error } = this.state;
    this.setState({
      [name]: value,
      error: {
        ...error,
        [name]: errorMessage,
      }
    });
  }

  clearInput = () => {
    this.setState({
      textInput: '',
      numberInput: '',
      selectInput: '',
      textarea: '',
      customInput: '',
      checkboxInput: [],
      radioInput: {},
      customInput: '',
      checkboxInputNotOption: false,
      error: {},
    })
  }

  render() {
    const {
      textInput,
      numberInput,
      selectInput,
      textarea,
      checkboxInputNotOption,
      checkboxInput,
      radioInput,
      customInput,
      error,
      currentMenu,
      menuList,
    } = this.state;

    return (
      <div className="demo-input-fields">
        <div className="main-menu">
          <h2>Menu</h2>
          <ul className="menu-list">
            {menuList.map((item) => {
              return (<li key={item.key} className={`item ${currentMenu === item.key ? 'active' : ''}`}>
              <a href="Javascript::" onClick={() => this.selectMenu(item.key)}> {item.name} </a>
              </li>);
            })}
          </ul>
        </div>
        <div className="main-page">
          <ul className="page-list">
            <li key="page-home" className={currentMenu === 'home' ? 'active' : ''}><Home key="home" /></li>
            <li key="page-text" className={currentMenu === 'text' ? 'active' : ''}><TextInput key="text" /></li>
            <li key="page-number" className={currentMenu === 'number' ? 'active' : ''}>number</li>
            <li key="page-select" className={currentMenu === 'select' ? 'active' : ''}>select</li>
            <li key="page-textarea" className={currentMenu === 'textarea' ? 'active' : ''}>textarea</li>
            <li key="page-radio" className={currentMenu === 'radio' ? 'active' : ''}>radio</li>
            <li key="page-checkbox" className={currentMenu === 'checkbox' ? 'active' : ''}>checkbox</li>
            <li key="page-custom" className={currentMenu === 'custom' ? 'active' : ''}>custom</li>
          </ul>
          
        </div>
      </div>
    );
  }
}
