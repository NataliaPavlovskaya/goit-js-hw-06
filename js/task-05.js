// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous".


const form = document.querySelector('#name-input');
const nameText = document.querySelector('#name-output');


form.addEventListener('input', onFormNoText);

function onFormNoText() {
    if(form.value === ""){
    nameText.innerHTML = 'Anonymous';
    }else {
        nameText.textContent = form.value;
    }
};

// function onFormText(event ) {
//  console.log(event);

//  nameText.textContent = form.value;

// };