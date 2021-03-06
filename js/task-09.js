// Напиши скрипт, который изменяет цвета фона элемента <body> 
// через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

const refs = {
  buttonEl: document.querySelector('.change-color'),
  textColor: document.querySelector('.color'),
};
console.log(refs.buttonEl);

refs.buttonEl.addEventListener('click', onChangeColor);
function onChangeColor(){
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  refs.textColor.textContent = newColor;

};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
