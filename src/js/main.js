import data from "./data";
import { Pokemon } from "./components/PokemonCards";
import arrayShuffle from "array-shuffle";

const inputE1 = document.querySelector("input");

renderPokemon(arrayShuffle(data));

function renderPokemon(list) {
  list.forEach((pokemonObj) => {
    Pokemon(pokemonObj);
  });
}

renderPokemon(data);

//add slash to active search

document.addEventListener("keydown", (e) => {
  if (e.key === "/") {
    inputE1.focus()
  }
});


function handleSearch(){
  console.log("Hello");
  
}

inputEl.addEventListener("keypress")