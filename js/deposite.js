function getInputFieldValueByID(inputFieldID){
    const inputField = document.getElementById(inputFieldID);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

// function getInputFieldValueByID(inputFieldID){
//     const inputField = document.getElementById(inputFieldID);
//     const inputFieldValueString = inputField.value;
//     const inputFieldValue = parseFloat(inputFieldValueString);
//     return inputFieldValue;
// }

document.getElementById("btn-deposite").addEventListener('click', function(){
    const newDepositeAmount = getInputFieldValueByID("deposite-field");

});