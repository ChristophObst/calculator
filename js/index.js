console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

firstInput.addEventListener("input", () => {
  const sum = firstInput.value * secondInput.value;
  result.textContent = sum;
});

secondInput.addEventListener("input", () => {
  const sum = firstInput.value * secondInput.value;
  result.textContent = sum;
});
