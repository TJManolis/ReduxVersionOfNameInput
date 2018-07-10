import React from "react";
import Welcome from "../connectedComponents/ConnectedWelcome";
import NameInput from "../connectedComponents/ConnectedNameInput";
import Counter from "./Counter";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Last Name",
      counterRender: false
    };
  }

  clickToggleComponents = event => {
    this.setState({ ...this.state, counterRender: !this.state.counterRender });
  };

  render() {
    if (this.state.counterRender === false) {
      return (
        <div className="App">
          <Welcome lastName={this.state.firstName} />
          <NameInput />
          <button onClick={this.clickToggleComponents}>Toggle</button>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>Welcome To the COUNTER APP! CLICK AWAY!!!!</h1>
          <Counter />
          <button onClick={this.clickToggleComponents}>Toggle</button>
        </div>
      );
    }
  }
}

export default MainPage;
