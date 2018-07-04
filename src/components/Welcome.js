import React from "react";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { firstName, lastName } = this.props;
    return <h1>Hello {lastName + ", " + firstName}!</h1>;
  }
}

export default Welcome;
