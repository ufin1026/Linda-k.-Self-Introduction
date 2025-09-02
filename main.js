let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active')
    menu.classList.remove('bx-x');
}

  //Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true,
  });
  
  sr.reveal('.home-text, .home-img, .about-img, .about-text, .web-container', {
    interval: 200
  });