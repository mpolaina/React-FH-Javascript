
// Arrays

// const arreglo = new Array()
// array literal notation

const array1 = [1,2,3,4] 
// arreglo.push(1)

let array2 = [ ...array1, 5 ]
// let arreglo2 = arreglo
// arreglo2.push( 5 ) // modifica también arreglo

const array3 = array2.map( numero => numero * 2 )

console.log( 'array1', array1 )
console.log( 'array2', array2 )
console.log( 'array3', array3 )