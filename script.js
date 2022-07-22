// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate a password
function generatePassword() {
  // generated password length will be set by the validateLength() function. validateLength() will return a valid number.
  var passwordLength = validateLength();

  // create a characterType boolean that represents whether the user input a required character type. One character type is required to make it true
  var characterType = false;
  // while characterType is still false run the loop confirming for a characterType input of their desire. When one is confirmed the loop will end
  while (!characterType) {
    var isLower = confirm("Would you like your password to include lowercase characters?");
    var isUpper = confirm("Would you like your password to include uppercase characters?");
    var isNumeric = confirm("Would you like your password to include numerics?");
    var isSpecialCharacters = confirm("Would you like your password to include special characters?");
    if (isLower || isUpper || isNumeric || isSpecialCharacters) {
      characterType = true;
    }
    else {
      alert("Please select at least one character type")
    }
  }

  // create an array that will be the length specified by the user and each element will have a randomly generated number
  // the generated number will then be converted to a character and concatonated on the password
  var passwordArray = [];
  passwordArray.length = passwordLength;
  for (var i = 0; i < passwordArray.length; i++) {
    passwordArray[i] = String.fromCharCode(getRandomInt(95) + 31);
    console.log(passwordArray[i]);
  }

  // create the password string and concatonate the generated numbers together in the passwordArray to form one password
  var password = "";
  for (var i = 0; i < passwordArray.length; i++) {
    password += passwordArray[i];
  }

  // return the generated password
  return password;
}

// Random int generator
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Validate passowrd length
function validateLength() {
  while (true) {
    var tempPasswordLength = prompt("How many characters for your password? Min = 8 characters, Max = 128 characters");
    if (tempPasswordLength == 0) {
      alert("Please don't leave the field empty");
    }
    else if (tempPasswordLength < 8) {
      alert("Please choose a password with a minimum length of 8 characters");
    }
    else if (tempPasswordLength > 128) {
      alert("Please choose a password with a maximum length of 128 characters");
    }
    else if (isNaN(tempPasswordLength)) {
      alert("Please choose a number for the password length");
    } 
    else {
      return tempPasswordLength;
    }
  }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
