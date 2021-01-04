
// FUNCIONES

const saludar = function( nombre ) {
    return `Hola, ${ nombre }`
}

console.log( saludar( 'Manuel' ) )

// ARROW FUNCTIONS

const saludando = nombre => `Hola, que tal ${ nombre }`
console.log( saludando('Manuel') )

// para retonornar un objeto se usan los ()
// eslint-disable-next-line
const getUser = () => (
    {
        uid: 'abc1234',
        username: 'polainer'
    }
)

//const users = getUser()
// console.log( users )

// TAREA
// 1. Convertir en arrow function
// 2. retornar un objeto implicito

// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'abc456',
//         username: nombre
//     }
// }

const getUsuarioActivo = nombre => (
    { uid: 'abc456', username: nombre }
)

const usuarioActivo = getUsuarioActivo( 'Manuel' )
console.log( usuarioActivo  )