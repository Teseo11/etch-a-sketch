const $squareContainerParent = document.querySelector(
  "#square-container-parent"
);

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
