let ham = document.querySelector(".ham");
let mobel = document.querySelector(".mobel");
ham.addEventListener("click", () => {
  mobel.classList.toggle("active");
});
