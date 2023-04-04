const $squareContainer = document.querySelector("#square-container");

// Aplicar estilos y una clase a la variable square

for (let index = 0; index < 200; index++) {
  const $square = document.createElement("div");
  $square.classList.add("square");
  $squareContainer.appendChild($square);
}
