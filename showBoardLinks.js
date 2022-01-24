let boardArray = [];
const h5Element = document.createElement("p5");
let boardContainer = document.createDocumentFragment();
let joiner = " / ";
const boardLinksDiv = document.querySelector(".board-links")

h5Element.setAttribute("id", "h5");

boardLinksDiv.appendChild(h5Element);

let mmoboard = document.createElement("a");
mmoboard.innerText = "mmo";
mmoboard.href = "./123board.html";

let rpgboard = document.createElement("a");
rpgboard.innerText = "rpg";

let mmorpgboard = document.createElement("a");
mmorpgboard.innerText = "mmorpg";

let oldSchoolRpgBoard = document.createElement("a");
oldSchoolRpgBoard.innerText = "osrpg";

let gamingboard = document.createElement("a");
gamingboard.innerText = "gaming";

let gameDevBoard = document.createElement("a");
gameDevBoard.innerText = "gamedev";

boardArray.push(mmoboard, rpgboard, mmorpgboard, oldSchoolRpgBoard, gamingboard, gameDevBoard);

boardArray.forEach((e) => {
  h5Element.appendChild(e);
  h5Element.append(joiner);

})
