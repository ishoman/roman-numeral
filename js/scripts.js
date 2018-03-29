// Business Logic
function numberConverter(number) {
  var numArray = number.toString().split('').reverse();
  var numeralArray = ["I", "V", "X", "L", "C", "D", "M"];
  var numerals = "";

  for (var i=0; i < numArray.length; i++){
    var position = parseInt(numArray[i]);
    if (position < 4) {
      for (var j=0; j < position; j++) {
        numerals += numeralArray[0 + (2*i)];
        }
      }
      else if (position < 9 && position >= 5) {
        for (var k=0; k <= position-5; k++) {
          numerals += numeralArray[0 + (2*i)];
        }
      }
      else if (position === 4) {
        numerals += numeralArray[1 + (2*i)] + numeralArray[0 + (2*i)];
      } else if (position === 9) {
        numerals += numeralArray[2 + (2*i)] + numeralArray[0 + (2*i)];
        }
      // console.log(numerals);
  }
  var splitArray = numerals.split("").reverse();
  var output = splitArray.join("");
  return output;
};


//user Interface
$(document).ready(function() {
  $("form#roman-numeral").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#input").val());
    var romanNumeral1 = numberConverter(number);
    $("#result").text(romanNumeral1);
    debugger;

  });
});













// function romanNumeral(input) {
//   function romanNumeral1(input) {
//     for (var i=0;i<2;i++) {
//       if (input === 1) {
//         return "I";
//       } else if (input === 2) {
//         return "II"; {
//       } else if (input === 3) {
//         return "III"; {
//       } else if (input === 4) {
//         return "IV"
//       }
//     }

function romanNumeral(input) {
  if (input === 1) {
      return "I";
    } else if (input === 2) {
      return "II";
    } else if (input === 3) {
      return "III";
    } else if (input === 5) {
      return "V";
    }  else if (input === 10) {
      return "X";
    } else if (input === 20) {
      return "XX";
    } else if (input === 30) {
      return "XXX";
    } else if (input === 50) {
      return "L";
    }  else if (input === 100) {
      return "C";
    } else if (input === 200) {
      return "CC";
    } else if (input === 300) {
      return "CCC";
    } else if (input === 500) {
      return "D";
    }  else if (input === 1000) {
      return "M";
    } else if (input === 2000) {
      return "MM";
    } else if (input === 3000) {
      return "MMM";
    } else {
      return "I don't know how to do that - my bad..."
    }
  }

//Front end Logic
$(document).ready(function() {
  $("form#roman-numeral").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#input").val());
    var romanNumeral1 = romanNumeral(input);
    $("#result").text(romanNumeral1);
  });
});

//Helper Functions
// var returnsI = function(ones) {
//   if (ones === 1 || ones === 2 || ones === 3) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// var returnsV = function(fives) {
//   if (fives === 5) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// var returnsX = function(tens) {
//   if (tens === 10 || tens === 20 || tens === 30) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// var returnsL = function(fifties) {
//   if (fifties === 50) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// var returnsC = function(hundreds) {
//   if (hundreds === 100 || hundreds === 200 || hundreds === 300) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// var returnsD = function(fiveHundred) {
//   if (fiveHundred === 500) {
//     return true;
//   } else {
//     return false;
//   }
// }
// var returnsM = function(thousands) {
//   if (thousands === 1000 || thousands === 2000 || thousands === 3000) {
//     return true;
//   } else {
//     return false;
//   }
// }
