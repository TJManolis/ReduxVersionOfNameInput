const unitSecondsMap = {
  seconds: 1,
  minutes: 60,
  hours: 3600,
  days: 86400,
  weeks: 604800,
  months: 2628000,
  quarters: 7884000,
  years: 31536000
};

/**
 * calculationType: "Throughput" or 'Takt'
 * vale:
 * When calculationTpe is 'Takt' this should be how long it takes to create one unit.
 * When calculationTpe is 'Throughput' this should be how many units are created in the givent tiemframe.
 */
const calculateWip = (calculationType, value, valueUnits, time, timeUnit) => {
  let timeSeconds = unitSecondsMap[timeUnit] * time;
  let rateInSeconds;
  if (calculationType === "Takt") {
    rateInSeconds = unitSecondsMap[valueUnits] / value;
  } else {
    // Throughput
    rateInSeconds = value / unitSecondsMap[valueUnits];
  }
  let wip = rateInSeconds * timeSeconds;
  return round(wip);
};

const round = value => {
  if (value === 0) {
    return 0;
  }
  if (value.toString().includes("e")) {
    // raw scientific  value rounding
    return roundScientific(value);
  } else if (value.toString().length > 10) {
    if (value.toString().split(".")[0].length > 7) {
      //pre decimal rounding
      return roundScientific(value.toExponential());
    } else {
      //post decimal rounding
      return Math.round(value * 1000) / 1000;
    }
  } else {
    // Small (non scientific) values under total length 10
    return value;
  }
};

const roundScientific = value => {
  let numArray = value.toString().split("e");

  let numberToRound = Number(numArray[0]);

  let numberToReturn = Math.round(numberToRound * 1000) / 1000;

  return numberToReturn + "e" + numArray[1];
};

export { calculateWip, roundScientific, unitSecondsMap };
