
const personajes = ['Fabio', 'Miranda', 'Peka']

const [ , , pers2 ] = personajes

console.log( pers2 )

const retornaArray = () => {
    
    return ['ABC', 123]
}

const [ letras, numeros ]= retornaArray()
console.log( letras, numeros )

// TAREA
// 1. primer valor del arr se llamará nombre
// 2. primer valor del arr se llamará setNombre
const usaState = ( valor ) => {
    return [ valor, () => console.log('Hola mundo')]
}

const [nombre, setNombre] = usaState( 'Goku' )
console.log( nombre )
setNombre() 