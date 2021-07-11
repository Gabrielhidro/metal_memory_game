import Card from '../../components/Card';

function BoardGame(amountCards){

  const $htmlCardGame = Card();
  const $htmlBoardGame = $htmlCardGame.repeat(amountCards)

  console.log($htmlCardGame);

  return $htmlBoardGame
}

export default BoardGame;