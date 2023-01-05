// Assignment Code
var generateBtn = document.querySelector("#generate");


var passCriteria = {

  passLength: 0,

  passUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  
  passLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  
  passCharacters: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"], 
  // 32 special characters total
  
  passNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}

function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Updates new password in text boxx
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Defining generate password function
function generatePassword(result) {

  
  // Variable for password result
  var result = "";
  
  // User input prompt variables
  var passwordLength;
  var numbers;
  var specialChars;
  var upperCase;
  var lowerCase;

  passwordLength = 0;
  passCriteria.passLength = 0;
  result = "";


  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters would you like your new password to be? \nMust be between 8 and 128 characters.");

    if (passwordLength === null) {
      return "Your Secure Password";
    }
    else {
      if (passwordLength === NaN) {
        alert("You did not enter a number. Please enter a number to proceed.");
        return "Your Secure Password";
      }
      else {
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Your password must be between 8 and 128 characters in length.");
          return "Your Secure Password";
        }
        else {
          
          
          showPrompts();

          while (passCriteria.passLength < passwordLength) {
            if (lowerCase === false && upperCase === false && specialChars === false && numbers === false) {
              alert("At least one criteria must be selected. Please select either uppercase, lowercase, special characters, or numbers.")
              showPrompts();
            }
            else {
              if (upperCase === true ) {
                var uc = passCriteria.passUpperCase[Math.floor(Math.random() * 26)]
                result = result + uc;
                passCriteria.passLength++;
              }
              if (lowerCase === true ) {
                var lc = passCriteria.passLowerCase[Math.floor(Math.random() * 26)]
                result = result + lc;
                passCriteria.passLength++;
              }           
              if (specialChars === true ) {
                var sc = passCriteria.passCharacters[Math.floor(Math.random() * 32)]
                result = result + sc;
                passCriteria.passLength++;
              }
              if (numbers === true ) {
                var num = passCriteria.passNumbers[Math.floor(Math.random() * 10)]
                result = result + num;
                passCriteria.passLength++;
              }
            }
          }
        }
      }
    }

    function showPrompts() {
      upperCase = confirm("Would you like for your new password to include uppercase letters?");
      lowerCase = confirm("Would you like for your new password to include lowercase letters?");
      specialChars = confirm("Would you like for your new password to include special characters?");
      numbers = confirm("Would you like for your new password to include numbers?");
      
  return result;
    }
  }
}
