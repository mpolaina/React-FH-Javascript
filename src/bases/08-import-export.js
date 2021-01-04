// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';
// import default, { otras } from...

// console.log( owners )

export const getHeroeById = ( id ) =>  heroes.find( heroe => heroe.id === id )    
// console.log( getHeroes(2).name )


export const getHeroesByOwner = owner => heroes.filter( heroe => heroe.owner === owner )
// console.log( getHeroesByOwner('DC') )