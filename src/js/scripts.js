const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.querySelector('#nav-links');
const icon = document.querySelector('.btn-mobile i');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    icon.classList.toggle('fa-times');
    icon.classList.toggle('fa-bars');
})

const Imgchange = document.querySelector('#Imgchange');

Imgchange.addEventListener('click', () => {
    Imgchange.src = Imgchange.src === './src/images/me/2.jpeg' ? './src/images/me/1.jpeg' : './src/images/me/2.jpeg';
})