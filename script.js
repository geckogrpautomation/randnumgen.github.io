
// On click of generate button do the functions below

document.getElementById("generate").addEventListener("click", initGenPassword);

// Write password to the #password input
function initGenPassword() {
  
  var password = generateRandomnPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Funtion to generate password based upon desire char set and desired password length

function generateRandomnPassword() {
  
  //Define password length from user
  var passLength = prompt("What is the length of the password you require?");
  
    //If password grt than 8 and les 128 passsword criteria met.
    if (passLength > 8 && passLength <= 128){

      //Parse password length to int. Find out what type of chars user wants via user confirmation
      var desiredPasswordLength = parseInt(passLength)
      var lowercaseOK = confirm("Do you want to use lowercase");
      var upperCaseOK = confirm("Do you want to use uppercase");
      var numericOK = confirm("Do you want to use numeric");
      var specialCharsOK = confirm("Do you want to use special chars");
      
      // declare blank strings for user char set and the apssword output
      var charset = "";
      var generatedOutput= "";

      //Concatenate allowable characters based upon user feedback from confirmation input
      if (lowercaseOK){
        charset = charset + "abcdefghijklmnopqrstuvwxyz";
        console.log(charset);
      }
      
      if (upperCaseOK){
        charset = charset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        console.log(charset);
      }

      if (numericOK){
        charset = charset + "0123456789";
        console.log(charset);
      }

      if (specialCharsOK){
        charset = charset + " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
        console.log(charset);
      }       
      
      //build paaswork from charset at the required length.
      for ( var i = 0; i < desiredPasswordLength; i++ ) {
        generatedOutput+=charset.charAt(Math.floor(Math.random() *
        charset.length));   
      }
      // return the password to HTML view.
      return generatedOutput;

      // If password does not meet required length alert the user and dont do the above calculations.
    } else {

    alert("Password length does not meet the criteria");

  }
}






 





