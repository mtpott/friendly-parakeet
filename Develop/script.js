// Assignment code here

// when i CLICK the button to generate a password
var promptPassword = function() {

  var promptClick = window.prompt("How many characters would you like to use in your password? You may choose between 8 and 128 characters.");
    //if number entered is less than 8 or greater than 128, inform user that their number is not in range
    if (promptClick < 8 || promptClick > 128) {
      window.alert("Your number is out of our selected range! Please try again");
      //return the function to let the user try again
      return promptPassword;
    } 
}


// i am presented with a series of PROMPTS for password criteria
// when PROMPTED for password criteria
// i select which criteria to include in the password
// when PROMPTED for the length of the password
// i choose a length of at least 8 characters and no more than 128 characters
// when asked for character types to include in the password
// i CONFIRM whether or not to include lowercase, uppercase, numeric, and/or special characters
// when i answer each PROMPT
// my input should be validated and at least one character type should be selected
// when all prompts are answered
// a password is generated that matches the selected criteria
// when the password is generated
// the password is either displayed in an ALERT or written to the page


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
