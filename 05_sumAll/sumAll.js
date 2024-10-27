const sumAll = function (min, max) {
  function isPositveInteger(num) {
    return Number.isInteger(num) && num > 0;
  }
  if (!isPositveInteger(min) || !isPositveInteger(max)) return "ERROR";
  let sum = 0;
  let actual_min = Math.min(min, max);
  let actual_max = Math.max(min, max);
  for (let i = actual_min; i <= actual_max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
