const btnMore = document.querySelector(".more")
const btnMenu = document.querySelector(".btn-menu")
const listMenu = document.querySelector(".list_menu")
const items = document.querySelectorAll(".item-city")
const cityCards = document.querySelectorAll(".city-card")
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

const handleClick = (e, index) => {}

items.forEach((e, index) => {
   let cityCard = cityCards[index]

   if (index === 6 || index === 7) {
      cityCard = cityCards[index - 2]
      console.log(cityCard)
   }

   e.addEventListener("click", () => {
      document.querySelector(".item-city.active").classList.remove("active")
      document.querySelector(".city-card.active").classList.remove("active")

      e.classList.add("active")
      cityCard.classList.add("active")
      if (listMenu.classList.contains("active")) {
         listMenu.classList.remove("active")
      }
   })
})
