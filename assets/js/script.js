// Assignment code here
var passwordLength;
var strCharsTotal
var aryCharacters = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "abcdefghijklmnopqrstuvwxyz",
  "0123456789",
  ' !"#$%&()*+,-./:;<=>?@[]^_`{|}~',
];
var checkIfUsed = [];



function generatePassword() {
  return "Test";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // new code

  checkIfUsed[0] = window.confirm("Use Lower case Characters?");

  checkIfUsed[1] = window.confirm("Use Upper case Characters?");

  checkIfUsed[2] = window.confirm("Use Numeric Characters?");

  checkIfUsed[3] = window.confirm("Use Special Characters?");

  passwordLength = window.prompt("Choose Password Length 8 - 128");

  window.alert("Generating Password");

  generatePassword();

  console.log(
    "Password: Length " +
      passwordLength +
      " Use Special: " +
      checkIfUsed[3] +
      " UpperCase: " +
      checkIfUsed[1] +
      " LowerCase: " +
      checkIfUsed[0] +
      " Numeric: " +
      checkIfUsed[2]
  );
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
