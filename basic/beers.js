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
<<<<<<< HEAD
=======

import beers from "./data/beers.js";
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

