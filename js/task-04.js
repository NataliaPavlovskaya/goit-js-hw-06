// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


let counterValue = 0;

const valueBtn = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);


function handleDecrementButtonClick (event) {
    counterValue -= 1;
    valueBtn.textContent = counterValue;
}; 

decrementBtn.addEventListener('click', handleDecrementButtonClick );

const incrementBtn = document.querySelector('[data-action="increment"]');
console.log(incrementBtn);
incrementBtn.addEventListener('click', handleIncrementButtonClick);


function handleIncrementButtonClick (event) {
    counterValue += 1;
    valueBtn.textContent = counterValue;
};
