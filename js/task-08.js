
// Напиши скрипт управления формой логина.
// Если пользователь заполнил все поля и отправил форму, 
// собери значения полей в обьект, где имя поля будет именем свойства, 
// а значение поля - значением свойства. 
// Выведи обьект с введенными данными в консоль и очисти значения полей формы
//  методом reset.


// При отправке формы страница не должна перезагружаться.
// Обработка отправки формы form.login-form должна быть по событию submit
// Для доступа к элементам формы используй свойство elements.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.



const refs = {
    form: document.querySelector('.login-form'),
    input: document.querySelectorAll('input'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
event.preventDefault();

const formElements = event.currentTarget.elements;
const mail = formElements.email.value;
const password = formElements.password.value;

if(mail === '' || password === ''){
    return alert ("Все поля должны быть заполнены");
};

const formData = new FormData(event.currentTarget);

// console.log(`Login: ${mail}, Password: ${password}`);
event.currentTarget.reset();
const object = {mail, password};
console.log (object);

};

// 