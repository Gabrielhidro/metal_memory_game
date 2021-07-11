import PlayerName from "../../components/PlayerName"
import './style.css'

function ScoreBoard(){

  return `
  <header class="score-board">
    ${PlayerName('player1')}
    ${PlayerName('player2')}
  </header>
  `
}

export default ScoreBoard;