const $squareContainerParent = document.querySelector("#square-container"),
  $squareContainer = document.createElement("div"),
  $squareBox = document.createElement("div");

const addSquares = (column, row) => {
  for (let i = 0; i < column; i++) {
    const $squareContainer = document.createElement("div");
    $squareContainer.classList.add("square-containertest");
    $squareContainerParent.appendChild($squareContainer);
    for (let index = 0; index < row; index++) {
      const $squareBox = document.createElement("div");
      $squareBox.classList.add("square");
      $squareContainer.appendChild($squareBox);
    }
  }
};

addSquares(16, 16);
