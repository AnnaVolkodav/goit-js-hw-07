function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorName = document.querySelector('span.color');
const colorChangeBtn = document.querySelector('button.change-color');
const body = document.querySelector('body');


colorChangeBtn.addEventListener('click', function() {
  const randomChangeColor = getRandomHexColor();
  body.style.backgroundColor = randomChangeColor;
  colorName.textContent = randomChangeColor;
});