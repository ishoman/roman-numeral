// Business Logic
// var onesArray = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
// var tensArray = ['X', 'XX', 'X-XX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
// var hundredsArray = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
// var thousandsArray = ['M', 'MM', 'MMM'];


// function romanNumeral(input) {
  function romanNumeralI(input) {
  if (input === 1) {
      return "I";
    } else if (input === 2) {
      return "II";
    } else if (input === 3) {
      return "III";
    }  else if (input === 10) {
      return "X";
    } else if (input === 20) {
      return "XX";
    } else if (input === 30) {
      return "XXX";
    } else {
      return "I don't know how to do that - my bad..."
    }
  }

// }

//Helper Functions
// var returnsI = function(ones) {
//   if (ones === 1 || ones === 2 || ones === 3) {
//     return true;
//   } else {
//     return false;
//   }
// }






// JQuery User Interface Logic
$(document).ready(function() {
  $("form#roman-numeral").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#input").val());
    var romanNumeral1 = romanNumeralI(input);
    $("#result").text(romanNumeral1);

  });

});
