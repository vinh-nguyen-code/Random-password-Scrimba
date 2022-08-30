const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let suggestionBtn1 = document.getElementById("suggestion-btn-1")
let suggestionBtn2 = document.getElementById("suggestion-btn-2")

function generate(){
    for (i=0; i< characters.length;i++){       
        if(suggestionBtn1.textContent.length<15){
            suggestionBtn1.textContent += characters[Math.floor(Math.random()*characters.length)]
        }
        if(suggestionBtn2.textContent.length<15){
            suggestionBtn2.textContent += characters[Math.floor(Math.random()*characters.length)]
        }
     }
}

