function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChange = document.querySelector(".change-color");
const textChange = document.querySelector(".color");

btnChange.addEventListener("click", () => {
  const randomTextColor = getRandomHexColor();

  document.body.style.backgroundColor = randomTextColor;
  textChange.textContent = randomTextColor;
});
