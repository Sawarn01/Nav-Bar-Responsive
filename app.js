let hamburger = document.querySelector('.hamburger');
let navBar = document.querySelector('.navBar');
let social = document.querySelector('.social');

hamburger.onclick = function () {
    if (navBar.classList.contains('hamActive')) {
        navBar.classList.remove('hamActive');
        hamburger.innerHTML = "<i class='fa-solid fa-bars'></i>";
        social.classList.remove('socialActive')
    } else {
        hamburger.innerHTML = "<i class='fa-solid fa-xmark'></i>";
        navBar.classList.add('hamActive');
        social.classList.add('socialActive');
    }
}