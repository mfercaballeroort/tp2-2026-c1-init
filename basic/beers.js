/** TODO **
 * En el siguiente array de objetos (beers), del archivo data/beers.js, desarrollar las siguientes funciones:
 * 1.- Desarrollar una function que retorne un array que incluya el precio segun el siguiente criterio
 *     a) Si el  grado alcoholico es < a 5.0 el precio es 300
 *     b) Si el grado alcoholico es >= 5.0 el precio es 350
 *     c) La cerveza 'Purple Iris' esta de oferta y si precio es 320
 * 2.- Desarrolle una función que inserte la propiedad file_name a cada uno de los objetos, esta propiedad debe tener solo
 * el nombre del archivo de la propiedad label (upload_xOMnlK-large.png, etc..)
 * 3.- Desarrollo una funcion que ordene por tipo (type)
 * 
 * **/
 HEAD

import beers from "./data/beers.js";

// Ejercicio 1: Función para obtener precio según contenido de alcohol y ofertas especiales
function getPrice(abv, name) {
    if (name === 'Purple Iris') {
        return 320;
    }
    return abv < 5.0 ? 300 : 350;
}

// Ejercicio 2: Función para agregar propiedad file_name desde la URL de label
function addFileName(beersArray) {
    return beersArray.map(beer => {
        const urlParts = beer.label.split('/');
        const fileName = urlParts[urlParts.length - 1];
        return { ...beer, file_name: fileName };
    });
}

// Ejercicio 3: Función para ordenar cervezas por tipo
function sortByType(beersArray) {
    return [...beersArray].sort((a, b) => a.type.localeCompare(b.type));
}

// Ejecutar los ejercicios
// Ejercicio 1: Agregar precios a las cervezas
const beersWithPrices = beers.map(beer => ({
    ...beer,
    price: getPrice(beer.abv, beer.name)
}));

console.log("Cervezas con precios:");
console.log(beersWithPrices);

// Ejercicio 2: Agregar propiedad file_name
const beersWithFileName = addFileName(beers);
console.log("\nCervezas con nombres de archivo:");
console.log(beersWithFileName);

// Ejercicio 3: Ordenar por tipo
const sortedBeers = sortByType(beers);
console.log("\nCervezas ordenadas por tipo:");
console.log(sortedBeers);
import { getPrice } from "./data/beers.js";
import fs from "fs";

fs.readFile

console.log(beers);
getPrice();

export function getPrice(abv, name) {
    // 1. Excepción: Caso particular por nombre
    if (name === 'Purple Iris') {
        return 320;
    }

    // 2. Regla general por grado alcohólico (ABV)
    if (abv < 5.0) {
        return 300;
    } else {
        return 350;
    }
}

// Importamos la función (si está en otro archivo) o la usamos directamente
const beersConPrecio = beers.map(beer => {
    return {
        ...beer, // Usamos el spread operator para mantener los datos originales
        price: getPrice(beer.abv, beer.name) // Invocamos tu función aquí
    };
});

console.table(beersConPrecio);

