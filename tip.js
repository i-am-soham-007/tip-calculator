'use strict';

document.querySelector('.btn-primary').addEventListener('click', function(e){
    const totalAmount = document.getElementById('amount').value || 0;
    const tip = document.getElementById('tip-percentage').value || 0;
    if(totalAmount == 0) {
        alert('Please enter amount');
        return;
    }
    const{tipAmount,finalAmount} = tipCalculate(tip,totalAmount);
    result(tipAmount,finalAmount);
    e.preventDefault();
})

document.querySelector('#reset').addEventListener('click', function(e){
    reset();
    e.preventDefault();
})

function tipCalculate(Percentage,Amount) {
    const tipAmount = (Percentage != 0) ? Amount * (Percentage / 100) : 0;
    const finalAmount = Number(Amount) + Number(tipAmount);
    return {tipAmount,finalAmount};
}
function result(tipAmount,finalAmount) {
    document.getElementById('tip-amount').value = tipAmount;
    document.getElementById('final-amount').value = finalAmount;
    let resultDiv = document.getElementsByClassName('result-div');
        resultDiv[0].classList.remove('d-none');     
}
function reset() {
    document.getElementById('amount').value = '';
    document.getElementById('tip-percentage').value = '';
    document.getElementById('tip-amount').value = '';
    document.getElementById('final-amount').value = '';
    let resultDiv = document.getElementsByClassName('result-div');
        resultDiv[0].classList.add('d-none');
}

