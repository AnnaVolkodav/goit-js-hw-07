const form = document.querySelector('.login-form');
console.log(form);

let user = {
    email: '',
    password: ''
};
console.log(user);

form.addEventListener('submit', event => {
    event.preventDefault();
    let forms = event.target;
    const email = forms.elements.email.value;
    const password = forms.elements.password.value;

    if(email === '' || password === '') {
        return alert('All form fields must be filled in');
    } else {
        user.email = email;
        user.password = password;
        console.log(user);
    }
    form.reset();
})

