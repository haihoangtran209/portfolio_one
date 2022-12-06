const menu = document.querySelector(".navbar__links")
const menuButon = document.querySelector(".navbar__icons")

menuButon.addEventListener('click', ()=>{
    menu.classList.toggle("navbar__open");
    menuButon.classList.toggle("open");
})


