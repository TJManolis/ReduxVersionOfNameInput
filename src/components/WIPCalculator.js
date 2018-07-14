import React from "react";
import Dropdown from "./Dropdown";
import { calculateWip, round } from "../helpers/CalculatorHelpers";

class WIPCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      units: [
        { unit: "seconds" },
        { unit: "minutes" },
        { unit: "hours" },
        { unit: "days" },
        { unit: "weeks" },
        { unit: "months" },
        { unit: "quarters" },
        { unit: "years" }
      ],
      throughput: 0,
      throughputUnit: "seconds",
      flowtime: 0,
      flowtimeUnit: "seconds",
      wip: 0
    };
  }
  changeThroughput = event => {
    this.setState({ ...this.state, throughput: event.target.value });
  };

  changeThroughputUnits = event => {
    this.setState({ ...this.state, throughputUnit: event.target.value });
  };

  changeFlowtime = event => {
    this.setState({ ...this.state, flowtime: event.target.value });
  };

  changeFlowtimeUnits = event => {
    this.setState({ ...this.state, flowtimeUnit: event.target.value });
  };

  clickCalculate = () => {
    console.log("Hey Kids I'm a computer");

    console.log(
      "Throughput: " + this.state.throughput + " " + this.state.throughputUnit
    );

    console.log(
      "Flowtime: " + this.state.flowtime + " " + this.state.flowtimeUnit
    );

    let wip = calculateWip(
      this.state.throughput,
      this.state.throughputUnit,
      this.state.flowtime,
      this.state.flowtimeUnit
    );

    this.setState({ ...this.state, wip: round(wip) });
  };
  render() {
    return (
      <div className="App">
        <h1>Calculate WIP</h1>
        <div>
          <h5>Throughput</h5>
          <input onChange={this.changeThroughput} />
          <Dropdown
            values={this.state.units}
            displayValue="unit"
            selectValue="unit"
            onChange={this.changeThroughputUnits}
          />
        </div>
        <br />
        <div>
          <h5>Flowtime</h5>
          <input onChange={this.changeFlowtime} />
          <Dropdown
            values={this.state.units}
            displayValue="unit"
            selectValue="unit"
            onChange={this.changeFlowtimeUnits}
          />
        </div>
        <br />
        <button onClick={this.clickCalculate}>Calculate</button>
        <br />
        <br />
        <h1>WIP = {this.state.wip}</h1>
      </div>
    );
  }
}

export default WIPCalculator;
