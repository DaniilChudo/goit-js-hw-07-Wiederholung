const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const form = evt.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);

  form.reset();
});
