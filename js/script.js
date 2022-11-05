const hamburger = document.querySelector(".header__hamburger");
const headerNav = document.querySelector(".header__nav");

hamburger.addEventListener("click", () => { 
    hamburger.classList.toggle("active");
    headerNav.classList.toggle("active"); 
})