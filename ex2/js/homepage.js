let btnMore = document.querySelector(".more")
let btnMenu = document.querySelector(".btn-menu")
let listMenu = document.querySelector(".list_menu")

// event
btnMore.addEventListener("click", (e) => {
   if (!btnMore.classList.contains("active")) {
      btnMore.classList.add("active")
   } else {
      btnMore.classList.remove("active")
   }
})

btnMenu.addEventListener("click", () => {
   if (!listMenu.classList.contains("active")) {
      listMenu.classList.add("active")
   } else {
      listMenu.classList.remove("active")
   }
})
