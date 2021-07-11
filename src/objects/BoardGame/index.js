import Card from '../../components/Card';
import './style.css'

function BoardGame(amountCards){

  const $htmlCardGame = Card();
  const $htmlContent = $htmlCardGame.repeat(amountCards)

  return `
  <section class="board-game">
    ${$htmlContent}
  </section>
  `
}

export default BoardGame;