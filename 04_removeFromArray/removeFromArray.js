const removeFromArray = function (arr, ...args) {
  const arrSet = new Set(arr);
  const argsSet = new Set(args);
  arr = Array.from(arrSet);
  args = Array.from(argsSet);
  for (i of args) {
    let index = arr.indexOf(i);
    if (index > -1) {
      arr.splice(index, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
