billAmount.addEventListener("click", clearBillİnput);
numOfPeople.addEventListener("click", clearNumİnput);
tipPercentage.addEventListener("click", tipClear);
btnCalculate.addEventListener("click", control);
btnClear.addEventListener("click", handleResetBtn)

function handleResetBtn() {
  billAmount.value = 0;
  numOfPeople.value = 0;
  tipPercentage.value = '0%';
  tip.value = 0;
  total.value = 0;
  numOfPeople.style.border = "none"
  warningMsg.style.display = "none"
  billAmount.style.border = "none"
}

function clearBillİnput() {
  billAmount.value = '';
}
function clearNumİnput() {
  numOfPeople.value = '';
}
function tipClear() {
  tipPercentage.value = '';
}

function control() {
  if(billAmount.value !== '') {
    if((numOfPeople.value == 0) || (numOfPeople == '')) {
      numOfPeople.style.border = "2px solid #E17052"
      warningMsg.style.display = "block"
    }else {
      hesapla()
    }
  }else {
    billAmount.style.border = "2px solid #E17052"
  }
}

function hesapla() {
  let tipAmount = Number(tipPercentage.value / 100) * Number(billAmount.value);
  let totalAmount = Number(billAmount.value) + Number(tipAmount);
  let amountPerPerson = Number(totalAmount) / Number(numOfPeople.value);  

  total.value = (amountPerPerson).toFixed(1);
  tip.value = (Number(tipPercentage.value / 100) * amountPerPerson).toFixed(1);
}


