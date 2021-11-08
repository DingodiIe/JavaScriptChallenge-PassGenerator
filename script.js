
var generateBtn = document.querySelector("#generate");




//all chars
var numChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//checks for length and char types
var passLength;
var upperCheck;
var numCheck;
var specialCheck;



//Ask user if they want numbers in pass
function askNumChar(){
  numCheck = prompt("Do you want numbers in your password? \n(Please type Yes or No)");
    numCheck = numCheck.toLowerCase();

    if (numCheck === null || numCheck === ""){
      alert("Please type Yes or No");
      askNumChar();

    }
    else if (numCheck === "yes" || numCheck ==="y"){
      numCheck = true;
      return numCheck;

    }
    else if (numCheck === "no" || numCheck ==="n"){
      numCheck = false;
      return numCheck;
    
    }
    else {
      alert("Please type Yes or No");
      askNumChar();
    }
    return numCheck;
}



//Ask user if they want uppercase in pass
function askUpperChar(){
  upperCheck = prompt("Do you want uppercase letters A-Z in your password \n(Please type Yes or No)");
    upperCheck = upperCheck.toLowerCase();

    if (upperCheck === null || upperCheck === ""){
      alert("Please type Yes or No");
      askUpperChar();

    }else if (upperCheck === "yes" || upperCheck ==="y"){
      upperCheck = true;
      return upperCheck;

    }else if (upperCheck === "no" || upperCheck ==="n"){
      upperCheck = false;
      return upperCheck;
    
    }else {
      alert("Please type Yes or No");
      askUpperChar();
    }
    return upperCheck;
}


//Ask user if they want special chars in pass
function askSpecialChar(){
  specialCheck = prompt("Do you want to include special characters in your password? \n(Yes or No)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please type Yes or No");
      askSpecialChar();

    }
    else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }
    else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }
    else {
      alert("Please type Yes or No");
      askSpecialChar();
    }
    return specialCheck;
}

//Function used to determine the length of the password
function passwordLength(){
  passLength = prompt("How many characters do you want your password to be? From 8-128 ");

    if (passLength<8){//input was less than 8
      alert("Password must have 8-128 characters");
      passwordLength();
    }
    else if (passLength>128){//input was greater than 128
      alert("Password must have 8-128 characters");
      passwordLength();
    }
    else if (isNaN(passLength)){//no input given
      alert("Password must have 8-128 characters");
      passwordLength();
    }
    else{
    alert("You will now be asked what kinds of characters you want in your password, enter Yes or No for each prompt.\n If you only want lowercase enter no in all prompts");
    }
    return passLength;
}

 //generates pass based on user input
function makePass()
{
          passwordLength();
          console.log(passLength);
          askUpperChar();
          console.log(upperCheck);
          askNumChar();
          console.log(numCheck);
          askSpecialChar();
          console.log(specialCheck);

        var characters = lowerChar;
        var password = "";
        if (upperCheck && numCheck && specialCheck)
          {
          characters += upperChar + numChar + specialChar;

          }
        else if (upperCheck && numCheck)
          {
          characters += upperChar + numChar;

          }
        else if (numCheck && specialCheck)
          {
          characters += numChar + specialChar;

          }
        else if (upperCheck && specialCheck)
          {
          characters += upperChar + specialChar;

          }
        else if (upperCheck)
          {
          characters += upperChar;

          }
        else if(numCheck)
          {
          characters += numChar;

          }
        else if (specialCheck)
          {
          characters += specialChar;

          }
        else
          {
          characters === lowerChar;
          }

          for(var i = 0; i < passLength; i++)
            {
              password += characters.charAt(Math.floor(Math.random() * characters.length));
            }
          return password;
}

// Write password to input
function writePassword() {
  var password = "";
  password = makePass();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);//click event for writepass func