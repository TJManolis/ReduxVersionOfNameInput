import React from "react";
import Welcome from "../connectedComponents/ConnectedWelcome";
import NameInput from "../connectedComponents/ConnectedNameInput";
import Counter from "./Counter";
import Dropdown from "./Dropdown";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Last Name",
      counterRender: false,
      tablesNames: ["Employee", "Organization"],
      employees: [
        { firstName: "Tom", lastName: "Manolis", employeeId: "2618" },
        { firstName: "Tom", lastName: "Austin", employeeId: "3518" },
        { firstName: "Anthony", lastName: "Sparrow", employeeId: "2613" }
      ]
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
          <Dropdown values={this.state.tablesNames} />
          <Dropdown values={this.state.employees} selectValue="employeeId" />
          <Dropdown
            values={this.state.employees}
            displayValue="firstName"
            selectValue="employeeId"
          />
          <Dropdown
            values={this.state.employees}
            displayValue={["firstName", "poopoo"]}
            selectValue="employeeId"
          />
          <br />
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
