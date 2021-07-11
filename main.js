import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import Card from "./src/components/Card"

const $root = document.querySelector('#root')
const $htmlCard = Card()

$root.insertAdjacentHTML('beforeend', $htmlCard)