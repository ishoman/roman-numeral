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

// }

//Helper Functions
var returnsI = function(ones) {
  if (ones === 1 || ones === 2 || ones === 3) {
    return true;
  } else {
    return false;
  }
}

var returnsV = function(fives) {
  if (fives === 5) {
    return true;
  } else {
    return false;
  }
}

var returnsX = function(tens) {
  if (tens === 10 || tens === 20 || tens === 30) {
    return true;
  } else {
    return false;
  }
}

var returnsL = function(fifties) {
  if (fifties === 50) {
    return true;
  } else {
    return false;
  }
}

var returnsC = function(hundreds) {
  if (hundreds === 100 || hundreds === 200 || hundreds === 300) {
    return true;
  } else {
    return false;
  }
}

var returnsD = function(fiveHundred) {
  if (fiveHundred === 500) {
    return true;
  } else {
    return false;
  }
}
var returnsM = function(thousands) {
  if (thousands === 1000 || thousands === 2000 || thousands === 3000) {
    return true;
  } else {
    return false;
  }
}






// JQuery User Interface Logic
$(document).ready(function() {
  $("form#roman-numeral").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#input").val());
    var romanNumeral1 = romanNumeralI(input);
    $("#result").text(romanNumeral1);

  });

});
