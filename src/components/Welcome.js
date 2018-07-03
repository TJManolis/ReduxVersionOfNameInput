import React from "react";
import ReactDOM from "react-dom";

import "../styles.css";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Hello {this.props.firstName}!</h1>;
  }
}

export default Welcome;
