const inputRef = document.querySelector("#name-input");
const textEl = document.querySelector("#name-output");

const addInput = (event) => {
  if (event.currentTarget.value === "") {
    textEl.textContent = "Anonymous";
    return;
  }
  textEl.textContent = event.currentTarget.value;
};

inputRef.addEventListener("input", addInput);
