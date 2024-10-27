const reverseString = function (string) {
  let arrayed_string = string.split("");
  let reversed_string = "";
  for (let i = arrayed_string.length - 1; i >= 0; i--) {
    reversed_string = reversed_string + arrayed_string[i];
  }
  return reversed_string;
};

// Do not edit below this line
module.exports = reverseString;
