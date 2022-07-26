const form = document.querySelector('.login-form');

function doLogin (event) {
    event.preventDefault();
    if (!event.currentTarget.elements.email.value || !event.currentTarget.elements.password.value) {
        console.log('alert');
        //Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені
    } 
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        email,
        password,
    }
    console.log(formData);
}


form.addEventListener('submit', doLogin);