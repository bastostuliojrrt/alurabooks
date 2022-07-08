const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  if(event.type === 'touchstart'){
    event.preventDefault();
  }
};

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)