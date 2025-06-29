const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (e) => {
  const trimmedValue = e.currentTarget.value.trim();
  if (trimmedValue === "") {
    textOutput.textContent = "Anonymous";
  } else {
    textOutput.textContent = trimmedValue;
  }
});
