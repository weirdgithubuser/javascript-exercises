function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

const convertToCelsius = function(fahr) {
  return round((( fahr - 32) * (5/9)), 1);
};

const convertToFahrenheit = function(cels) {
  return round((((9/5) * cels) + 32),1) ;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
