const $squareContainerParent = document.querySelector("#square-container");
const $squareContainer = document.createElement("div");
const $squareBox = document.createElement("div");

$squareContainer.classList.add("square-containertest");
$squareBox.classList.add("square");

$squareContainer.appendChild($squareBox);

$squareContainerParent.appendChild($squareContainer);
