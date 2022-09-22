//Menu mudando de cor quando rola a tela
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scroll = document.querySelector('#scrollMenu');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scroll.style.backgroundColor = '#00416B';
  } else {
    scroll.style.backgroundColor = '#e0dddd52';
  }
}
