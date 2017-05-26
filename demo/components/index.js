import React from 'react';
import Home from './Home';
import TextInput from './TextInput';
import NumberInput from './NumberInput';
import SelectInput from './SelectInput';
import TextareaInput from './TextareaInput';

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

  render() {
    const { menuList, currentMenu } = this.state;

    return (
      <div className="demo-input-fields">
        <div className="main-menu">
          <h2>Menu</h2>
          <ul className="menu-list">
            {menuList.map((item) => {
              return (<li key={item.key} className={`item ${currentMenu === item.key ? 'active' : ''}`}>
              <a href="Javascript:;" onClick={() => this.selectMenu(item.key)}> {item.name} </a>
              </li>);
            })}
          </ul>
        </div>
        <div className="main-page">
          <ul className="page-list">
            <li key="page-home" className={currentMenu === 'home' ? 'item active' : 'item'}><Home /></li>
            <li key="page-text" className={currentMenu === 'text' ? 'item active' : 'item'}><TextInput /></li>
            <li key="page-number" className={currentMenu === 'number' ? 'item active' : 'item'}><NumberInput /></li>
            <li key="page-select" className={currentMenu === 'select' ? 'item active' : 'item'}><SelectInput /></li>
            <li key="page-textarea" className={currentMenu === 'textarea' ? 'item active' : 'item'}><TextareaInput /></li>
            <li key="page-radio" className={currentMenu === 'radio' ? 'item active' : 'item'}>radio</li>
            <li key="page-checkbox" className={currentMenu === 'checkbox' ? 'item active' : 'item'}>checkbox</li>
            <li key="page-custom" className={currentMenu === 'custom' ? 'item active' : 'item'}>custom</li>
          </ul>
          
        </div>
      </div>
    );
  }
}
