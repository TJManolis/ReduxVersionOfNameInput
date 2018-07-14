import React from "react";
import Dropdown from "./Dropdown";

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
    console.log(event.target.value);
    this.setState({ ...this.state, throughput: event.target.value });
  };

  changeThroughputUnits = event => {
    console.log(event.target.value);
    this.setState({ ...this.state, throughputUnit: event.target.value });
  };

  changeFlowtime = event => {
    console.log(event.target.value);
    this.setState({ ...this.state, flowtime: event.target.value });
  };

  changeFlowtimeUnits = event => {
    console.log(event.target.value);
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

    let wip = this.calculateWip(
      this.state.throughput,
      this.state.throughputUnit,
      this.state.flowtime,
      this.state.flowtimeUnit
    );

    this.setState({ ...this.state, wip: this.round(wip) });
  };

  calculateWip = (rate, rateUnit, time, timeUnit) => {
    let rateInSeconds = this.getRateInSeconds(rate, rateUnit);
    let timeSeconds = this.getSeconds(time, timeUnit);

    let wip = rateInSeconds * timeSeconds;
    // let greatestUnit = this.findGreatestUnit(valueOneUnit, timeUnit);

    console.log("rateInSeconds = " + rateInSeconds);
    console.log("timeSeconds = " + timeSeconds);
    // return wip;
    console.log("notROunded " + wip);
    return wip;
  };

  findGreatestUnit = (unitOne, unitTwo) => {
    let unitOneSize = this.getSeconds(1, unitOne);
    let unitTwoSize = this.getSeconds(1, unitTwo);
    if (unitOneSize >= unitTwoSize) {
      return unitOne;
    } else {
      return unitTwo;
    }
  };

  round = value => {
    if (value === 0) {
      return 0;
    }
    if (value.toString().includes("e-")) {
      return this.roundScientific(value);
    } else if (value.toString().length > 10) {
      if (value.toString().split(".")[0].length > 7) {
        return this.roundScientific(value.toExponential());
      } else {
        return Math.round(value * 1000) / 1000;
      }
    } else {
      return value;
    }
  };

  roundScientific = value => {
    let numArray = value.toString().split("e");

    let numberToRound = Number(numArray[0]);

    let numberToReturn = Math.round(numberToRound * 1000) / 1000;

    return numberToReturn + "e" + numArray[1];
  };

  getRateInSeconds = (value, unit) => {
    switch (unit) {
      case "seconds":
        return value;
      case "minutes":
        return value / 60;
      case "hours":
        return value / 60 / 60;
      case "days":
        return value / 60 / 60 / 24;
      case "weeks":
        return value / 60 / 60 / 24 / 7;
      case "months":
        return value / 60 / 60 / 24 / 30;
      case "quarters":
        return value / 60 / 60 / 24 / 91;
      case "years":
        return value / 60 / 60 / 24 / 365;

      default:
        return 0;
    }
  };

  getSeconds = (value, unit) => {
    switch (unit) {
      case "seconds":
        return value;
      case "minutes":
        return value * 60;
      case "hours":
        return value * 60 * 60;
      case "days":
        return value * 60 * 60 * 24;
      case "weeks":
        return value * 60 * 60 * 24 * 7;
      case "months":
        return value * 60 * 60 * 24 * 30;
      case "quarters":
        return value * 60 * 60 * 24 * 91;
      case "years":
        return value * 60 * 60 * 24 * 365;

      default:
        return 0;
    }
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
