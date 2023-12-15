const fs = require("fs");

const getData = async () => {
  let query = `query samplePokeAPIquery {
  pokemon_v2_pokemon(limit: 151) {
    id
    name
    height
    weight
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
    pokemon_v2_pokemonsprites {
      sprites
    }
  }
}`;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const res = await fetch("https://beta.pokeapi.co/graphql/v1beta", {
    method: "post",
    body: JSON.stringify({ query }),
  });

  let { data } = await res.json();

  let p = data.pokemon_v2_pokemon.map(function (p) {
    const { id, name, height, weight } = p;
    const types = p.pokemon_v2_pokemontypes.map((t) => t.pokemon_v2_type.name);
    const sprite = JSON.parse(
      p.pokemon_v2_pokemonsprites[0].sprites
    ).front_default;

    // pokemon api returns height in decimeters
    // and weight in hectograms
    return {
      id,
      name: capitalizeFirstLetter(name),
      weight: weight / 10,
      height: height * 10,
      types,
      sprite,
    };
  });

  fs.writeFileSync("./pokemon.json", JSON.stringify(p, null, 2));
};

getData();
