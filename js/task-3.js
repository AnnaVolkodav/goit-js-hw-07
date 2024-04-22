const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", function(event) {
  const trimmedName = event.target.value.trim(); // видалення пробілів з обох країв
  nameOutput.textContent = trimmedName !== "" ? trimmedName : "Anonymous";
});

const parag = document.querySelector('p');
if (!parag) {
  console.warn('This element does not exist!');
}

const paragCollection = document.querySelectorAll('p');
console.log(paragCollection);
const par = Array.from(paragCollection);
console.log(par);
