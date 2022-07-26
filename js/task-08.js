const form = document.querySelector('.login-form');
const btn = document.querySelector('[type="submit"]');

function send(event) {
    const formElements = event.currentTarget.elements;
        const email = formElements.email.value;
        const password = formElements.password.value;
        const formData = {
            email,
            password,
        }
        console.log(formData);
}

function doLogin (event) {
    event.preventDefault();
    if (!event.currentTarget.elements.email.value || !event.currentTarget.elements.password.value) {
        console.log('alert');
        //таск вісім не выдправляэмо не до кынця заповнену форму, якщо пароль або мейл порожні то показуємо аларм
        //53:00 second lesson change some tags due to other tags 
        btn.disabled = !event.currentTarget.elements.email.value || !event.currentTarget.elements.password.value;
    } else {
        btn.abled = event.currentTarget.elements.email.value && event.currentTarget.elements.password.value;
        form.addEventListener('submit', send);
        //Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
    }
}

form.addEventListener('change', doLogin);