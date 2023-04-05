// Get dom element parent container
const $squareContainerParent = document.querySelector(
  "#square-container-parent"
);

const btnBoxSize = document.getElementById("btn-box-size");

let squareBoxGlobal;

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
      $squareBoxContainer.appendChild($squareBox);
    }
  }
};

addSquares(16, 16);

document.addEventListener("click", (e) => {
  console.log("hover en", e.target);
  if (e.target.matches(".square-box")) {
    squareBoxGlobal = e.target;
    squareBoxGlobal.classList.add("black");
  }

  if (e.target.matches(".btn-box-size")) {
    let columnSize = prompt("Dame el valor 1", 16);
    let rowSize = columnSize;
    removeChildsFromParentContainer();
    addSquares(columnSize, rowSize);
  }
});

function removeChildsFromParentContainer() {
  while ($squareContainerParent.hasChildNodes()) {
    $squareContainerParent.removeChild($squareContainerParent.firstChild);
  }
}

console.log($squareContainerParent.hasChildNodes());
