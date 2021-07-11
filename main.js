import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame"

const $root = document.querySelector('#root')
const $htmlBoardGame = BoardGame(9)

$root.insertAdjacentHTML('beforeend', $htmlBoardGame)

$root.addEventListener('click', callback)
function callback(){
  console.log('oi');
}