const navbar = document.getElementById('navbar')
const menu = document.getElementById('menu')
const close = document.getElementById('close')
var showNav = false;

function onNavbar() {
    showNav = !showNav;
    if (showNav) {
        navbar.style.marginRight = '0vw';
        navbar.style.animationName = 'mostrar';
        content.style.filter = 'blur(3px)'
        container.style.filter = 'blur(3px)'
        banner.style.filter = 'blur(3px)'
    }
    else {
        navbar.style.marginRight = '-100vw';
        navbar.style.animationName = 'ofNav';
        content.style.filter = ''
        container.style.filter = ''
        banner.style.filter = ''
    }

}
menu.addEventListener('click', onNavbar);
menu.addEventListener('click', onNavbar);