var chalk = require("chalk");
var arrayToLowerCase = require("array-to-lower-case")

var s = chalk.blue("Hi!")

function ManipulateSubstring(){
  // Private Methods
}

// Class methods
ManipulateSubstring.colorize = function(color, stringToColor, sentence){
  stringToColor= stringToColor.toLowerCase()
  var arr = sentence.split(" ")

  var lowerCaseArray = arrayToLowerCase(arr)
  var stringIndex = lowerCaseArray.indexOf(stringToColor)

  arr[stringIndex] = chalk[color](arr[stringIndex])

  var newString = arr.join(" ")
  return newString
}

module.exports = ManipulateSubstring
