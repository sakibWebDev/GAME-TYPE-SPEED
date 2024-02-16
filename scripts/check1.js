// home hidden

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// Play On Going

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


//COlor keybord 

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

//COlor keybord after finish work

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

// element check

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// element check

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    set
    return text;
}

// element color check 

function addbackgroundcolorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-red');
}

//  ranedom number


function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}
