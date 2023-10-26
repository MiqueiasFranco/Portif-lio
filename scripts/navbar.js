const navbar = document.getElementById('navbar')
const content = document.getElementById('content')
const projeto = document.getElementById('projetos')
const sobre = document.getElementById('sobre')
const contato = document.getElementById('contato')
const certificacao = document.getElementById('certificacao')


const logo = document.getElementById('logo')

const menu = document.getElementById('menu')
const close = document.getElementById('close')
var showNav = false;

function onNavbar() {
    showNav = !showNav;
    if (showNav) {
        navbar.style.marginRight = '0vw';
        navbar.style.animationName = 'mostrar';
        content.style.filter = 'blur(3px)'
        projeto.style.filter = 'blur(3px)'
        contato.style.filter = 'blur(3px)'
        certificacao.style.filter = 'blur(3px)'
        sobre.style.filter = 'blur(3px)'
        logo.style.filter = 'blur(3px)'
    }
    else {
        navbar.style.marginRight = '-100vw';
        navbar.style.animationName = 'ofNav';
        content.style.filter = ''
        projeto.style.filter = ''
        contato.style.filter = ''
        certificacao.style.filter = ''
        sobre.style.filter = ''
        logo.style.filter = ''
    }

}


menu.addEventListener('click', onNavbar);
menu.addEventListener('click', onNavbar);