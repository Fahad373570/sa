const increaseButtonE1 = document.querySelector(".counter__button--increase");
const decreaseButtonE1 = document.querySelector(".counter__button--decrease");
const resetButtonE1 = document.querySelector(".counter__reset-button");
const counterValueE1 = document.querySelector(".counter__value");

const MAX_VALUE = 5;

resetButtonE1.addEventListener("click", function () {
  counterValueE1.textContent = 0;
});

decreaseButtonE1.addEventListener("click", function () {
  let currentValue = +counterValueE1.textContent;

  let newValue = currentValue - 1;
  if (newValue < 0) {
    newValue = 0;
  }

  counterValueE1.textContent = newValue;
});

increaseButtonE1.addEventListener("click", function () {
  let currentValue = +counterValueE1.textContent;

  if (currentValue >= MAX_VALUE) {
    alert("The maximum number is 5");
    return;
  }

  counterValueE1.textContent = currentValue + 1;
});