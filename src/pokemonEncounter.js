let pokemonRenderArea = document.getElementById("pokemonEncounterArea");

function renderPokemonData(pokemonData) {
    pokemonRenderArea.innerText = pokemonData.name;
}

async function getPokemon() {
    console.log("Getting Pokemon now!!");

    // Hardcoded for development, repalce "pikachu" with a random number
    // random number is ID from 1 to 1025
    let apiResponse = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    let apiData = await apiResponse.json();

    // console.log(apiData);
    // Name, Types, Image, Sound
    // let pokemonName = apiData.name;
    // return pokemonName;

    return {
        name: apiData.name,
        types: apiData.types,
        image: apiData.sprites.other.home.front_default,
        sound: apiData.cries.latest
    }
}

let encounterButtom = document.getElementById("pokemonEncounterButton");

// encounterButtom.addEventListener("click", getPokemon);
// encounterButtom.addEventListener("click", (event) => getPokemon(event));
encounterButtom.addEventListener("click", async (event) => {
    
    console.log("Some block of code in the event listener");
    
    let pokemonResult = await getPokemon();
    
    console.log(pokemonResult);

    renderPokemonData(pokemonResult);
});