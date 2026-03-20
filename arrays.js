let numbers = [1, 2, 3, 4, 5];

// arrays de objetos es la estructura basica para backends
// es la forma de manipular datos, de transmitirlos y de almacenarlos
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879},
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 }
];

// a partir del array de objetos nace el JSON, que es el formato de intercambio de datos mas utilizado en la web, es un formato de texto que representa datos estructurados, basado en la sintaxis de objetos de JavaScript. JSON es fácil de leer y escribir para los humanos, y fácil de parsear y generar para las máquinas. JSON se utiliza principalmente para transmitir datos entre un servidor y una aplicación web, aunque también se puede usar para almacenar datos localmente o en archivos.
// Javascript Object Notation (JSON)

// for (const inventor of inventors) {
//     console.log(inventor.first);
// }

// const mifuncioon = function(inventor){
//     console.log(inventor.last);
// }

//inventors.forEach(inventor => console.log(inventor.first));

inventors
    .filter(inventor => inventor.year > 1800)
    .forEach(inventor => console.log(inventor.first));

//TODO: con el array que esta en data, inventors.js. Probar las funciones inmutables
// find, findIndex, some, every, sort, reduce



