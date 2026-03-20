// Tipos de datos en javascript
// Number, String, Boolean, Null, Undefined, Symbol, Object
// Javsacript es un lenguaje de tipado dinámico, lo que significa que no es necesario declarar el tipo de dato de una variable, 
// el tipo de dato se asigna automáticamente en tiempo de ejecución.

// Number
let var1 = 1;
// var es obsoleto, se recomienda usar let o const para declarar variables
var var2 = 3.14;
var var3 = 0;
var var4 = -0;

console.log("1 / 0", typeof ( var1 / var3));
console.log("Raiz cuadrada de -1", Math.sqrt(-1));

// String
let var5 = "Hola mundo's ";
let var6 = 'Hola mundo "casa" '; 
let var7 = '🍕';

console.log("quiero una " + var7 + " por favor");

// backticks
console.log(`quiero una ${var7} por favor`);

// Null Data Type: representa la ausencia de valor
let nulo = 45;
nulo = null;
console.log("nulo", nulo);

// Undefined Data Type: representa una variable que ha sido declarada pero no asignada
let micasa;
micasa = "Mi casa es tu casa";
console.log("micasa", micasa);

// Objetos: como se declaran y se usan
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

console.log("persona", persona);
// Accediendo a las propiedades con notación de punto
console.log("nombre", persona.nombre);
// Accediendo mediante notación de corchetes
console.log("edad", persona["edad"]);

persona.nombre = "Pedro";

