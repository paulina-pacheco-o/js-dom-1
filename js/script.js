const lampadina = document.getElementById(`lampadina`)
const button = document.getElementById(`button`)

console.log(button)

button.addEventListener(`click`, function () {
  lampadina.src = `./img/yellow_lamp.png`;
})