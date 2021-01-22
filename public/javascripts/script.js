// @ts-check

let cursorColor;
let codeMaker = false;
let currentguess = 1;
let submitCounter = 0;

//---PICK COLOR---
for(let b of document.querySelectorAll(".colorField button")) {
    b.addEventListener("click", function(){
        cursorColor = this.className;
    })
}

//---COLLOR DOTS---
if (codeMaker) { //player is CODEMAKER
    for(let i of document.querySelectorAll("div.answerField span")) {
        i.addEventListener("click", function(){
            enterColor(i, cursorColor);
        });
    }
} else { //player is CODEGUESSER
    for(let i of document.querySelectorAll("div.guessField span")) {
        i.addEventListener("click", function(){
            if (parseInt(i.parentElement.id) == currentguess) {
                
                enterColor(i, cursorColor);
            }
        });
    }
}

function enterColor(d, color) {
    if (cursorColor != null && (d.className == "" || d.className == "undefined" || d.className == "null")) 
        submitCounter++;
    d.className = color;
}

//---SUBMIT---
document.querySelector("div.submitField > button").addEventListener("click", function(){
    if (submitCounter >= 5) {
        console.log("submited");
        submitCounter = 0;
        if (!codeMaker)
            currentguess ++;
        cursorColor = null;
    }
});





