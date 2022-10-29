const inputEmpty = document.querySelector("#email");

function invalidInput(event) {
  const spanMsg = document.querySelector(".error-msg");
  spanMsg.classList.add("invalid");
  inputEmpty.classList.add("invalid");
  inputEmpty.value = "";
  inputEmpty.placeholder = "email@example.com";
  event.preventDefault();
}
inputEmpty.addEventListener("invalid", invalidInput);
