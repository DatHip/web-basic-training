let btnClose = document.querySelector(".btn-close")
let btnMenu = document.querySelector(".btn-menu")
let slider = document.querySelector(".body")
let container = document.querySelector(".content")

btnMenu.addEventListener("click", () => {
   slider.classList.add("active")
})
btnClose.addEventListener("click", () => {
   slider.classList.remove("active")
})

let btnMenus = document.querySelectorAll(".menu-title")

btnMenus.forEach((e) => {
   e.addEventListener("click", (e) => {
      document.querySelector(".menu-title.active").classList.remove("active")

      e.target.classList.add("active")
      container.innerHTML = "Demo Container " + e.target.innerText

      if (slider.classList.contains("active")) {
         slider.classList.remove("active")
      }
   })
})
