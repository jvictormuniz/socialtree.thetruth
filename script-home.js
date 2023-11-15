const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

const myObserver = new IntersectionObserver((entries) => {
     entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
     }
    })
 })

 const elements = document.querySelectorAll('.hidden')

 elements.forEach( (element) => myObserver.observe(element))

