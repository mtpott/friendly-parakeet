// Assignment code here

// // when i CLICK the button to generate a password
// var generatePassword = function() {
//   var promptClick = window.prompt("How many characters would you like to use in your password? You may choose between 8 and 128 characters.");
//     //if number entered is less than 8 or greater than 128, inform user that their number is not in range
//     if (promptClick < 8 || promptClick > 128) {
//       window.alert("Your number is out of our selected range! Please try again");
//       //return the function to let the user try again
//       return generatePassword;
//     } 
// }


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

    function generatePassword(){
    var promptClick = window.prompt("How many characters would you like to use in your password? You may choose between 8 and 128 characters. Please enter your choice below.");
    //if number entered is less than 8 or greater than 128, inform user that their number is not in range
    if (promptClick < 8 || promptClick > 128) {
        window.alert("Your number is out of our selected range! Please choose again.");
        //return the function to let the user try again
        return generatePassword();
    }
    //i confirm whether or not to include lowercase (true/false)
    var lowCaseConfirm = window.confirm("Would you like to use lowercase characters?");
    //if true, inform user they decided to use lowercase characters and return true
    if (lowCaseConfirm) {
        window.alert("You have decided to use lowercase characters.");
        return true;
    };
    //confirm uppercase characters (true/false)
    var upCaseConfirm = window.confirm("Would you like to use uppercase characters?");
      if (upCaseConfirm) {
      //if true, inform user they decided to use uppercase characters and return true
          window.alert("You have decided to use uppercase characters.");
          return true;
      };
    //confirm numeric values (true/false)
    var numConfirm = window.confirm("Would you like to use numeric values?");
      if(numConfirm) {
      //if true, inform user they decided to use numeric values and return true
        window.alert("You have decided to use numeric values.");
        return true;
      };
    //confirm special characters (true/false)
    var charConfirm = window.confirm("Would you like to use special characters?");
    if (charConfirm) {
    //if true, inform user they decided to use special characters and return true
        window.alert("You have decided to use special characters.");
        return true;
      };
    }    
}

  //using the selections above, use the function to create the password with Math.random()
  function getRandomPassword() {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const special = " !#$%&'()*+,-./:;,=>?@[\]^_`{|}~";
    const num = "1234567890";
    const len = 0;

    //use a for loop and Math.random() to generate a random string
    for (var i = 0; i < len; i++) {
        var randomString = Math.floor(Math.random() * alphabet.length * special.length * num.length);
        return randomString;
    }
  }


  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//create password!  
writePassword();
  