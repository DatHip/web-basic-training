let btnClose = document.querySelector(".btn-close");
let btnMenu = document.querySelector(".button-menu");
let slider = document.querySelector(".sidebar");
let container = document.querySelector(".container-content");
let btnMenus = document.querySelectorAll(".menu-title");

btnMenu.addEventListener("click", () => {
  slider.classList.add("active");
});
btnClose.addEventListener("click", () => {
  slider.classList.remove("active");
});

btnMenus.forEach((e) => {
  e.addEventListener("click", (e) => {
    document.querySelector(".menu-title.active").classList.remove("active");

    e.target.classList.add("active");
    container.innerHTML = "Demo Container " + e.target.innerText;

    if (slider.classList.contains("active")) {
      slider.classList.remove("active");
    }
  });
});
