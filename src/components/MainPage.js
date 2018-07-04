import React from "react";
import Welcome from "../connectedComponents/ConnectedWelcome";
import NameInput from "../connectedComponents/ConnectedNameInput";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Last Name"
    };
  }

  render() {
    return (
      <div className="App">
        <Welcome lastName={this.state.firstName} />
        <NameInput />
      </div>
    );
  }
}

export default MainPage;
