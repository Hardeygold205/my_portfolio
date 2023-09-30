const OpenMenu = document.getElementById("mobile-nav");
const HamburgerIcon = document.getElementById("hamburger");
const MenuItems = document.querySelectorAll(".mobile-nav nav ul li a");

HamburgerIcon.addEventListener('click', () => {
    OpenMenu.classList.add("showmenu");
});

MenuItems.forEach((MenuItem) => {
    MenuItem.addEventListener('click', () => {
        OpenMenu.classList.toggle("showmenu");
    });
});

const closeIcon = document.getElementById("close-icon");

closeIcon.addEventListener('click', () => {
    OpenMenu.classList.remove("showmenu");
});

document.addEventListener("click", (event) => {
    const target = event.target;

    
    if (!target.closest(".mobile-nav") && !target.closest(".hamburger")) {
        OpenMenu.classList.remove("showmenu");
    }
});

const Dark = document.getElementById("dark-mode");
const body =document.body;

Dark.addEventListener('click', () => {
    body.classList.toggle("darkmode");
});

const Blue = document.getElementById("blue-mode");

Blue.addEventListener('click', () => {
    body.classList.remove("darkmode")
});