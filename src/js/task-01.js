const listRef = document.querySelector("#categories");
const listsItem = listRef.querySelectorAll("#categories>.item");
const number = listRef.children.length;
console.log(`Number of categories: ${number} 

`);
listsItem.forEach((item) => {
  //   console.log(item);
  const titleRef = item.querySelector("h2");
  //   console.log();
  const countLi = item.lastElementChild.children.length;
  console.log(`Category:${titleRef.textContent}
Elements: ${countLi}`);
});
