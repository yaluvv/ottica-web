const nav = document.querySelector("#nav");
const navMenu = document.querySelector("#nav-burger");
const navMenuImage = document.querySelector("#nav-burger-image");


// navMenu.onClick = () => {
//    
// }

navMenu.onclick = () => {
    if (nav.classList.toggle('open')) {
        navMenuImage.src = './icons/burger-close.svg'
    } else {
        navMenuImage.src = './icons/burger-open.svg'
    }
}
