// Напиши скрипт, который реагирует на изменение значения 
// input#font-size-control (событие input) и 
// изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.


const inputScroll = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');
    

inputScroll.addEventListener('input', () => {
    const inputValue = inputScroll.value;
    return inputText.style.fontSize = `${inputValue}px`;
} );





