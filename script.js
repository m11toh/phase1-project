const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav_links")
const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-2-line"
    );
});
