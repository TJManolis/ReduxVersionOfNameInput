import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";
import NameInput from "./NameInput";

import "../styles.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Tom"
    };
  }

  namechange = event => {
    console.log(event.target.value);
    this.setState({ ...this.state, firstName: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Welcome firstName={this.state.firstName} />
        <NameInput namechange={this.namechange} />
      </div>
    );
  }
}

export default MainPage;
