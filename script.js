// Assignment Code
var generateBtn = document.querySelector("#generate");
var numList = [0,1,2,3,4,5,6,7,8,9];
var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialList = ["","!","@","$","%","^","&","*","#","(",")","+",",","-",".",":",";","<","=",">","?","[","]","y","z"];




var generatePassword = function(){
  // I am setting up the initial varialbles and introduction for when the event calls out this function
  window.alert("Hello there :). I require acceptance criterias for your new password. There will be following questions I need from you. thx -RF")
  var numCharacter = prompt("How many characters does your password need to be? [min = 8 and max is 128]");
  var lowerCharacter = window.confirm("Does your password need a Lowerercase character? [Y = OK or N = Cancel]");
  var uppperCharacter = window.confirm("Does your password need a Uppercase character? [Y = OK or N = Cancel]");
  var specialCharacter = window.confirm("Does your password need a Special character? [Y = OK or N = Cancel]");
  var password = ''


  // This boolean logic is to identify what concatenate array the password generator will pull from. 
  if (lowerCharacter == true && uppperCharacter == true && specialCharacter == true){
    var concatArrayTest = numList.concat(lowercaseList, uppercaseList, specialList);

    console.log(concatArrayTest.toString());
  } else if (lowerCharacter == true && uppperCharacter == true && specialCharacter == false){
    var concatArrayTest = numList.concat(lowercaseList,uppercaseList);
    console.log(concatArrayTest.toString());
  } else if (lowerCharacter == true && uppperCharacter == false && specialCharacter == false){
    var concatArrayTest = numList.concat(lowercaseList);
    console.log(concatArrayTest.toString());
  } else {
    var concatArrayTest = numList
    console.log(concatArrayTest.toString());
  }
  

  for (var i = 0; i < numCharacter ; i++){
    // var numRdm = numList[Math.floor(Math.random()* numList.length)];
    // var lowRDM = lowercaseList[Math.floor(Math.random() * lowercaseList.length)];
    // var upRDM = uppercaseList[Math.floor(Math.random() * uppercaseList.length)];
    // var specialRDM = specialList[Math.floor(Math.random() * specialList.length)];
  
    var Test1 = concatArrayTest[Math.floor(Math.random() *concatArrayTest.length)];
    console.log(Test1.toString());
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
}

// Add event listener to generate buttonZ
generateBtn.addEventListener("click", writePassword);
