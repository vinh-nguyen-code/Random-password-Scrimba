const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 8
let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")
let password3 = document.getElementById("password-3")
let password4 = document.getElementById("password-4")

/* Function generate random passwords acdording to the length*/

function generatePassword(){
    let password = ""
    for (i=0; i< passwordLength;i++){       
       let randomIndex = Math.floor(Math.random()*characters.length)
        password += characters[randomIndex]
     }
     return password
}

function getPassword(){
    password1.textContent = generatePassword()
    password2.textContent = generatePassword()
    password3.textContent = generatePassword()
    password4.textContent = generatePassword()
}
 
/* Add the ability to set password length (from 8 to 15 characters)*/

slider.addEventListener("input", function () {
    sliderNumber.textContent = `${slider.value}`;
    passwordLength = slider.value;
});   



/* Copy password)*/
function copy(text) {
    window.prompt("Ctrl+C or Cmd+C then Enter to copy to clipboard:", text);
  }





