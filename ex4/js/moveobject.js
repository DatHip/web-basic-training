let box = document.querySelector(".box")
let object = document.querySelector(".object")

let myFunction = (e) => {
   let xPosition = e.offsetX - object.offsetWidth / 2
   let yPosition = e.offsetY - object.offsetWidth / 2

   let translateValue = `translate3d(${xPosition}px , ${yPosition}px, 0)`

   object.style.transform = translateValue
}
box.addEventListener("click", myFunction)
