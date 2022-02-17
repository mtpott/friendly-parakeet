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

//when i refresh the browser, i do not want my writePassword() function to run UNTIL i click the button. 

    var lowCase = "abcdefghijklmnopqrstuvwxyz";
    var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var special = " !#$%&'()*+,-./:;,=>?@[\]^_`{|}~";
    var num = "1234567890";
    var string = "";

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

    function charPrompt() {
    promptClick = window.prompt("How many characters would you like to use in your password? You may choose between 8 and 128 characters. Please enter your choice below.");
    //if number entered is less than 8 or greater than 128, proceed to lowercase confirm
    if (promptClick > 8 || promptClick < 128) {
      (lowCaseConfirm);
    } else {
        window.alert("Your number is out of our selected range! Please choose again.");
        //break the loop to stop any chance of an infinite loop
    }
    //i confirm whether or not to include lowercase (true/false)
    lowCaseConfirm = window.confirm("Would you like to use lowercase characters? Select 'OK' to confirm.");
    //if true, inform user they decided to use lowercase characters and return true
    if (lowCaseConfirm) {
        window.alert("You have decided to use lowercase characters.");
        string = string + lowCase;
    };
    //confirm uppercase characters (true/false)
    upCaseConfirm = window.confirm("Would you like to use uppercase characters? Select 'OK' to confirm.");
      if (upCaseConfirm) {
      //if true, inform user they decided to use uppercase characters and return true
          window.alert("You have decided to use uppercase characters.");
          string = string + upCase;
      };
    //confirm numeric values (true/false)
    numConfirm = window.confirm("Would you like to use numeric values? Select 'OK' to confirm.");
      if(numConfirm) {
      //if true, inform user they decided to use numeric values and return true
        window.alert("You have decided to use numeric values.");
        string = string + num;
      };
    //confirm special characters (true/false)
    charConfirm = window.confirm("Would you like to use special characters? Select 'OK' to confirm.");
    if (charConfirm) {
    //if true, inform user they decided to use special characters and return true
        window.alert("You have decided to use special characters.");
        string = string + special;
      };
    }
      charPrompt();
      console.log(generatePassword());
  } 

  

  //using the selections above, use the function to create the password with Math.random()
  function generatePassword() {
    
    var randomString;
    var ranPassword = "";

    //use a for loop and Math.random() to generate a random string
    for (var i = 0; i < promptClick; i++) {
        randomString = Math.floor(Math.random() * string.length);
        ranPassword += string[randomString];
    }
    return ranPassword;
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  
generatePassword();