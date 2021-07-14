import Card from "../Card"
import './style.css'

function CardFrontBack(){
  return `
    <article class="card-front-back">
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