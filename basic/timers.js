
console.log('1. Inicio del programa');
// no blquea el programa, se ejecuta en segundo plano
setTimeout(() => console.log('2. Hola mundo'), 5000);
console.log('3. Fin del programa');

// function mifuncion(){
//     console.log('Hola mundo');
// }

//setInterval(() => console.log('4. Intervalo cada 2 segundos'), 2000);

let i = 0;
const timerid = setInterval(() => {
    console.log('Intervalo cada 2 segundos');
    i++;
    if (i === 5) {
        clearInterval(timerid);
    }
}, 2000);
