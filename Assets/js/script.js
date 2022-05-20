// Assignment Code
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  var capsArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var smallArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var numsArr = ['0','1','2','3','4','5','6','7','8','9'];
  var spclArr = [' ','!','"','#','$','%','&',',','(',')','*',"'",'+','-','.','/',':',';','<','=','>','?','@','[',"\\",']','^','-','`','{','|','}','~'];
  var userPasswordSet = [];
  var userPassword = [];
  let n = prompt('How many characters would you like in your password? \n Passwords must be within 8 and 128 characters','8');
  if(n>=8&&n<=128){
    var caps = confirm('Would you like to include Capital letters?');
    if(caps)
    {
      userPasswordSet = userPasswordSet.concat(capsArr);
    }
    var small = confirm('Would you like to include Small letters?');
    if(small)
    {
      userPasswordSet = userPasswordSet.concat(smallArr);
    }
    var nums = confirm('Would you like to include Numbers?');
    if(nums)
    {
      userPasswordSet = userPasswordSet.concat(numsArr);
    }
    var spcls = confirm('Would you like to include Special Characters?');
    if(spcls)
    {
      userPasswordSet = userPasswordSet.concat(spclArr);
    }
  }
  else{
    alert('Passwords must be within 8 and 128 characters');
  }
  if(!caps&&!small&&!nums&&!spcls)
  {
    alert('Please select at least one type!')
  }
  else{
    for(var index=0;index<n;index++)
    {
      function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      var randIndex = getRndInteger(0,userPasswordSet.length);
      userPassword.push(userPasswordSet[randIndex]);
    }
    console.log(userPassword);
  }
  var passwordText = document.getElementById("password");
  passwordText.value = userPassword.join('');

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
