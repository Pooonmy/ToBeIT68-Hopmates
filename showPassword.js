const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const passwordshow1 = document.querySelector(".passwordshow1");
const passwordshow2 = document.querySelector(".passwordshow2");


icon1.addEventListener('click', () => {
    if (passwordshow1.type === 'password') {
        icon1.classList.replace('fa-eye-slash', 'fa-eye');
        passwordshow1.setAttribute('type', 'text');
    } else {
        icon1.classList.replace('fa-eye', 'fa-eye-slash');
        passwordshow1.setAttribute('type', 'password');
    }
});

icon2.addEventListener('click', () => {
    if (passwordshow2.type === 'password') {
        icon2.classList.replace('fa-eye-slash', 'fa-eye');
        passwordshow2.setAttribute('type', 'text');
    } else {
        icon2.classList.replace('fa-eye', 'fa-eye-slash');
        passwordshow2.setAttribute('type', 'password');
    }
});
