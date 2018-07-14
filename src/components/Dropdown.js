import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { values, displayValue, selectValue, onChange } = this.props;

    return (
      <select onChange={onChange}>
        {values.map((value, index) => (
          <option key={index} value={value[selectValue]}>
            {value[displayValue]}
          </option>
        ))}
      </select>
    );
  }
}

export default Dropdown;
