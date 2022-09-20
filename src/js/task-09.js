const refs = {
  bodyEl: document.querySelector("body"),
  textEl: document.querySelector(".color"),
  buttonEl: document.querySelector(".change-color"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function ChangeColor() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.textEl.textContent = `${getRandomHexColor()}`;
}

refs.buttonEl.addEventListener("click", ChangeColor);
