//Abrir e fechar menu
function openMenu(){
    const openButton = document.querySelector('.open-button');
    const closeButton = document.querySelector('.close-button');
    const menu = document.querySelector('.menu');

    openButton.classList.add('hidden');
    closeButton.classList.remove('hidden');
    menu.classList.add('show');
    
}

function closeMenu(){
    const openButton = document.querySelector('.open-button');
    const closeButton = document.querySelector('.close-button');
    const menu = document.querySelector('.menu');

    openButton.classList.remove('hidden');
    closeButton.classList.add('hidden');
    menu.classList.remove('show');
}

//Menu mudando de cor quando rola a tela

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scroll = document.querySelector('#scrollMenu');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scroll.style.backgroundColor = '#00416B';
  } else {
    scroll.style.backgroundColor = 'transparent';
  }
}