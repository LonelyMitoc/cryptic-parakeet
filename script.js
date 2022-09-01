// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Was going to use it for each instance of null/false but unnecessary
// function cancelChoice(x) {
//   if (!x) {
//     return;
//   }
// }

// function to generate password
function writePassword() {
  var charLength = window.prompt("How long should the password be? (8 to 128 characters)");
  
  // Terminates function if cancel is chosen
  if (charLength === null) {
    return;
  }

  // Alerts and terminates when the length is out of the range
  if (charLength < 8 || charLength > 128 || isNaN(charLength)) {
    window.alert("The input must be between 8 and 128. Please try again.");
    return;
  }

  // Assigns an array of allowed characters and store choices
  var lowerLetters = [];
  var abc = 'abcdefghijklmnopqrstuvwxyz';
  for (i = 0; i < abc.length; i++) {
    lowerLetters[i] = abc.charAt(i);
  }
  var lowerCase = window.confirm("Would you like to include lowercases? ('OK' for Yes and 'Cancel' for No)");
  
  var upperLetters = [];
  for (i = 0; i < abc.length; i++) {
    upperLetters[i] = lowerLetters[i].toUpperCase();
  }
  var upperCase = window.confirm("Would you like to include UPPERCASES?");

  var numDigits = [];
  var numString = '0123456789';
  for (i = 0; i < numString.length; i++) {
    numDigits[i] = numString.charAt(i);
  }
  var numInclude = window.confirm("Would you like to include numbers?");

  var specialCharc = [];
  var specialString = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  for (i = 0; i < specialString.length; i++) {
    specialCharc[i] = specialString.charAt(i);
  }
  var specialChoice = window.confirm("Would you like to include special characters?");

  // Alerts and terminates when no character types are selected
  if (!lowerCase && !upperCase && !numInclude && !specialChoice) {
    window.alert("Must at least choose one character type. Please try again.");
    return;
  }

  // Puts the variables into arrays and a countType to count the selected character types
  var charType = [lowerCase, upperCase, numInclude, specialChoice];
  var charList = [lowerLetters, upperLetters, numDigits, specialCharc];
  var passStore =[];
  var passGen = [];
  var countType = 0;

  // Loop through each charType to check if conditions and add one character from each selected character type to the password storage
  for (var x = 0; x < charType.length; x++) {
    if (charType[x]) {
      var eachChar = [];
      passStore = passStore.concat(charList[x]);
      eachChar.push(charList[x][Math.floor(Math.random() * (charList[x].length))]);
      passGen.push(eachChar);
      countType++
    }
  }

  // Loop through allowed character (eachChar) to push until the length meets the requirement
  var neededChar = charLength - countType;
  for (i = 0; i < neededChar; i++) {
    var random = Math.floor(Math.random() * (passStore.length));
    passGen.push(passStore[random]);
  }

  // random distribute the generated password to scrabble the first few characters that were added
  var randPass = passGen.sort(function() {
    return Math.random() - 0.5;
  })

  // join the generated password into a string
  function generatePassword() {
    return randPass.join('');
  }
  
  generatePassword();

// At first used this function with the lowerCase, etc. set as an array with [boolean, characters] however, with this method we could not guarantee one character from each selected character type.
  // function blankfalse(y) {
  //   if (y[0] != true) {
  //     y[1] = "";
  //   }
  // }
  // blankFalse(lowerCase);
  // blankFalse(upperCase);
  // blankFalse(numInclude);
  // blankFalse(specialChoice);

  // function generatePassword() {
  //   var retVal = "";
  //   for (var i = 0, n = charSet.length; i < charLength; ++i) {
  //     retVal += charSet.charAt(Math.floor(Math.random() * n));
  //   }
  //   return retVal;
  // }

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