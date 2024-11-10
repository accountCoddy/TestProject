const resultBtn = document.querySelector(".result-btn");

resultBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    calculate();
});

// Функция для расчёта ежемесячного платежа по кредиту
function calculateMonthlyPayment(principal, rate, years) {
    // Расчёт ежемесячной процентной ставки
    const monthlyRate = rate / 100 / 12;
  
    // Формула расчёта ежемесячного платежа
    let payment = principal * (monthlyRate * Math.pow((1 + monthlyRate), years));
    payment = Math.round(payment * 100) / 100;
  
    return payment;
  }
  
  // Функция для вывода результатов
  function displayResults(principal, rate, years, monthlyPayment) {
    document.getElementById("result").innerHTML = `
      Сумма кредита: ${principal}<br>
      Процентная ставка: ${rate}%<br>
      Срок кредита (лет): ${years}<br>
      Ежемесячный платёж: ${monthlyPayment}`;
  }
  
  // Обработчик события нажатия кнопки «Рассчитать»
  function calculate() {
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
  
    const monthlyPayment = calculateMonthlyPayment(Number(principal), Number(rate), Number(years));
    displayResults(principal, rate, years, monthlyPayment);
  }
  