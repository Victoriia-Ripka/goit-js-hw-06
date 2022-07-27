const form = document.querySelector('.login-form');
form.addEventListener('submit', doLogin);

function doLogin (event) {
    event.preventDefault();
    const {
        elements: {email,password},
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        alert('alert');
    } else {
        console.log(`Login: ${email.value}`);
    console.log(`Password: ${password.value}`);
    event.currentTarget.reset();
    }
}