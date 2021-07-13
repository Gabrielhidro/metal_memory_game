import Card from "../Card"

function CardFrontBack(){
  return `
    <article class="card-front-back">
      ${Card()}
      ${Card()}
    </article>
  `
}

export default CardFrontBack;