const calculateWip = (rate, rateUnit, time, timeUnit) => {
  let rateInSeconds = getRateInSeconds(rate, rateUnit);
  let timeSeconds = getSeconds(time, timeUnit);

  let wip = rateInSeconds * timeSeconds;
  // let greatestUnit = findGreatestUnit(valueOneUnit, timeUnit);

  console.log("rateInSeconds = " + rateInSeconds);
  console.log("timeSeconds = " + timeSeconds);
  // return wip;
  console.log("notROunded " + wip);
  return wip;
};

const findGreatestUnit = (unitOne, unitTwo) => {
  let unitOneSize = getSeconds(1, unitOne);
  let unitTwoSize = getSeconds(1, unitTwo);
  if (unitOneSize >= unitTwoSize) {
    return unitOne;
  } else {
    return unitTwo;
  }
};

const round = value => {
  if (value === 0) {
    return 0;
  }
  if (value.toString().includes("e-")) {
    return roundScientific(value);
  } else if (value.toString().length > 10) {
    if (value.toString().split(".")[0].length > 7) {
      return roundScientific(value.toExponential());
    } else {
      return Math.round(value * 1000) / 1000;
    }
  } else {
    return value;
  }
};

const roundScientific = value => {
  let numArray = value.toString().split("e");

  let numberToRound = Number(numArray[0]);

  let numberToReturn = Math.round(numberToRound * 1000) / 1000;

  return numberToReturn + "e" + numArray[1];
};

const getRateInSeconds = (value, unit) => {
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

const getSeconds = (value, unit) => {
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

export {
  calculateWip,
  findGreatestUnit,
  round,
  roundScientific,
  getRateInSeconds,
  getSeconds
};
