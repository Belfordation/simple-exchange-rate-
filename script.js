const selectOne = document.getElementById('currency1');
const selectTwo = document.getElementById('currency2');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');



//functions
function calc(){
    fetch(`https://v6.exchangerate-api.com/v6/dfab22d3221147d126f7809d/latest/${selectOne.value}`)
    .then(res=>res.json())
    .then(data => {rate.textContent=(amountOne.value/amountTwo.value)*(data.conversion_rates[selectTwo.value])})
};

//Event Listeners
selectOne.addEventListener('change',calc);
selectTwo.addEventListener('change',calc);
amountOne.addEventListener('input',calc);
amountTwo.addEventListener('input',calc);