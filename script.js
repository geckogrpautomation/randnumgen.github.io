
// On click of generate button do the functions below

document.getElementById("generate").addEventListener("click", function() {
  initGenPassword();
});


// Write password to the #password input
function initGenPassword() {
  
  var password = generateRandomnPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Funtion to generate password based upon desire char set and desired password length

function generateRandomnPassword() {
  
  var x = prompt("What is the length of the password you require?");
  var desiredPasswordLength = parseInt(x)
  var charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !#$%&()*+,-./:;<=>?@[\]^_{|}~";
  var generatedOutput= "";
 
  for ( var i = 0; i < desiredPasswordLength; i++ ) {
     generatedOutput+=charset.charAt(Math.floor(Math.random() *
     charset.length));   
  }
  return generatedOutput;
}

 





