// MENU 
const hamburguer = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click",()=>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// CONFIGURANDO O SLIDE 
new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
});
 

  