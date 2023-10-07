function getInputFieldValueByID(inputFieldID){
    const inputField = document.getElementById(inputFieldID);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueByID(elementID){
    const element = document.getElementById(elementID);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setTextElementValueByID(elementID, elementValue){
    const element = document.getElementById(elementID);
    element.innerText = elementValue;
}

document.getElementById("btn-deposite").addEventListener('click', function(){
    const prevDepositeAmount = getElementValueByID("deposite-total");
    const newDepositeAmount = getInputFieldValueByID("deposite-field");
    const newDepositeTotal = prevDepositeAmount + newDepositeAmount;
    setTextElementValueByID("deposite-total", newDepositeTotal);

    const prevBalanceAmount = getElementValueByID("balance-total");
    const newBalanceTotal = prevBalanceAmount + newDepositeAmount;
    setTextElementValueByID("balance-total", newBalanceTotal);
});

// withdraw

document.getElementById("btn-withdraw").addEventListener('click', function(){
    const prevWithrawAmount = getElementValueByID("withdraw-total");
    const newWithdrawAmount = getInputFieldValueByID("withdraw-field");
    const newWithdrawTotal = prevWithrawAmount + newWithdrawAmount;
    setTextElementValueByID("withdraw-total", newWithdrawTotal);

    const prevBalanceAmount = getElementValueByID("balance-total");
    const newBalanceTotal = prevBalanceAmount - newWithdrawAmount;
    setTextElementValueByID("balance-total", newBalanceTotal);
});