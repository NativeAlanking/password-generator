// Assignment code here
var passwordLength;
var passwordSpecialChar;

function generatePassword() {
  return("Test");
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// new code
  passwordSpecialChar = window.confirm("Use Special Characters?")

  passwordLength = window.prompt("Choose Password Length 8 - 128");

  window.alert("Generating Password");

  generatePassword();

  console.log(passwordLength, passwordSpecialChar);



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function writePassword() {

//   passwordSpecialChar = window.confirm("Use Special Characters?")

//   passwordLength = window.prompt("Choose Password Length 8 - 128");

//   window.alert("Generating Password");

//   generatePassword();

//   console.log(passwordLength, passwordSpecialChar);
// }

