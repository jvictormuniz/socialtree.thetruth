const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

ScrollReveal().reveal('.reveal');
ScrollReveal().reveal('.lidership-title');
ScrollReveal().reveal('.joaogabriel');
ScrollReveal().reveal('.suannycunha');
