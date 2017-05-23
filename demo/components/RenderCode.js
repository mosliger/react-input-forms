import React, { Component } from 'react'

export default class RenderCode extends Component {
  render() {
    const { items } = this.props;
    return (
        <pre>
          {items.map((item, index) => {
            return (<div key={index} className={item.className}>&emsp;{item.value}</div>)
          })}
        </pre>
    );
  }
}