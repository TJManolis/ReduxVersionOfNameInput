import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {
      values,
      displayValue,
      selectValue,
      onChange,
      defaultValue
    } = this.props;

    if (typeof values[0] === "object") {
      return (
        <select onChange={onChange} defaultValue={defaultValue}>
          {values.map((value, index) => (
            <option key={index} value={value[selectValue]}>
              {value[displayValue]}
            </option>
          ))}
        </select>
      );
    } else {
      return (
        <select onChange={onChange} defaultValue={defaultValue}>
          {values.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
      );
    }
  }
}

export default Dropdown;
