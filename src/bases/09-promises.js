// PROMESAS
// Son Asíncronas
import { getHeroeById } from './bases/08-import-export'

// const promesa = new Promise( (resolve, reject) => {
    
//     setTimeout(() => {
//         const heroe = getHeroeById(2)
//         resolve( heroe )
//         reject('No se encontró el heroe')
//     }, 2000);
// })

// promesa.then( (heroe) => console.log(heroe))
//        .catch( err => console.warn( err ))


// FUNCIONES QUE REGRESAN PROMESAS ========================

const getHeroeByIdAsync = ( id ) => {
    
    return new Promise( (resolve, reject) => {
        
        setTimeout(() => {
            const heroe = getHeroeById( id )
            if ( heroe ) {
                resolve( heroe )  
            } else {
                reject('No se encontró el heroe')
            }
        }, 2000);
        
    })
    
}

getHeroeByIdAsync(2)
    // .then( heroe => console.log( heroe ))
    // .catch( err => console.warn( err ))
    .then( console.log )
    .catch( console.warn )