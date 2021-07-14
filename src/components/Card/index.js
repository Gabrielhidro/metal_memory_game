import './style.css'

function Card(icon = "card-side"){
  return `
  <article class="card-game">
    <img src="./images/${icon}.jpg">
  </article>
`
}

export default Card;