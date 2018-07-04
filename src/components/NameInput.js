import React from "react";

class NameInput extends React.Component {
  constructor(props) {
    super(props);
  }

  changeFirstName = event => {
    this.props.changeFirstName(event.target.value);
  };

  render() {
    return (
      <div>
        {"First Name: "} <input onChange={this.changeFirstName} />
      </div>
    );
  }
}

export default NameInput;
