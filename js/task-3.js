const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", function(event) {
  const trimmedName = event.target.value.trim(); // видалення пробілів з обох країв
  nameOutput.textContent = trimmedName !== "" ? trimmedName : "Anonymous";
});