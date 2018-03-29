// Business Logic
// var onesArray = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
// var tensArray = ['X', 'XX', 'X-XX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
// var hundredsArray = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
// var thousandsArray = ['M', 'MM', 'MMM'];


// function romanNumeral(input) {
  function romanNumeralI(input) {
    debugger;
    if (input === 1) {
      return "I";
    } else if (input === 2) {
      return "II";
    } else if (input === 3) {
      return "III";
    } else {
      return "I don't know how to do that - my bad..."
    }
  }
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
