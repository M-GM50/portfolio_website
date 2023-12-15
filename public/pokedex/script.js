// Function Alerts
import allPokemon from "./pokemon.js";

let card = document.getElementById("bulby");
let findType = document.querySelectorAll("td");

let showImg = function (e) {
  let pokemonId = e.currentTarget.id;
  for (let i = 0; i < allPokemon.length; i++) {
    let pokemon = allPokemon[i];
    if (allPokemon[i].id === +pokemonId) {
      card.querySelector(".cardName").innerText = pokemon.name;
      card.querySelector(".cardId").innerText = "#" + pokemon.id;
      card.querySelector(".cardHeight").innerText = pokemon.height + "cm";
      card.querySelector(".cardWeight").innerText = pokemon.weight + "kg";
      card.querySelector(".cardTypes").innerText = pokemon.types;
      card.querySelector("img").src = pokemon.sprite;
      card.showModal();
    }
  }
};

//   card.showModal();

for (var i = 0; i < findType.length; i++) {
  findType[i].addEventListener("click", showImg);
}

//Close dialog

let dialogCross = document.getElementById("dialogCross");


function dialogClose() {
  card.close();
  console.log("hey")
}

dialogCross.addEventListener("click", dialogClose);

