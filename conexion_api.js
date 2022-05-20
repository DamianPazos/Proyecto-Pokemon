// Guardo la url
const urlPokemon = 'https://pokeapi.co/api/v2/pokemon';

// Seleccionar elemento HTML
const elementCard = document.getElementById('contenedor-card');

// Seleccionar ID
let idPokemonSelector = prompt('Ingrese ID');

// Creamos el elemento HTML
const cardPokemon = document.createElement('div');

// Consumo de API (async genera una promesa en la funcion)
const tomaApi = async function f() {
    // Guardo el la respuesta del fetch (await espero a que devuelva una respuesta)
    const response = await fetch(`${urlPokemon}/${idPokemonSelector}/`);
    // Tranformo en json la respuesta y la guardo
    const pokemon = await response.json();
    // Genro una lista con los datos necesarios
    const listaDatos = [pokemon.id, pokemon.name, pokemon.order];
    // Retorno la lista de datos
    return listaDatos;
} 
// Imprimo por consola los datos para verificar
tomaApi().then(console.log);

// const tomaApi = fetch(`${urlPokemon}/pikachu/`)
//     .then((resolve) => resolve.json())
//     .then((data) => {
//         const pokemonName = data.name;
//         const h1 = document.createElement('h1');
//         h1.innerText = pokemonName;
//     }
//     )

// console.log(json);

// (forms) => {
//         const datosPokemon = forms;
//         const namePokemon = forms[0].name;
//         cardPokemon.innerHTML = `<div class="card-header m-1 border">
//         <div class="card-title p-1 text-center" id="nombre-pokemon">${namePokemon}</div>
//         <div class="card-subtitle text-center" id="id-pokemon">#ID</div>
//     </div>`;
//     }