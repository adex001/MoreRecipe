const signinForm = document.querySelector('#signinForm');
const signupForm = document.querySelector('#signupForm');

const switchAuthForm = (event) => {
    const selectAuthDivs = document.querySelectorAll('.userForm');
    selectAuthDivs[0].style.display = 'block';
    if (event.target.id = 'signinForm') {
        selectAuthDivs[1].style.display = 'block';
        selectAuthDivs[0].style.display = 'none'
    }
    else{
        selectAuthDivs[1].style.display = 'none';
        selectAuthDivs[0].style.display = 'block'
    }
    signinForm.addEventListener('click', switchAuthForm);
    signupForm.addEventListener('click', switchAuthForm);
}

window.onload = switchAuthForm();
