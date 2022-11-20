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

  var passOptionsFailed = {
    passwordLength: 0,
    requiredCharsOutput: []
  }

  // password length selection with verification
  var passwordLength = prompt("Enter required password length as a number (Must be between 10 and 64 inclusive)");

  switch (true) {
    case (passwordLength >= 10 && passwordLength <= 64):
      console.log("valid password length");
      break;
    case (passwordLength === null):
      console.log("cancelled password length prompt by user");
      alert("Press Generate Password to choose requirements again.")
      return passOptionsFailed
    default:
      alert("Password length must be between 10 and 64 characters long. You must enter as a number. Press the generate password button again to select password criteria.");
      console.log("user did not not meet password length requirement");
      return passOptionsFailed
  }


  console.log(`Current passwordLength: ${passwordLength}`);



  var requiredChars = {
    specialCharProp: confirm("Would you like to include special characters?"),
    numsCharProp: confirm("Would you like to include numbers?"),
    lowercaseCharProp: confirm("Would you like to include lowercase letters?"),
    uppercaseCharProp: confirm("Would you like to include uppercase letters?")
  };

  var requiredCharsOutput = [];

  for (var prop in requiredChars) {
    console.log(typeof prop);
    console.log(prop);
    if (requiredChars[prop] === true) {
      switch (prop) {
        case "specialCharProp":
          requiredCharsOutput.splice(0, 0, ...specialCharacters);
          break;
        case "numsCharProp":
          requiredCharsOutput.splice(0, 0, ...numericCharacters);
          break;
        case "lowercaseCharProp":
          requiredCharsOutput.splice(0, 0, ...lowerCasedCharacters);
          break;
        case "uppercaseCharProp":
          requiredCharsOutput.splice(0, 0, ...upperCasedCharacters);
          break;
        default:
          console.log(`Unknown property in requiredChars with value "true" called: ${prop}. Property is ignored`)
      }
    } else {
      console.log(`${prop} is false`);
    }
    console.log(`finished iterating over property (from requiredChars Object): ${prop}`);
  }

  console.log(requiredCharsOutput);
  console.log(`array size of requiredCharsOutput: ${requiredCharsOutput.length}`);


  if (requiredCharsOutput.length === 0) {
    alert("You must select atleast one character type. Press generate password again to continue.");
    console.log("no character type is selected by user");
    return passOptionsFailed
  } else {
    console.log("atleast one character type is selected by user");
    return {
      passwordLength: passwordLength,
      requiredCharsOutput: requiredCharsOutput
    }
  }
}



// Function for getting a random element from an array
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