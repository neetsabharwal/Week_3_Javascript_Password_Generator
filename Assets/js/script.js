// Assignment Code
//assigned generate button from html to a variable
var generateBtn = document.getElementById("generate");

// Write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");
  if(password!=null){
    passwordText.value = password;
  }
}

//generate password function - returns password in happy path.. 
function generatePassword(){
  //creating arrays for multiple criteria
  var capsArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var smallArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var numsArr = ['0','1','2','3','4','5','6','7','8','9'];
  var spclArr = [' ','!','"','#','$','%','&',',','(',')','*',"'",'+','-','.','/',':',';','<','=','>','?','@','[',"\\",']','^','-','`','{','|','}','~'];
  
  //entire set of characters based on user selected criteria
  var userPasswordSet = [];
  
  //final password after random selection
  var userPassword = [];

  //prompt user
  let n = prompt('How many characters would you like in your password? \n Passwords must be within 8 and 128 characters','8');
  
  //handle prompt input and validate
  if(n>=8&&n<=128){
    
    var caps = confirm('Would you like to include Capital letters?');
    //add capital array set to password selection set
    if(caps)
    {
      userPasswordSet = userPasswordSet.concat(capsArr);
    }
    
    var small = confirm('Would you like to include Small letters?');
    //add small array set to password selection set
    if(small)
    {
      userPasswordSet = userPasswordSet.concat(smallArr);
    }

    var nums = confirm('Would you like to include Numbers?');
    //add numbers array set to password selection set
    if(nums)
    {
      userPasswordSet = userPasswordSet.concat(numsArr);
    }

    var spcls = confirm('Would you like to include Special Characters?');
    //add special array set to password selection set
    if(spcls)
    {
      userPasswordSet = userPasswordSet.concat(spclArr);
    }
    
    //hanlde scenario where user selects nothing
    if(!caps&&!small&&!nums&&!spcls)
    {
      alert('Please select at least one type!')
    }
    else{
      //based on password length.. randomly select characters from the password selection set and add to the final password set
      for(var index=0;index<n;index++)
      {
        function getRndInteger(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }
        var randIndex = getRndInteger(0,userPasswordSet.length);
        userPassword.push(userPasswordSet[randIndex]);
      }
    }
    //change array to string
    return userPassword.join('');
  }
  else{
    alert('Passwords must be within 8 and 128 characters');
  }
}

// Add event listener to the variable/generate button to call writepassword function
generateBtn.addEventListener("click", writePassword);