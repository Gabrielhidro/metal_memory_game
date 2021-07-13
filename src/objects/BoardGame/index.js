import CardFrontBack from '../../components/CardFrontBack';
import './style.css'

function BoardGame(amountCards){

  const $htmlCardFront = CardFrontBack();
  const $htmlContent = $htmlCardFront.repeat(amountCards);

  return `
  <section class="board-game">
    ${$htmlContent}
  </section>
  `
}

export default BoardGame;