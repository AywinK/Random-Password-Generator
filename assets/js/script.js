// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  // password length selection with verification
  var passwordLength = prompt("Enter required password length as a number");
  if (passwordLength < 10 || passwordLength > 64) {
    passwordLength = alert("Password length must be between 10 and 64 characters inclusive.");
    console.log("successfully failed and user warned about not meeting password length requirement");
  } else {
    console.log("valid password length");
  }
  console.log(`Current passwordLength: ${passwordLength}`);

  // character selection confirms with verification
  // prompt function
  function promptForRequiredChars() {
    var requireSpecialCharacters = confirm("Would you like special characters?");
    var requireNumbers = confirm("Would you like numbers?");
    var requireLowerCasedCharacters = confirm("Would you like lowercase characters");
    var requireUpperCasedCharacters = confirm("Would you like uppercase characters?");

    var requiredChars = {
      specialCharProp: requireSpecialCharacters,
      numsCharProp: requireNumbers,
      lowercaseCharProp: requireLowerCasedCharacters,
      uppercaseCharProp: requireUpperCasedCharacters
    };
    return requiredChars
  }

  var requiredChars = promptForRequiredChars();
  console.log(requiredChars);
  var requiredCharsArray = Object.values(requiredChars); 

  // test function for an array element being false
  function NoCharsSelected(currentBoolean) {
    var isCharSelectFalse = (currentBoolean == false);
    console.log(`is char select false: ${isCharSelectFalse}`)
    return isCharSelectFalse
  }

  // checks if every array element is false
  if (requiredCharsArray.every(NoCharsSelected)) {
    console.log("no character type selected by user");
    return alert("You must select atleast one character type");
  } else {
    console.log("atleast one character type is selected by user");
  }

  return {
    passwordLength: passwordLength,
    requiredChars: requiredChars,
  }
}


// testing getPasswordOptions()
var passwordReqs = getPasswordOptions();
console.log(passwordReqs);

// Function for getting a random element from an array
function getRandom(arr) {

}

// testing getRandom(arr)

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);