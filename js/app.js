const nav = document.querySelector("#nav");
const navMenu = document.querySelector("#nav-burger");
const navMenuImage = document.querySelector("#nav-burger-image");
const navLinks = document.querySelectorAll('.nav-link')
const body = document.body

navMenu.onclick = () => {
    if (nav.classList.toggle('open')) {
        navMenuImage.src = './icons/burger-close.svg'
        body.classList.add('scroll-hidden')
    } else {
        navMenuImage.src = './icons/burger-open.svg'
    }
}

navLinks.forEach(n => n.addEventListener('click', () => {
    nav.classList.remove('open')
    navMenuImage.src = './icons/burger-open.svg'
    body.classList.remove('scroll-hidden')
}))


