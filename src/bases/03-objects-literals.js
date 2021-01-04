
// Object Literals

const persona = {
    nombre: 'Manuel',
    apellido: 'Polaina',
    edad: 39,
    direccion: {
        calle: 'Carretera Trassierra',
        codigo: 14011,
        ciudad: 'Córdoba'
    }
}

console.log( persona ) // nombre: Manuel
// console.table( persona )

const persona2 = persona // ASIGNACIÓN POR REFERENCIA
persona2.nombre = 'Peter'

const persona3 = {...persona} // Operador Spread
persona3.nombre = 'Fabio'


console.log( 'Persona 1: ', persona ) // Peter, xq modificamos la referencia
console.log( 'Persona 2: ', persona2 ) // Peter
console.log( 'Persona 3: ', persona3 )

