
document.querySelector('.hamburger').
addEventListener('click', () =>
    document.querySelector('nav').classList.toggle('show'));


window.addEventListener('scroll', () => {
document.querySelector('header').classList.toggle('changeColor', window.scrollY > 10)
})