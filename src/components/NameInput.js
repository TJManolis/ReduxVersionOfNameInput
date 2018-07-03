import React from "react";
import { connect } from "react-redux";
import { changeFirstName } from "../actions/actions";

import "../styles.css";

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

let mapDispatchToProps = dispatch => {
  return { changeFirstName: firstName => dispatch(changeFirstName(firstName)) };
};

const ConnectedNameInput = connect(null, mapDispatchToProps)(NameInput);

export default ConnectedNameInput;
