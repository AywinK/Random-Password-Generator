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
  // object to return if password options not within criteria
  var passOptionsFailed = {
    passwordLength: 0,
    requiredCharsOutput: []
  }
  // password length selection with switch case variables
  var passwordLength = prompt("Enter required password length as a number (Must be between 10 and 64 inclusive)");
  var passwordLengthAccepted = (passwordLength >= 10 && passwordLength <= 64);
  var userCancelledPrompt = (passwordLength === null);
  // switch case for password length verification
  switch (true) {
    case (passwordLengthAccepted):
      passwordLength = Math.floor(Number(passwordLength));
      console.log(`
      valid password length
      Current passwordLength: ${passwordLength}
      data type: ${typeof passwordLength}
      `);
      break;
    case (userCancelledPrompt):
      console.log("cancelled password length prompt by user");
      alert("Press Generate Password to choose requirements again.")
      return passOptionsFailed
    default:
      alert("Password length must be between 10 and 64 characters long. You must enter as a number. Press the generate password button again to select password criteria.");
      console.log("user did not not meet password length requirement");
      return passOptionsFailed
  }
  // object containing properties of character set within an array value with array[0] being name and array[1] being character set 
  var charsOptions = {
    specialCharProp: ["special characters", specialCharacters],
    numsCharProp: ["numbers", numericCharacters],
    lowercaseCharProp: ["lowercase letters", lowerCasedCharacters],
    uppercaseCharProp: ["uppercase letters", upperCasedCharacters]
  }
  // object returned when user chooses valid criteria for random password generation
  var charsCriteria = {
    passwordLength: passwordLength,
    requiredCharsOutput: []
  }
  // asks user for character type requirements and updates charsCriteria
  for (prop in charsOptions) {
    var charsetIsRequired = confirm(`Would you like to include ${charsOptions[prop][0]}?`);
    if (charsetIsRequired) {
      charsCriteria.requiredCharsOutput.splice(0, 0, ...charsOptions[prop][1]);
    }
  }
  // checks atleast one character type is selected
  var noCharsSelected = (charsCriteria.requiredCharsOutput.length === 0);
  // returns appropriate object
  if (noCharsSelected) {
    alert("You must select atleast one character type. Press generate password again to continue.");
    console.log("no character type is selected by user");
    return passOptionsFailed
  } else {
    console.log("atleast one character type is selected by user");
    console.log(`object returned for password generation: ${charsCriteria}`);
    return charsCriteria
  }
}

// Function for getting a random element from an array assumed safe from errors due to getPasswordOptions() function
function getRandom(arr) {
  var arrayLength = arr.length;
  var indexSelector = Math.floor(Math.random() * arrayLength);
  var randomElement = arr[indexSelector];
  return randomElement
}

// Function to generate password with user input
function generatePassword() {
  var passwordReqs = getPasswordOptions();
  var passwordLength = passwordReqs.passwordLength;
  var requiredCharsOutput = passwordReqs.requiredCharsOutput;
  var passwordArray = [];
  var i = 0;
  var randomElement = [];

  while (i < passwordLength) {
    randomElement = getRandom(requiredCharsOutput);
    console.log(randomElement);
    passwordArray.push(randomElement);
    i++;
  }
// converts password array to string and returns password
  password = passwordArray.join(``);
  console.log(password);
  return password
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