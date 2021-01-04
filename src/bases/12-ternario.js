
// tradicional
// const activo = true
// let mensaje = ''

// if ( activo ) {
//     mensaje = 'Activo'
// } else {
//     mensaje = 'Inactivo'
// }
// console.log(mensaje)


// OPERADOR TERNARIO

const activo = true
// const mensaje = ( activo ) ? 'Activo' : 'Inactivo'
// const mensaje = ( activo ) ? 'Activo' : null
const mensaje = activo && 'Activo'
console.log(mensaje)