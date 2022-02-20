
//when i refresh the browser, i do not want my writePassword() function to run UNTIL i click the button. 
    //lol don't run the function at the end of the code because it'll just run immediately which i didn't want!

    var lowCase = "abcdefghijklmnopqrstuvwxyz";
    var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var special = " !#$%&'()*+,-./:;,=>?@[\]^_`{|}~";
    var num = "1234567890";
    var finalString = "";

    var promptClick;
    var lowCaseConfirm;
    var upCaseConfirm;
    var numConfirm;
    var charConfirm;

    var password = generatePassword(); 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

      // i am presented with a series of PROMPTS for password criteria
      // when PROMPTED for password criteria
      // i select which criteria to include in the password
      // when PROMPTED for the length of the password
      // i choose a length of at least 8 characters and no more than 128 characters
  function charPrompt() {
    promptClick = window.prompt("How many characters would you like to use in your password? You may choose between 8 and 128 characters. Please enter your choice below.");
    //if number entered is less than 8 or greater than 128, proceed to lowercase confirm
    if (promptClick > 7 && promptClick < 129) {
      (lowCaseConfirm);
    } else {
        window.alert("Your number is out of our selected range! Please choose again.");
        return charPrompt();
    }

    // when asked for character types to include in the password
    // i CONFIRM whether or not to include lowercase, uppercase, numeric, and/or special characters
    // when i answer each PROMPT
    // my input should be validated and at least one character type should be selected

    //i confirm whether or not to include lowercase (true/false)
    lowCaseConfirm = window.confirm("Would you like to use lowercase characters? Select 'OK' to confirm.");
    //if true, inform user they decided to use lowercase characters and return true
    if (lowCaseConfirm) {
        window.alert("You have decided to use lowercase characters.");
        finalString = finalString + lowCase;
    };

    //confirm uppercase characters (true/false)
    upCaseConfirm = window.confirm("Would you like to use uppercase characters? Select 'OK' to confirm.");
      if (upCaseConfirm) {
      //if true, inform user they decided to use uppercase characters and return true
          window.alert("You have decided to use uppercase characters.");
          finalString = finalString + upCase;
      };

    //confirm numeric values (true/false)
    numConfirm = window.confirm("Would you like to use numeric values? Select 'OK' to confirm.");
      if(numConfirm) {
      //if true, inform user they decided to use numeric values and return true
        window.alert("You have decided to use numeric values.");
        finalString = finalString + num;
      };

    //confirm special characters (true/false)
    charConfirm = window.confirm("Would you like to use special characters? Select 'OK' to confirm.");
    if (charConfirm) {
    //if true, inform user they decided to use special characters and return true
        window.alert("You have decided to use special characters.");
        finalString = finalString + special;
      };

      console.log(finalString);
  }
      charPrompt();

      // when the password is generated
      // the password is either displayed in an ALERT or written to the page
      alert("Your password is " + generatePassword());
} 

  // when all prompts are answered
  // a password is generated that matches the selected criteria

  //using the selections above, use the function to create the password with Math.random()
  function generatePassword() {
    
    var randomString;
    var randPassword = "";

    //use a for loop and Math.random() to generate a random string
    for (var i = 0; i < promptClick; i++) {
        randomString = Math.floor(Math.random() * finalString.length);
        randPassword += finalString[randomString];
    }
    return randPassword;
  }

  // with my element (referring to the textarea in my HTML), i need to display the function generatePassword() on the page
  var passwordText = document.querySelector("#password");

  passwordText.value.innerHTML = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
generatePassword();