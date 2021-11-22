// Assignment code here
var x = 0;
var passwordLength;
var strCharsTotal = "";
var arrayCharacters = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "abcdefghijklmnopqrstuvwxyz",
  "0123456789",
  ' !"#$%&()*+,-./:;<=>?@[]^_`{|}~',
];
var checkIfUsed = [];



function generatePassword() {

//Loops through while and checks if value boolean in the array and concatenates it if it's true
  while (x < 4) {

    //checks array value is true and adds to string
    if (checkIfUsed[x] === true) {
      strCharsTotal += arrayCharacters[x];
    }
    x++;
  };

  var newPassword = "";

  //runs till i is equal to password length then and each time adds a random character to a new string to form the new password
  for (var i, i = 0; i < passwordLength; i++) {
    newPassword += strCharsTotal.charAt(Math.floor(Math.random() * strCharsTotal.length));
  }

// returns the password to be displayed
  return newPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //Reset Value to zero/empty
  x = 0;
  var passwordText = document.querySelector("#password");
  strCharsTotal = "";


  // Prompts to determine what characters to be used
  checkIfUsed[0] = window.confirm("Use Upper case Characters?");

  checkIfUsed[1] = window.confirm("Use Lower case Characters?");

  checkIfUsed[2] = window.confirm("Use Numeric Characters?");

  checkIfUsed[3] = window.confirm("Use Special Characters?");

  passwordLength = window.prompt("Choose Password Length 8 - 128");

  window.alert("Generating Password");

  generatePassword();

  var password = generatePassword();

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
