const switchAuthForm = () => {
    const selectAuthDivs = document.querySelectorAll('.userForm');
    selectAuthDivs[0].style.display = 'block';   
}

window.onload = switchAuthForm();
