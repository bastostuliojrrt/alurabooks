const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  if(event.type === 'touchstart'){
    event.preventDefault();
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// SwiperJS
const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});
