function textAria(){
    const userInputValue = document.getElementById('text-aria');
    return userInputValue;
}

function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    return inputValueString ;
}

function setInputValueById(inputId, newValue){
    const inputField = document.getElementById(inputId);
    inputField.value = newValue;
}