const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};
const decrementBtn = document.querySelector('button[data-action="decrement"]');
// console.log(decrementBtn);
const incrementtBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");
decrementBtn.addEventListener("click", function () {
  counter.decrement();
  valueEl.textContent = counter.value;
});
incrementtBtn.addEventListener("click", function () {
  counter.increment();
  valueEl.textContent = counter.value;
});
