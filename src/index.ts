//import * as HeroClass from "./classes/Hero";
// import { Hero } from "./classes/Hero";
// import { powers } from './data/powers';
// import { getPokemon } from './generics/get-pokemon';

import { Pokemon } from "./decorators/pokemon-class";

// const ironMan = new Hero('Iron Man', 1, 50);

// console.log(ironMan);
// console.log(ironMan.power);

// console.log(powers);


// getPokemon(1)
//     .then( pokemon => console.log(pokemon))
//     .catch( error => console.log( error))
//     .finally( () => console.log('Finally petition'))

const charmander = new Pokemon('Charmander');

(Pokemon.prototype as any).customName = 'Pikachu';

// console.log(charmander.savePokemonDB(50));
charmander.savePokemonDB(50);
