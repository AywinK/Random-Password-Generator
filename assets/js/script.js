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

  var passwordLength = prompt("Enter required password length as a number");
  if (passwordLength < 10 || passwordLength > 64) {
    passwordLength = prompt("Password length must be between 10 and 64 characters inclusive.");
    console.log("successfully failed");
  } else {
    console.log("valid password length");
  }
  console.log(`Current passwordLength: ${passwordLength}`);

  var requireSpecialCharacters = confirm("Would you like special characters?");
  var requireNumbers = confirm("Would you like numbers?");
  var requireLowerCasedCharacters = confirm("Would you like lowercase characters");
  var requireUpperCasedCharacters =  confirm("Would you like uppercase characters?");

  var requiredChars = {
    requireSpecialCharacters: requireSpecialCharacters,
    requireNumbers: requireNumbers,
    requireLowerCasedCharacters: requireLowerCasedCharacters,
    requireUpperCasedCharacters: requireUpperCasedCharacters,
  }

  if (for (value in requiredChars))

  console.log(requiredChars);
}

// testing getPasswordOptions()
getPasswordOptions()

// Function for getting a random element from an array
function getRandom(arr) {

}

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