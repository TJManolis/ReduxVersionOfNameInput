import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { values, displayValue, selectValue } = this.props;

    if (typeof values[0] === "object") {
      if (displayValue === undefined || displayValue === "") {
        displayValue = selectValue;
      }

      if (typeof displayValue === "object") {
        return (
          <select>
            {values.map((value, index) => {
              var displayString = "";
              displayValue.forEach((prop, index2) => {
                if (index2 > 0) {
                  displayString += " ";
                }
                displayString += value[prop];
              });

              return (
                <option key={index} value={value[selectValue]}>
                  {displayString}
                </option>
              );
            })}
          </select>
        );
      } else {
        return (
          <select>
            {values.map((value, index) => (
              <option key={index} value={value[selectValue]}>
                {value[displayValue]}
              </option>
            ))}
          </select>
        );
      }
    } else {
      return (
        <select>
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
