// Guardo la url
const urlPokemon = 'https://pokeapi.co/api/v2/pokemon';

// Seleccionar elemento HTML
const elementCard = document.getElementById('contenedor-card');

// Seleccionar ID
let idPokemonSelector = prompt('Ingrese ID');

// Creamos el elemento HTML
const cardPokemon = document.createElement('div');

// Consumo de API (async genera una promesa en la funcion)
const tomaApi = async () => {
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
