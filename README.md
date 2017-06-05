# React input forms
## Usage
Installation using npm:
```
npm install react-input-forms --save
```

Live demo: [react-input-forms](https://mosliger.github.io/react-input-forms/build/)
css [css](https://mosliger.github.io/react-input-forms/build/react-input.css)
sass [sass](https://mosliger.github.io/react-input-forms/build/sass.rar)


```
import InputField from 'react-input-forms';
....
handleOnBlur = (value, name) => {
  this.setState({ textInput: value })
}
...
const { textInput } = this.state;
....
<InputField
  type="text"
  value={textInput}
  name="textInput"
  label="label Text Input"
  onBlur={this.handleOnBlur}
/>
```
