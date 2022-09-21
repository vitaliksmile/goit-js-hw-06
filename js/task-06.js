const inputRef = document.querySelector("#validation-input");

const handleInput = (event) => {
  const { value, dataset } = event.target;
  const numberLength = Number(dataset.length);
  console.log(value.length);
  console.log(numberLength);
  if (value.length === numberLength) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  } else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  }
};

inputRef.addEventListener("blur", handleInput);
