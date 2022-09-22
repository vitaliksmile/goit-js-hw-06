"use strict";
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listRef = document.querySelector("#ingredients");
const listsItem = (ingredients) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredients;
  itemEl.classList.add("item");
  return itemEl;
};
const elements = ingredients.map(listsItem);
console.log(listRef);
listRef.append(...elements);
