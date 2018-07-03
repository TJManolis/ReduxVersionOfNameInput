import React from "react";
import { connect } from "react-redux";

import "../styles.css";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { firstName, lastName } = this.props;
    return <h1>Hello {lastName + ", " + firstName}!</h1>;
  }
}

let mapStateToProps = state => {
  return { firstName: state.firstName };
};

const ConnectedWelcome = connect(mapStateToProps)(Welcome);
export default ConnectedWelcome;
