import React, { PropTypes } from 'react';
import { isEmpey, getOption, pick, size } from '../helpers/global';


export default class SelectFilterInput extends React.PureComponent {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    format: PropTypes.bool,
    label: PropTypes.string,
    options: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    inputProps: PropTypes.object,
    labelProps: PropTypes.object,
    disabled: PropTypes.bool,
    focus: PropTypes.bool,
    errorMessage: PropTypes.string,
    remark: PropTypes.string,
    optionHeight: PropTypes.number,
    handleChange: PropTypes.func,
  };

  static defaultProps = {
    name: 'input',
    tabIndex: 0,
    label: '',
    value: '',
    options: [],
    inputProps: {},
    labelProps: {},
    disabled: false,
    focus: false,
    placeholder: '',
    type: 'text',
  }

  state = {
    valueSelected: 0,
    optionFilter: [],
    showDropdown: false,
    hoverDropdown: false,
    scrollTop: 0,
  };

  componentWillMount() {
    const { options } = this.props;
    this.setState({
      valueSelected: 0,
      optionFilter: options,
    });
  }

  onInputKeyUp = (e) => {
    const { optionFilter, valueSelected } = this.state;
    const { optionHeight } = this.props;
    let scrollTop = this.state.scrollTop;
    // กดขึ้น = 38
    // กดลง = 40
    // enter = 13
    const keyCode = e.keyCode;

    switch (keyCode) {
      case 38: {
        if (optionHeight) {
          scrollTop -= optionHeight;
          if (scrollTop < 0) scrollTop = 0;
          this.isDropdown.scrollTop = scrollTop;
        }
        this.setState({
          scrollTop,
          valueSelected: (valueSelected - 1) < 0 ? 0 : valueSelected - 1, // ถ้า valueSelected น้อยกว่า 0 ให้ return 0
        });
        break;
      }
      case 40: {
        if (optionHeight) {
          scrollTop += optionHeight;
          if (scrollTop > ((size(optionFilter) - 3) * 30)) scrollTop = ((size(optionFilter) - 3) * 30)
          this.isDropdown.scrollTop = scrollTop;
        }
        
        this.setState({
          scrollTop,
          valueSelected: (valueSelected + 1) > (size(optionFilter) - 1) ? size(optionFilter) - 1 : valueSelected + 1, // ถ้า valueSelected น้อยกว่า 0 ให้ return 0
        });

        break;
      }
      case 13: {
        // value input not null
        const optionSelect = optionFilter.find((obj, i) => i === valueSelected);
        this.hendleSelect(optionSelect)
        break;
      }
      default:
        break;
    }
  }

  onInputBlur = () => {
    const { hoverDropdown } = this.state;
    if (!hoverDropdown) {
      this.setState({
        valueSelected: 0,
        optionFilter: [],
        showDropdown: false,
        scrollTop: 0,
      });
      this.isInputFilter.value = '';
    }
  }

  onMouseOverDropdown = () => {
    this.setState({
      hoverDropdown: true,
    });
  }

  onMouseOutDropdown = () => {
    this.setState({
      hoverDropdown: false,
    });
  }

  focusInputFilter = () => {
    this.onInputChange(this.isInputFilter.value)
  }

  filterOptions = (value) => {
    const { options } = this.props;
    return options.filter((item) => item.label.indexOf(value) >= 0);
  }

  onInputChange = (value) => {
    const filterOptions = this.filterOptions(value);
    this.setState({
      optionFilter: filterOptions ? filterOptions : [],
      valueSelected: 0,
      scrollTop: 0,
      showDropdown: true,
    });
  }

  handleHoverOpction = (id) => {
    this.setState({ valueSelected: id });
  }

  hendleSelect = (obj) => {
    this.props.handleChange(obj);
    this.setState({
      showDropdown: false,
      hoverDropdown: false,
      scrollTop: 0,
    })
  }

  render() {
    const { label, value, disabled, remark, focus, placeholder, name, format, errorMessage, options, inputProps, tabIndex, handleBlur, handleKeyCode } = this.props;
    const { optionFilter, valueSelected, showDropdown, scrollTop } = this.state;
    let valueString = '';

    if (typeof value === 'string') {
      valueString = value;
    } else {
      valueString = value.value ? value.label : '';
    }

    let renderErrorMessage = '';
    let classInput = 'form-input';
    if (!isEmpey(errorMessage)) {
      classInput = 'form-input error';
      renderErrorMessage = (<div className="error-message">{errorMessage}</div>);
    }

    return (
      <div className="select-filter">
        <label htmlFor={label}>{label} {!isEmpey(remark) && (<span className="remark">{remark}</span>)}</label>
        <div className="field-group">
          <input type="text" value={valueString} placeholder={placeholder} className={classInput} onFocus={() => this.focusInputFilter()} />
        </div>
        <div className={`list-options-select ${showDropdown ? 'show' : ''}`} ref={(dom) => this.isDropdown = dom}>
          <div className="field-group-input">
            <input
              ref={(input) => {
                this.isInputFilter = input;
                if (input && showDropdown) {
                  input.focus()
                }
              }}
              type="text"
              className="input-filter"
              disabled={disabled}
              onChange={(e) => this.onInputChange(e.target.value)}
              onKeyUp={(e) => this.onInputKeyUp(e)}
              onBlur={this.onInputBlur}
            />
          </div>
          <div className="box-select" onMouseOver={this.onMouseOverDropdown} onMouseOut={this.onMouseOutDropdown} >
            <ul className="list-items">
              {
                optionFilter.map((obj, i) => {
                  const selected = i === valueSelected;
                  return (<RenderRowOption
                    key={i}
                    selected={selected}
                    handleHoverOpction={this.handleHoverOpction}
                    handleChenge={this.hendleSelect}
                    detail={obj}
                    index={i}
                  />);
                })
              }
            </ul>
          </div>
        </div>
        {this.props.children}
        {renderErrorMessage}
      </div>
    );
  }
}

export class RenderRowOption extends React.PureComponent {
  render() {
    const { selected, index, handleHoverOpction, handleChenge, detail } = this.props;
    return (
      <li className={`item-detail ${selected ? 'selected' : ''}`} >
        <a href="Javascript:;" onMouseOver={() => handleHoverOpction(index)} onClick={() => handleChenge(detail)}>
          <span className="sreach-by">{detail.label}</span>
        </a>
      </li>
    )
  }
}

