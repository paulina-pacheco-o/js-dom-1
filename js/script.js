const button = document.getElementById(`button-light`)
//img.getElementById(`lampadina-spenta`)

button.addEventListener(`click`, function () {
  //img.classList.remove(`lampadina-spenta`);
  //lampadina - spenta.src = `img/yellow_lamp.png`;
  //lampadina.alt = `lampadina-spenta`;
  const lampadina = document.getElementById(`lampadina-spenta`)
  lampadina.src = `img/yellow_lamp.png`;
  lampadina.alt = `lampadina-spenta`;
})