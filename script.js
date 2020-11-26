

//Get requried check box objects////////////////////////////////////////
var lCaseCheckBox = document.getElementById("lCaseCheck");
var uCaseCheckBox = document.getElementById("uCaseCheck");
var numCheckBox = document.getElementById("numericalCheck");
var specialCheckBox = document.getElementById("specialCheck");



//Get required input box objects
var lCaseNum = document.getElementById("lCaseCheckNum");
var uCaseNum = document.getElementById("UCaseCheckNum");
var numCaseNum = document.getElementById("numCheckNum");
var specialNum = document.getElementById("specialCheckNum");




//Create required events
document.getElementById("generate").addEventListener("click", initGenPassword);




// Write password to the #password input
function initGenPassword() {
  
  var password = generateRandomnPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



//Function to build part of the user password based upon length and type of char set                          
function buildPass(passNumLength, charset) {
  var pass=  "";
  for ( var i = 0; i < passNumLength; i++ ) {
    pass+=charset.charAt(Math.floor(Math.random() *
    charset.length));    
  }
 
  return pass;  
  }
  
  


//Construct string shuffle 
function shuffle(str) {
  
  var x = str.split("");
  
  for(var i = x.length - 1; i > 0; i--) {
      var y = Math.floor(Math.random() * (i + 1));
      var tmp = x[i];
      x[i] = x[y];
      x[y] = tmp;
  }
  return x.join("");
  }

  


//Funtion to generate password based upon desire char set and desired password length. char set assignment split randmonly across 4 char set values
function generateRandomnPassword() {
  
// Declare user input OK flags and force to false
var lCaseInputOK =  false;
var uCaseInputOK = false ;
var numInputOK= false;
var specialInputOK = false;
var passlengthOK = false;

//Change user string inputs to integers
var lCaseNumInt = parseInt(lCaseNum.value);
var uCaseNumInt = parseInt(uCaseNum.value);
var numInt = parseInt(numCaseNum.value);
var specialInt = parseInt(specialNum.value);


// Check user inputs are OK
if (lCaseCheckBox.checked === true && (lCaseNumInt > 0 || lCaseNumInt !== undefined)){
  lCaseInputOK = true;
} else if (lCaseCheckBox.checked === false) {
  lCaseInputOK = true;
  }
  
if (uCaseCheckBox.checked === true && (uCaseNumInt > 0 || uCaseNumInt !== undefined)){
  uCaseInputOK = true;
} else if (uCaseCheckBox.checked === false) {
  uCaseInputOK = true;
  }

if (numCheckBox.checked === true &&  (numInt > 0 || numInt !== undefined)){
  numInputOK = true;
} else if (numCheckBox.checked === false) {
  numInputOK = true;
  }

if (specialCheckBox.checked === true && (specialInt > 0 || specialInt !== undefined)){
  specialInputOK = true;
} else if (specialCheckBox.checked === false) {
  specialInputOK = true;
  }

//If inputs are OK
if (lCaseInputOK ===  true && uCaseInputOK === true && numInputOK === true && specialInputOK === true) {
  
  //Define password length from user inputs if checkboxes enabled for that setpoint
  var passLength = 0;
  var tempCalc = 0;
  
//Add to find total password length
  if (lCaseCheckBox.checked === true){
    tempCalc = lCaseNumInt + tempCalc;
  }

  if (uCaseCheckBox.checked === true){
    tempCalc = uCaseNumInt+ tempCalc;
  }

  if (numCheckBox.checked  === true){
    tempCalc = numInt+ tempCalc;
  }

  if (specialCheckBox.checked === true){
    tempCalc= specialInt+ tempCalc;
  }

//Add to find total password length
  passLength = tempCalc;
 
  if (passLength >= 8 && passLength <= 128){   
    
                        
                                
    // Declare blank strings for user char set and the apssword output
      var generatedOutput= "";
              
      //Concatenate allowable characters based upon user feedback from confirmation input
      if (lCaseCheckBox.checked === true){
        var lCasePass = buildPass(lCaseNumInt , "abcdefghijklmnopqrstuvwxyz");                  
      }

      if (uCaseCheckBox.checked === true){
        var uCasePass = buildPass(uCaseNumInt, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");       
      }

      if (numCheckBox.checked === true){
        var numPass = buildPass(numInt, "0123456789"); 
      }

      if (specialCheckBox.checked === true){
        var specialPass = buildPass(specialInt, " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"); 
      }       
      
      //Concatenate built string for password for unscrambled output tag
      unscrmblOutput =  lCasePass + uCasePass  + numPass + specialPass;

      //Scramble password
      generatedOutput = shuffle(unscrmblOutput);

      // Return the password to initGenPassword().
      return generatedOutput;

      
    } else {

        alert("Check correct boxes are checked, values are not zero and password length is between 8 and 128 characters");
      } 
  }  
}
