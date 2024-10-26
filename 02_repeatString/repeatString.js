const repeatString = function(string, num) {
  if (num > 0) {
    let holder = "";
    for (let i = 0; i < num; i++) {
      holder += string;
    }
    return holder;
  } else if (num === 0) {
    return "";
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
