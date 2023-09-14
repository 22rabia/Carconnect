
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    if (menu.classList.contains('fa-solid')) {
        menu.classList.replace('fa-solid', 'fa-xmark');
    } else {
        menu.classList.replace('fa-xmark', 'fa-solid');
    }
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-xmark');
    menu.classList.add('fa-bars');
    navbar.classList.remove('active');
}
