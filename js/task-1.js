const itemsList = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemsList.length}`);

itemsList.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elementLength = item.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementLength}`);
});
