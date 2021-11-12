var tipAmount = document.getElementById('tipAmount');
var total = document.getElementById('total');

function priceVal(){
    const val = document.getElementById('priceVal').value;
    return val;
}

function customVal(){
    var tip = 0;
    const customVal = document.getElementById('customVal').value;
    const tips = document.querySelectorAll('.tip');

    if(customVal == ''){
        tips.forEach(tipBtn => {
            tipBtn.addEventListener('click', () => {
                tip = parseFloat(tipBtn.innerText);
                calculate(priceVal(), tip, numVal());

                tipAmount.innerHTML = '$' + calculate(priceVal(), tip, numVal())[0];
                total.innerHTML = '$' + calculate(priceVal(), tip, numVal())[1];

                return tip;
            })
        })
    }else{
        tip = customVal;

        const calcBtn = document.getElementById('calcBtn');
        calcBtn.addEventListener('click', () => {
            calculate(priceVal(), tip, numVal());

            tipAmount.innerHTML = '$' + calculate(priceVal(), tip, numVal())[0];
            total.innerHTML = '$' + calculate(priceVal(), tip, numVal())[1];

            return tip;
        })
    }
}





const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', () => {
    document.getElementById('priceVal').value = '';
    document.getElementById('numVal').value = '';
    document.getElementById('customVal').value = '';
    tipAmount.innerHTML = 0;
    total.innerHTML = 0;
})


function numVal(){
    const val = document.getElementById('numVal').value;
    return val;
}

function calculate(bill, percent, numppl){
    var tip = Math.round((bill / 100 * percent) * 100) / 100;
    var eachTip = Math.round((tip / numppl) * 100) / 100;
    var eachBill = Math.round((bill / numppl + eachTip) * 100) / 100;
    return [eachTip, eachBill];
}
