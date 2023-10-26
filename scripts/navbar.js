const navbar = document.getElementById('navbar')
const menu = document.getElementById('menu')
const close = document.getElementById('close')
var showNav = false;

function onNavbar() {
    showNav = !showNav;
    if (showNav) {
        navbar.style.marginRight = '0vw';
        navbar.style.animationName = 'mostrar';
        
    }
    else {
        navbar.style.marginRight = '-100vw';
        navbar.style.animationName = 'ofNav';
        
    }

}
menu.addEventListener('click', onNavbar);
menu.addEventListener('click', onNavbar);