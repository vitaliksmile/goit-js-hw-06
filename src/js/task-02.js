const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");
ingredients.forEach((item) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = item;
  listRef.append(liEl);
  // console.log(liEl);
  return liEl;
});
console.log(listRef);
