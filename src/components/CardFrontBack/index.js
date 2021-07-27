import Card from "../Card"
import './style.css'

function CardFrontBack(){
  window.cardFrontBack = {}
  window.cardFrontBack.handleClick = (event) => {
    const $origin = event.target
    const $cardFrontBack = $origin.closest('.card-front-back')

    $cardFrontBack.classList.toggle('-active')
  }

  return `
    <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
      <div class="card -front">
        ${Card()}
      </div>
      <div class="card -back">
        ${Card('iron')}
      </div>
    </article>
  `
}

export default CardFrontBack;