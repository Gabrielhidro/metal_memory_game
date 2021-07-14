import Card from "../Card"

function CardFrontBack(){
  return `
    <article class="card-front-back">
      ${Card()}
      ${Card('iron')}
    </article>
  `
}

export default CardFrontBack;