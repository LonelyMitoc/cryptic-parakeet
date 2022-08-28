// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function cancelChoice(x) {
  if (!x) {
    return;
  }
}

// Write password to the #password input
function writePassword() {
  var charLength = window.prompt("How long should the password be? (8 to 128 characters)");
  
  // Terminates function if cancel is chosen
  if (charLength === null) {
    return;
  }

  // Alerts and terminates when the length is out of the range
  if (charLength < 8 || charLength > 128) {
    window.alert("The selected length is out of the parameter. Please try again");
    return;
  }

  // Assigns an array of boolean for the confirm choices and allowed characters
  var lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
  var lowerCase = [window.confirm("Would you like to include lowercases?"), lowerLetters];
  
  var upperLetters = lowerLetters.toUpperCase();
  var upperCase = [window.confirm("Would you like to include UPPERCASES?"), upperLetters];

  var numDigits = '0123456789';
  var numInclude = [window.confirm("Would you like to include numbers?"), numDigits];

  var specialCharc = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var specialChoice = [window.confirm("Would you like to include special characters?"), specialCharc];

  // Deletes the character set if 'cancel' was selected in the window.confirm
  function blankFalse(y) {
    if (y[0] == false) {
      y[1] = "";
    }
  }

  blankFalse(lowerCase);
  blankFalse(upperCase);
  blankFalse(numInclude);
  blankFalse(specialChoice);

  function generatePassword() {
    var charSet = lowerCase[1] + upperCase[1] + numInclude[1] + specialChoice[1];
    var retVal = ""
    for (var i = 0, n = charSet.length; i < charLength; ++i) {
      retVal += charSet.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  generatePassword();

  // Used to check console if the variables were showing the correct elements
  // console.log(lowerCase);
  // console.log(upperCase);
  // console.log(numInclude);
  // console.log(specialChoice);

  // Show the generated password on the website
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
