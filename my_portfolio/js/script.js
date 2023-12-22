const navToggle = document.querySelector(".nav_toggle"),
      navMenu = document.querySelector(".nav_menu");


    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
        navToggle.classList.toggle("active");
    })



// typing text

let typed = new Typed(".profession_text", {
    strings: ["Web Developer", "Web Designer", "Web Monster"],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true,
})


