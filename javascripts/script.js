function loaded() {
  setInterval(() => {
    const r = randomNumber();
    const g = randomNumber();
    const b = randomNumber();
    document.getElementById("title").style.color = `rgb(${r},${g},${b})`;
  }, 300);
}


    const r = randomNumber();


document.getElementById("calculate-btn").addEventListener("click", () => {
  const inputAmount = getInputValue("input-field");
  const alRajhi = getRadioInput("alrajhi");
  const stcPay = getRadioInput("stcpay");
  const deposit = getRadioInput("deposit-radio");
  const income = getRadioInput("income-radio");
  const expenses = getRadioInput("expenses-radio");
  const withdrawal = getRadioInput("withdrawal-radio");
  const transfer = getRadioInput("transfer-radio");
  // const alRajhi = getRadioInput('alrajhi')

  if (alRajhi && income) {
    setElementValue("alrajhi-amount", inputAmount);
    setElementValue("monthly-income", inputAmount);
  } else if (alRajhi && deposit) {
    setElementValue("alrajhi-amount", inputAmount);
    setElementValue("deposit", inputAmount);
  } else if (stcPay && deposit) {
    setElementValue("stcpay-amount", inputAmount);
    setElementValue("deposit", inputAmount);
  } else if (withdrawal && alRajhi) {
    setElementValue("withdrawal-cash", inputAmount);
    substractionValue("alrajhi-amount", inputAmount);
  } else if (expenses && alRajhi) {
    setElementValue("monthly-expenses", inputAmount);
    substractionValue("alrajhi-amount", inputAmount);
  } else if (expenses && stcPay) {
    setElementValue("monthly-expenses", inputAmount);
    substractionValue("stcpay-amount", inputAmount);
  } else if (transfer && alRajhi) {
    setElementValue("stcpay-amount", inputAmount);
    substractionValue("alrajhi-amount", inputAmount);
  }
});
