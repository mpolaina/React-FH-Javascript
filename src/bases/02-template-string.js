
// Template Strings

const nombre = 'Manuel'
const apellido = 'Polaina'

const persona = `${ nombre } ${ apellido }`
console.log( persona )

function getSaludo( nombre ) {
    return 'Hola ' + nombre
}

console.log(`Este es un texto: ${ getSaludo( nombre ) }`)