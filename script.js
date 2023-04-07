// Get dom element parent container
const $squareContainerParent = document.querySelector(
  "#square-container-parent"
);
// Buttons
const $btnBoxSize = document.getElementById("btn-box-size"),
  $btnBlackBox = document.getElementById("btn-black-box"),
  $btnRainbowBox = document.getElementById("btn-rainbow-box"),
  $btnEraser = document.getElementById("btn-eraser");
// Flag
let flag = "0";
// Default color
let colorBox = "black";

// Function that adds rows and columns
const addSquares = (column, row) => {
  for (let i = 0; i < column; i++) {
    // Add columns
    const $squareBoxContainer = document.createElement("div");
    $squareBoxContainer.classList.add("square-box-container");
    $squareContainerParent.appendChild($squareBoxContainer);

    // Add rows
    for (let index = 0; index < row; index++) {
      const $squareBox = document.createElement("div");
      $squareBox.classList.add("square-box");
      $squareBox.setAttribute("id", "square-box");
      $squareBoxContainer.appendChild($squareBox);
    }
  }
};

// Default value
addSquares(16, 16);

// Mientras el contendor padre tenga hijos(verificado con el metodo hasChildNodes)
// se va borrando las viejas columnas y filas, y se agregan las nuevas que
// introducio el usuario.
function removeChildsFromParentContainer() {
  while ($squareContainerParent.hasChildNodes()) {
    $squareContainerParent.removeChild($squareContainerParent.firstChild);
  }
}

// Get user columns/row size
$btnBoxSize.addEventListener("click", () => {
  let columnSize = prompt("Dame el valor 1", 16);
  let rowSize = columnSize;
  if (isNaN(columnSize) === true || columnSize === null) {
    alert("Debes ingresar un numero!");
  } else if (columnSize > 100) {
    alert("No se puede ingresar valores mayores a 100");
  } else {
    removeChildsFromParentContainer();
    addSquares(parseInt(columnSize), parseInt(rowSize));
  }
});

function getColor(pColor) {
  return (colorBox = pColor);
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

$squareContainerParent.addEventListener("mouseover", (e) => {
  if (flag === 1) {
    e.target.style.setProperty("background-color", getRandomColor());
  } else {
    e.target.style.setProperty("background-color", colorBox);
  }
});

$btnBlackBox.addEventListener("click", () => {
  flag = 0;
  getColor("black");
});

$btnEraser.addEventListener("click", () => {
  flag = 0;
  getColor("white");
});

$btnRainbowBox.addEventListener("click", () => {
  flag = 1;
});
