// recuperation du hamberger-menu
const menu = document.querySelector(".menu")

// recuperation de la navlinks
const navlinks = document.querySelector(".nav_links")

// ajout d'un evenement qui fera apparaitre et disparaitre le menu
menu.addEventListener("click", ()=>{
    navlinks.classList.toggle("mobile-menu")
})